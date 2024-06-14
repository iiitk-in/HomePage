import fs from "fs";
import matter from "gray-matter";

export default function getPostMetadata(basePath: string) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file: any) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename: any) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      author: matterResult.data.author.name,
      avatar: matterResult.data.author.avatar,
      position: matterResult.data.author.title,
      tags: matterResult.data.tags,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
