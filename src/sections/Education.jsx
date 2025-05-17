const Education = () => {
  return (
    <section className="w-full flex justify-center mb-8">
      <div className="bg-white flex flex-col items-center justify-start w-[90%] rounded-lg shadow-lg ring ring-gray-200 p-8">
        <h2 className="text-2xl font-roboto font-bold mb-8">Education</h2>
        <div className="grid grid-rows-2 gap-4">
          <div className=" bg-blue-300 rounded-lg p-8 transition-all duration-300 shadow-sm ring ring-blue-50 hover:shadow-lg shadow-blue-300">
            <p>Master's of Computer Application</p>
            <p>St. Wilfred's College of Computer Science's</p>
            <p>Mumbai, India</p>
            <p>2023 - 2025</p>
            <p>Graduated with First Class</p>
          </div>
          <div className=" bg-teal-300 rounded-lg p-8 transition-all duration-300 shadow-sm ring ring-teal-50 hover:shadow-lg shadow-teal-300">
            <p>B.Sc in Computer Science</p>
            <p>D.G Ruparel College of Science</p>
            <p>Mumbai, India</p>
            <p>2020 - 2023</p>
            <p>Graduated with First Class</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
