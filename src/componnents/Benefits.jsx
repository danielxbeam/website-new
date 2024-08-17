import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";

import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="about">
      <div className="container relative z-1">
        <Heading
          className="md:max-w-3xl lg:max-w-3xl font-extrabold text-center"
          title="Build Smarter, Not Harder with ADHI FORTUNA DIVINA"
        />

        <div className="flex justify-center flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] flex flex-col items-center text-center"
              key={item.id}
            >
              <img
                src={item.backgroundUrl}
                className="absolute top-0 left-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              />
              <div className="relative z-2 flex flex-col min-h-[10rem] p-[3rem] items-center text-center">
                <h5 className="font-extrabold">{item.title}</h5>
                <p className="font-extrabold text-9xl mb-6 text-n-3">
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  {/* <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  /> */}
                  <p className="ml-auto font code text-xs font-bold text-n-1 uppercase tracking-wider">
                    {/* Explore More */}
                  </p>
                  {/* <Arrow /> */}
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
