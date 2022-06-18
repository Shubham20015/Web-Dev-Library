import AboutComp from "./components/AboutComp";
import HeroSection from "./components/HeroSection";
import MainProject from "./components/MainProject";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <div className="main-content">
        <MainProject />
        <ProjectDetail />
        <AboutComp />
      </div>
    </div>
  );
}

export default App;
