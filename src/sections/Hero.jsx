import React from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

// This section is below the NavBar
const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 ">
      {/* In React Scroll, the Element component is used to define a 
    target section in your page that can be scrolled to using a Link
     component. It helps to create sections that other components can
      scroll to, making navigation smooth and precise. */}
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              We designed XORA AI video Video Editor to be an easy to use, quick
              to learn, and surprisingly powerful.
            </p>
            {/* Use the LinkScroll component from react-scroll to create a clickable
     link that scrolls to the target section. The to prop should match the 
     name you gave to your <Element>. */}
            <LinkScroll to="Features" offset={-100} spy smooth>
              {/* Here Button as different component with its own work */}
              <Button icon="/images/zap.svg">Try It Now</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
