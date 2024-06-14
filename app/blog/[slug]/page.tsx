"use server";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "../utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Navbar from "@/app/components/Navbar";
import BlogTitle from "../components/BlogTitle";
import BlogSection from "../components/BlogSection";
import BlogBody from "../components/BlogBody";
import BlogDescription from "../components/BlogDescription";
import BlogList from "../components/BlogList";
import BlogListElement from "../components/BlogListElement";
import BlogLink from "../components/BlogLink";

function getPostContent(slug: string) {
  const folder = "app/blog/posts/";
  const file = folder + slug + ".md";
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export async function generateStaticParams() {
  const posts = getPostMetadata("app/blog/posts");
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) {
  const id = params?.slug ? params.slug : "";
  return {
    title: `IIITK.in Blog ${id}`,
  };
}

const Page = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className="overflow-auto bg-gradient-to-b from-neutral-900 to-slate-800">
      <div className="flex">
        <Navbar currentPage="Blog" />
      </div>
      <div className="mx-10 ml-12 mr-12 sm:w-[720px] mt-12 flex flex-col sm:ml-auto sm:mr-auto justify-center  items-center ">
        <div className="flex flex-col justify-center">
          <BlogTitle title={post.data.title} />
          <BlogDescription
            date={
              post.data.date.getDate() +
              " " +
              monthArray[post.data.date.getMonth()] +
              " " +
              post.data.date.getFullYear()
            }
            author={post.data.author.name}
            position={post.data.author.title}
            avatar={post.data.author.avatar}
          />
          <BlogBody>
            <article>
              <Markdown
                options={{
                  overrides: {
                    h1: BlogTitle,
                    p: BlogSection,
                    ul: BlogList,
                    li: BlogListElement,
                    ol: BlogList,
                    a: BlogLink,
                  },
                }}
              >
                {post.content}
              </Markdown>
            </article>
          </BlogBody>
        </div>
      </div>
    </div>
  );
};

export default Page;
