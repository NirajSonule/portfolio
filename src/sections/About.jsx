const About = () => {
  return (
    <section className="w-full flex justify-center mb-8">
      <div className="bg-white flex flex-col items-center justify-start w-[90%] rounded-lg shadow-lg ring ring-gray-200 p-8">
        <h2 className="text-2xl font-roboto font-bold mb-6">ABOUT</h2>

        {/* Make this div grow and take remaining space */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-rose-300 rounded-lg p-8 transition-all duration-300 shadow-md ring ring-rose-50 hover:shadow-lg shadow-rose-300">
            <h2 className="text-xl font-roboto font-semibold">
              Personal Detail's
            </h2>
            <p className="text-md font-roboto text-gray-800">
              Hi, I'm Niraj Sonule, a passionate Frontend Developer from
              Badlapur. I hold a BSc in Computer Science and a Master of
              Computer Applications (MCA). Although I’m at the beginning of my
              professional journey, my academic background and internship
              experience have given me a solid understanding of web development
              fundamentals.{<br />} I’m eager to learn and collaborate, and I’m
              looking forward to the opportunity to bring my enthusiasm and
              technical skills to new projects.{<br />} Feel free to explore my
              work, and don't hesitate to reach out for collaborations or
              opportunities!
            </p>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className=" bg-purple-300 rounded-lg p-8 transition-all duration-300 shadow-md ring ring-purple-50 hover:shadow-lg shadow-purple-300">
              <h2 className="text-xl font-roboto font-semibold">Interest</h2>
              <ul className="list-disc pl-5">
                <li>
                  <p className="text-md font-roboto text-gray-800">Dancing</p>
                </li>
                <li>
                  <p className="text-md font-roboto text-gray-800">Drawing</p>
                </li>
                <li>
                  <p className="text-md font-roboto text-gray-800">
                    Playing Video Games
                  </p>
                </li>
              </ul>
            </div>
            <div className=" bg-fuchsia-300 rounded-lg p-8 transition-all duration-300 shadow-md ring ring-fuchsia-50 hover:shadow-lg shadow-fuchsia-300">
              <h2 className="text-xl font-roboto font-semibold">Hobbies</h2>
              <ul className="list-disc pl-5">
                <li>
                  <p className="text-md font-roboto text-gray-800">Dancing</p>
                </li>
                <li>
                  <p className="text-md font-roboto text-gray-800">Drawing</p>
                </li>
                <li>
                  <p className="text-md font-roboto text-gray-800">
                    Playing Video Games
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
