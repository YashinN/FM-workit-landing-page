import Header from "./components/Header/Header";
import Main from "./components/Layout/Main";
import HeroSection from "./components/Hero/HeroSection";
import BackgroundPattern from "./components/Layout/BackgroundPattern";
function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
      </Main>
      <BackgroundPattern />
    </>
  );
}

export default App;
