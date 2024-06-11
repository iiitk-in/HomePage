import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-slate-800">
      <div className="flex">
        <Navbar currentPage="Home" />
      </div>
      <div className="mt-[180px]">
        <h1 className="leading-tight text-9xl sm:text-[200px] font-bold bg-gradient-to-t from-cyan-400 to-green-600 text-transparent bg-clip-text bg-300% animate-gradient text-center">
          IIITK.in
        </h1>
        <p className="mx-4 font-bold text-white text-center text-4xl">
          IIIT Kottayam&apos;s student run host
        </p>
        <p className="font-bold text-white text-center text-xl mt-3">
          Unlock your potential. Share your creativity.
        </p>
        <div className="flex mx-auto justify-center items-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 md:gap-18 mt-20 p-3">
            <div className="bg-white rounded-xl p-8 backdrop-filter backdrop-blur-md bg-opacity-40">
              <h2 className="text-2xl font-bold mb-4">Elevate Your Projects</h2>
              <p>
                Gone are the days of generic URLs. Your projects get the
                spotlight they deserve with a sleek and personalized domain:{" "}
                <span className="font-bold bg-gradient-to-b from-cyan-400 to-green-600 text-transparent bg-clip-text bg-300%">
                  project-name.iiitk.in
                </span>
              </p>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
