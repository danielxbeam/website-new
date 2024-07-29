import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { ReactSVG } from "react-svg";

const Benefits = () => {
  return (
    <Section id="about">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Build Smarter, Not Harder with AFD"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
            >
              <ReactSVG
                src={item.backgroundUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              />
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5>{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
