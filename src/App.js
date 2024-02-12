import Header from "./components/Header/Header";
import Main from "./components/Layout/Main";
import HeroSection from "./components/Hero/HeroSection";
import BackgroundPattern from "./components/Layout/BackgroundPattern";
import Solutions from "./components/Solutions/Solutions";
import Message from "./components/Message/Message";
function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <Solutions />
        <Message />
      </Main>
      <BackgroundPattern />
    </>
  );
}

export default App;
