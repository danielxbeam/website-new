import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Shotcretekm436 from "../assets/Shotcretekm436.jpg";
import Generating from "../componnents/design/Generating";
import Notification from "./design/Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt:[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg;translate-y-y[5.25]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[65rem]
        mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]"
        >
          <span className="inline-block mt-6 text-5xl relative">
            ADHI FORTUNA DIVINA
            <img
              src={curve}
              className="absolute top-full left-0
                w-full xl:mt-5"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
          <h1 className="h1 mt-1 mb-6">{``}</h1>

          <p className="body-1 mt-16 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            {" "}
            Mitra konstruksi andal untuk proyek sukses Anda! Dengan layanan
            lengkap, kualitas unggul, dan komitmen pada inovasi, keamanan, serta
            efisiensi. Bersama kami, bangun masa depan bisnis konstruksi Anda!
          </p>
          <Button href="/pricing" white>
            Contact Uss
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div
                className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden 
           md:aspect-[688/490] lg:aspect-[1024/490]"
              >
                <img
                  src={Shotcretekm436}
                  className="w-full scale-[1]
                  translate-y-[1%] md:scale-[1] md:-translate-y-[30%] lg:-translate-y-[30%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left- [5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border bg-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:-w-[138%] lg:top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos
          className="hidden relative z-1 mt-20
        lg:block"
        />
      </div>
    </Section>
  );
};

export default Hero;
