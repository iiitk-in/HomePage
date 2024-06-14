import Navbar from "./components/Navbar";

export default function Custom404() {
  return (
    <div className="overflow-auto h-screen bg-gradient-to-b from-neutral-900 to-slate-800">
      <Navbar />
      <div className="flex-auto justify-center items-center content-center flex-col w-rest mt-44">
        <h1 className="flex justify-center items-center mt-auto my-auto text-6xl  font-extrabold bg-gradient-to-r from-cyan-400 to-green-600 text-transparent bg-clip-text">
          404.
        </h1>
        <h3 className="text-3xl font-semibold text-white text-center mt-4">
          {" "}
          Are you sure you&apos;re in the right place?
        </h3>
      </div>
    </div>
  );
}
