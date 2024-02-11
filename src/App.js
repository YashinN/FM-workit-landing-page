import Header from "./components/Header/Header";
import Main from "./components/Layout/Main";
import HeroSection from "./components/Hero/HeroSection";
import BackgroundPattern from "./components/Layout/BackgroundPatternHero";
import Solutions from "./components/Solutions/Solutions";
function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <Solutions />
      </Main>
      <BackgroundPattern />
    </>
  );
}

export default App;
