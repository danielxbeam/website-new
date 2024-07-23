import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./componnents/Button";
import Header from "./componnents/Header";
import Hero from "./componnents/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
