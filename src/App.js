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
      <div className="fixed -right-10 top-10 rotate-45 z-20">
        <a
          className="py-1 px-16 border-4 border-dashed font-bold bg-white"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resumé
        </a>
      </div>
    </div>
  );
}

export default App;
