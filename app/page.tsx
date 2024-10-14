"use client";
import Navbar from "./components/Navbar";
import { useInView } from "framer-motion";
import { useRef } from "react";
function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all  ease-in 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Home = () => {
  return (
    <div className=" overflow-auto bg-gradient-to-b from-neutral-900 to-slate-800">
      <div className="flex">
        <Navbar currentPage="Home" />
      </div>
      <div className="mt-[100px] sm:mt-[180px]">
        <h1 className="leading-tight text-8xl sm:text-[200px] font-bold bg-gradient-to-t from-cyan-400 to-green-600 text-transparent bg-clip-text bg-300% animate-gradient text-center">
          IIITK.in
        </h1>
        <p className="mx-4 font-bold text-white text-center text-3xl">
          IIIT Kottayam&apos;s student run host
        </p>
        <p className="font-bold text-white text-center text-xl mt-3">
          Unlock your potential. Share your creativity.
        </p>
        <div className="flex mx-auto justify-center items-center text-white pb-32">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:gap-18 mt-40 p-3">
            <Section>
              <div className="bg-white rounded-xl p-8 backdrop-filter backdrop-blur-md bg-opacity-40">
                <h2 className="text-2xl font-bold mb-4">
                  Elevate Your Projects
                </h2>
                <p>
                  Gone are the days of generic URLs. Your projects get the
                  spotlight they deserve with a sleek and personalized domain:{" "}
                  <span className="font-bold bg-gradient-to-b from-cyan-400 to-green-600 text-transparent bg-clip-text bg-300%">
                    project-name.iiitk.in
                  </span>
                </p>
              </div>
            </Section>
            <Section>
              <div className="bg-white rounded-xl p-8 backdrop-filter backdrop-blur-md bg-opacity-40">
                <h2 className="text-2xl font-bold mb-4">
                  Powerful Backend Hosting, Simplified
                </h2>
                <p>
                  Focus on what truly matters - building your vision. We handle
                  the backend hosting intricacies, ensuring your projects run
                  seamlessly and securely.
                </p>
              </div>
            </Section>
            <Section>
              <div className="bg-white rounded-xl p-8 mb-6 backdrop-filter backdrop-blur-md bg-opacity-40">
                <h2 className="text-2xl font-bold mb-4">Ready?</h2>
                <p>
                  Shoot an email at{" "}
                  <a href="mailto:admin@iiitk.in" className="text-sky-300">
                    {" "}
                    admin@iiitk.in
                  </a>{" "}
                  to get started.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
