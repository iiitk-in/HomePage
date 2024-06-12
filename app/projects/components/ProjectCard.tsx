"use client";
import { IoOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s ease-in 0.2s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const ProjectCard = (props: any) => {
  const { title, description, github, link } = props;
  return (
    <Section>
      <div className="h-full  bg-gradient-to-t from-[#333333] to-[#282828] p-8 rounded-xl border border-1 border-[#606060] hover:border-white transition-all-ease-in-out duration-300">
        <div className="text-4xl font-bold bg-gradient-to-b from-cyan-400 to-green-600 text-transparent bg-clip-text">
          {title}
        </div>
        <div className="mt-2 text-xl text-[#A1A1A1] mb-20">{description}</div>
        <div className="flex flex-row text-xl font-semibold mt-4">
          <div className="bg-white px-2 py-1 rounded-md mr-4 flex flex-row items-center">
            <button
              onClick={() => {
                window.open(link, "_blank");
              }}
              className=" flex flex-row items-center"
            >
              <IoOpenOutline /> <pre className="mr-2"></pre>
              View
            </button>{" "}
          </div>
          <div className="bg-white px-2 py-1 rounded-md mr-4 flex flex-row items-center">
            <button
              onClick={() => {
                window.open(github, "_blank");
              }}
              className="ml-2 flex flex-row items-center"
            >
              <FaGithub />
              <pre className="mr-2"></pre>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default ProjectCard;
