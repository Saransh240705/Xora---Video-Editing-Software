import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

//react-scroll is used for the change in navbar when we move from one section of page to another.

const Header = () => {
  // Here we used hasScrolled to make the change while scrolling as initially  it is set on false
  // But we scroll it will change the property of NavBar
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //We use useEffect for making change make the side effects after the page is rendered it's like
  // saying "Hey React, do something for me when certain things happen."

  // Like here we used it for when we scroll the page for more than 32 pixels start showing effect
  //  and change the initital value of hasScrolled to tue and show the effect according to it Every
  //  time the user scrolls, handleScroll is called, which updates the hasScrolled state. And when the work the is done it removes the listener.
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  //useState is like a memory container it remembers the initial value (in this case false) and
  //  then when clicked on the second parameter (in this case setIsOpen)
  //  it changes the initial value and performs the fucntion, Here it is
  //  containing that this functional is currently false means it won't do anything right now
  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
      )}
    >
      {/* If the user has scrolled over 32pixels it wil start showing other half of className */}
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>
        {/* clsx is used for conditional className, we conditioned it that 
            when isOpen is true it showed show HamBurger page and vice versa */}
            <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
             <ul className="flex max-lg:block max-lg:px-12">
               <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        {/* Here this button uses useState second parameter to change the
              initial value to the performed function, Here in this case the 
              initial value was to hide the hambugere's page (thats why it was
               set to false) setIsOpen changes the function to when we click on
                button/image it shows the page */}
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {/* Here we conditioned that when isOpen is false it will show magic.svg
             and when it is true it will show close.svg as we have set it false by 
             default thats's why it will show magic at start */}
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
