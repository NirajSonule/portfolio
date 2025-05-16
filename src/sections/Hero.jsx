const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center mt-48 mb-72">
      <div className="flex flex-col items-center">
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
    </section>
  );
};

export default Hero;
