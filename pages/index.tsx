import React from "react";
import bgCanvas from "../utils/bgCanvas";
// import SmoothSkew from '../utils/smoothSkew';

export default function Home() {
  function skew() {
    const section: HTMLDivElement | null =
      document.querySelector(".home__content");
    let currentPos = window.pageYOffset;
    const update = () => {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.08;
      if (section) {
        section.style.transform = `translate3d(0, -${speed}px, 0) skewY(${speed}deg)`;
      }
      currentPos = newPos;
      requestAnimationFrame(update);
    };
    update();
  }
  React.useEffect(() => {
    bgCanvas();
    // new SmoothSkew(window.innerWidth);
    skew();
  }, []);

  return (
    <div className="home">
      <div className="bar" />
      <canvas id="hero-bg-canvas" />
      <section className="hero">
        <div className="hero-content">
          <div className="left">
            <div className="title">_nurhaq</div>
          </div>
          <div className="right">
            <p className="sundara">ᮈᮁᮝᮤᮔ᮪ ᮔᮥᮁᮠᮋ᮪</p>
            <p className="subtitle">
              A <mark>Lorem ipsum</mark> dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </section>
      <div className="content">
        <section className="introduction">2</section>
        <section>3</section>
        <section>4</section>
      </div>
    </div>
  );
}
