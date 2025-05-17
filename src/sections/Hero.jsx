const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center mb-8">
      <div className="absolute bg-white flex items-center justify-center w-[90%] h-full rounded-lg shadow-lg ring ring-gray-200 text-center">
        <div>
          <h2 className="text-4xl font-roboto">
            I'm{" "}
            <span className="bg-gradient-to-t text-transparent inline-block from-amber-500 to-amber-300 bg-clip-text">
              Niraj Sonule
            </span>
          </h2>
          <h2 className="text-6xl font-bold font-roboto inline-block text-transparent bg-gradient-to-t from-neutral-950 to-gray-400 bg-clip-text">
            FRONTEND DEVELOPER
          </h2>
          <p className="text-md font-bold font-roboto text-zinc-500 mt-4">
            Passionate about building clean, responsive, and user-friendly web
            interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
