import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import Skill from "./sections/Skill";

function App() {
  return (
    <div className="bg-slate-50 pb-8">
      <Header />
      <Hero />
      <About />
      <Skill />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
