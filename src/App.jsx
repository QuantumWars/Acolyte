import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <div className=" bg-surface">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-5">
        <div id="hero-section"><HeroSection /></div>
        <div id="feature-section"><FeatureSection /></div>
        <div id="workflow-section"><Workflow /></div>

      </div>
    </div>
  );
};

export default App;