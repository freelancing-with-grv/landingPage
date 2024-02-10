import React, { useEffect, useRef } from "react";
import { About, Cards, Eye, Footer, Landing, Marquee } from "../components";
import Featured from "../components/home/featured";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: false, // Disable smooth scrolling on mobile
      getDirection: true, // Enable direction detection
      scrollFromAnywhere: true, // Enable scroll from anywhere
    });

    // Clean up when component unmounts
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-900 pt-1">
      <div ref={scrollRef} data-scroll-container>
        <div
          className="landing-wrapper "
          data-scroll-section
          data-scroll
          data-scroll-speed="-0.3"
        >
          <Landing />
        </div>
        <div
          className="marquee-wrapper"
          data-scroll-section
          data-scroll
          data-scroll-speed="-.2"
        >
          <Marquee />
        </div>
        <div
          className="about-wrapper"
          data-scroll-section
          data-scroll
          data-scroll-speed="-.15"
          data-scroll-position="top"
        >
          <About />
        </div>
        <div className="eye-wrapper" data-scroll-section>
          <Eye data-scroll data-scroll-speed="0" />
        </div>
        <div className="featured-wrapper" data-scroll-section>
          <Featured data-scroll data-scroll-speed="0" />
        </div>
        <div className="cards-wrapper" data-scroll-section>
          <Cards data-scroll data-scroll-speed="0" />
        </div>
        <div className="footer-wrapper" data-scroll-section>
          <Footer data-scroll data-scroll-speed="0" />
        </div>
      </div>
    </div>
  );
};

export default Home;
