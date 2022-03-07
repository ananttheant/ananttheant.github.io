import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import WorkExperienceSection from "./components/work-experience-section/WorkExperienceSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-gray-700">
      <Hero />
      <About />
      <Skills />
      <WorkExperienceSection />
      <Footer />
    </div>
  );
}

export default App;
