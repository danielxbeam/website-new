import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./componnents/Benefits";

import Collaboration from "./componnents/Collaboration";
import Header from "./componnents/Header";
import Hero from "./componnents/Hero";

import Pricing from "./componnents/Pricing";

import Services from "./componnents/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <ButtonGradient />
        <Services />
        <Pricing />
      </div>
    </>
  );
};

export default App;
