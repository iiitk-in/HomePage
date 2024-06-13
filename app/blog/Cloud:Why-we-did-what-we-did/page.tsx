import Navbar from "@/app/components/Navbar";
import BlogTitle from "../components/BlogTitle";
import BlogDescription from "../components/BlogDescription";
import BlogBody from "../components/BlogBody";
import BlogSection from "../components/BlogSection";
import BlogList from "../components/BlogList";
import BlogListElement from "../components/BlogListElement";
import BlogLink from "../components/BlogLink";

const Blog = () => {
  return (
    <div className="overflow-auto bg-gradient-to-b from-neutral-900 to-slate-800">
      <div>
        <Navbar currentPage="Blog" />
      </div>
      <div className="mx-10 ml-12 mr-12 sm:w-[720px] mt-12 flex flex-col sm:ml-auto sm:mr-auto justify-center  items-center ">
        <div className="flex flex-col justify-center">
          <BlogTitle title="Cloud: Why we did what we did" />
          <BlogDescription
            date="June 13, 2024"
            author="Harsh Iyer"
            position="Lead Developer"
          />
          <BlogBody>
            <BlogSection>
              <i>
                The thought process of deciding how we would eventually get
                IIITK.in up.
              </i>
            </BlogSection>
            <BlogSection>
              One of the biggest questions you ask yourself when building a
              service is how you will deploy it and take it from local to
              global.<br></br>
              <br></br> So this is the story of how we ended up using Cloudflare
              Pages and Workers to deploy IIITK.in .
            </BlogSection>
            <BlogSection>
              While choosing we had a few options to consider:
            </BlogSection>
            <BlogList>
              <BlogListElement>
                We could have hosted it on a traditional VM based server
                provided by Azure, but that would have been expensive since the
                student pack provides only 100$ worth credits, which as I learnt
                later, runs out pretty quickly.
              </BlogListElement>
              <BlogListElement>
                We could have used a static hosting service like Vercel, but
                that would kinda limit our options in the near future.
              </BlogListElement>
              <BlogListElement>
                Some serverless service that was both cheap and could handle
                heavy operations with support for dynamic pages. Luckily for us,
                serverless was in the rise and one of the largest CDN providers,
                Cloudflare, had a service called Pages.
              </BlogListElement>
            </BlogList>
            <BlogSection>
              Now, we had used Cloudflare to host some personal small scale
              projects so we were pretty familiar with the services they
              provided and the pricing.
            </BlogSection>
            <BlogSection>
              We decided to go with Cloudflare Pages for the front end and
              Cloudflare Workers for the backend, both of them were very
              generously provided for the price of 0$. This would give us the
              flexibility to host dynamic pages and serverless functions in the
              same place.
            </BlogSection>
            <BlogSection>
              A bit after we deployed IIITK.in for the first time, I got
              interested in DevOps and started playing around with Azure VMs,
              Docker and Kubernetes and then I wondered, why not we just move
              IIITK.in to an Azure hosted VM running K8s so we could have more
              freedom and control over the infrastructure? Basically, run the
              image in a K8s cluster/ Docker container over the cloud on a
              static IP and route all requests to it.
            </BlogSection>
            <BlogSection>
              I did some testing hosting Port0 on Azure and it was a success,
              but I noticed a problem, the cost. The cost of running a VM on
              Azure was way more than the cost of running a serverless container
              on Cloudflare, which was 0. Even running a K8s cluster on Azure
              drained all of my credits in a week. So, we decided to stick with
              Cloudflare for the time being.
            </BlogSection>
            <BlogSection>
              So its pretty safe to say that we will be sticking with Cloudflare
              for the foreseeable future.
            </BlogSection>
            <BlogSection>
              And ofcourse, as always all our code is open source at{" "}
              <BlogLink link="https://github.com/IIITK-in/Port0">
                GitHub
              </BlogLink>{" "}
              and we&apos;re always looking for suggestions and contributions
              and if you have any questions or feedback, please feel free to
              reach out to us at <u> dev@port0.iiitk.in.</u>
            </BlogSection>
          </BlogBody>
        </div>
      </div>
    </div>
  );
};

export default Blog;
