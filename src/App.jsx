import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./componnents/Benefits";

import Collaboration from "./componnents/Collaboration";
import Header from "./componnents/Header";
import Hero from "./componnents/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
