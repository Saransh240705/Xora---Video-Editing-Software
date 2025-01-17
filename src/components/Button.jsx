import clsx from "clsx";
import React from "react";
import { Marker } from "./Marker";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  // Inner is used for the text img and svg in button

  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          {/* Marker is a different component used here for the svg in 
                the left inside the button according to the section of the 
                part of the website */}
          <Marker markerFill={markerFill} />
        </span>
        {/* Here we used conditional rendering that if icon variable
                 have some value or not and then it will run according to it  */}
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        {/* Here children is a variable which holds the text according
                 to the page */}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );
  // Here we used ternanry operator for thw working of button i.e. if we use href
  //  it will make the button an anchor tag and if we don't use it will be a button
  //  with an onClick function
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group ",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
