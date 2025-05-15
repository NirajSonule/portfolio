import Header from "./components/Header";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="bg-[#0D0917] text-white relative min-h-screen overflow-hidden">
      {/* White blurry half-circle at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-[1440px] h-[1024px] pointer-events-none overflow-hidden">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.25), transparent 70%)",
            filter: "blur(120px)",
            transform: "translateY(-50%)",
          }}
        />
      </div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
