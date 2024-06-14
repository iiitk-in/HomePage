"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Searchicon from "./components/Searchicon";

const ProjectsPage = () => {
  const btnRef = useRef<HTMLInputElement>(null);
  const [outline, setOutline] = useState<boolean>(false);
  const setFocus = () => {
    if (btnRef.current) {
      btnRef.current.focus();
    }
  };

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      event.preventDefault();
      setFocus();
      setOutline(true);
    } else if (event.key === "escape") {
      setOutline(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);
  });
  return (
    <div className="overflow-auto bg-gradient-to-b from-neutral-900 to-slate-800">
      <div className="flex">
        <Navbar currentPage="Projects" />
      </div>
      <div>
        <div className="leading-tight mt-20 text-center text-6xl font-bold bg-gradient-to-b from-cyan-400 to-green-600 text-transparent bg-clip-text">
          <h1>Projects</h1>
        </div>
        <div className="flex flex-row justify-center lg:justify-end mt-5 sm:mt-5 sm:mx-10 ">
          <div
            className={`flex flex-row px-2 sm:px-8 py-4 rounded-xl bg-[#292929] border  hover:border-white transition-all-ease-in-out duration-300 ${
              outline ? "border-white" : "border-zinc-700"
            }`}
          >
            <input
              type="text"
              ref={btnRef}
              placeholder="Search Projects"
              className="bg-transparent border-none text-white focus:border-none focus:outline-none  text-start sm:text-lg mr-2 sm:w-fit-content placeholder:font-bold"
            />
            <div className="md:flex hidden flex flex-row">
              <div className="border border-1 border-white text-white bg-[#1F1F1F] px-[8px] rounded-md mr-2 hover:bg-[#404040] hover:cursor-pointer">
                Ctrl
              </div>
              <div className="border border-1 border-white text-white bg-[#1F1F1F] px-[8px] rounded-md mr-4 hover:bg-[#404040] hover:cursor-pointer">
                K{" "}
              </div>
            </div>
            <div className="hover:cursor-pointer">
              <Searchicon />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center md:text-start text-4xl font-bold text-white mx-10 mt-5">
            Popular Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 mx-10 flex gap-8  my-10 gap-y-10  mb-24">
            <ProjectCard
              title="Port0"
              description="Authentication service at the center of IIITK.in"
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
            <ProjectCard
              title="Attendance Helper"
              description="Attendance Tracking tool."
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
            <ProjectCard
              title="Some other Project"
              description="Some other project on IIITK.in"
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
            <ProjectCard
              title="Port0"
              description="Authentication service at the center of IIITK.in"
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
            <ProjectCard
              title="Attendance Helper"
              description="Attendance Tracking tool."
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
            <ProjectCard
              title="Some other Project"
              description="Some other project on IIITK.in"
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
            <ProjectCard
              title="Port0"
              description="Authentication service at the center of IIITK.in"
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
            <ProjectCard
              title="Attendance Helper"
              description="Attendance Tracking tool."
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
            <ProjectCard
              title="Some other Project"
              description="Some other project on IIITK.in"
              github="https://www.github.com/iiitk-in/port0"
              link="https://port0.iiitk.in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
