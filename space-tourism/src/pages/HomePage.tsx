import React from "react";
// import SpaceBackgroundHomePhone from "../assets/home/background-home-mobile.jpg";
import SpaceBackgroundHomeTablet from "../assets/home/background-home-tablet.jpg";

function HomePage() {
  return (
    <div
      id="home"
      className="w-dvw h-dvh absolute top-0 flex justify-center items-center flex-col Page"
    >
      <img
        src={SpaceBackgroundHomeTablet}
        alt="Background home"
        className="w-dvw h-dvh absolute z-10 top-0 left-0"
      />

      <section className="z-20 w-[85%] h-max mx-auto text-white text-center flex flex-col items-center justify-center overflow-hidden mb-20 pc:items-start pc:text-left pc:m-0 pc:h-full pc:justify-end pc:mb-10">
        <div className="h-max flex flex-col justify-around pc:w-[45%] pc:gap-3">
          <h3 className="text-balance text-xl uppercase tracking-widest tbl:text-3xl">
            So, you want to travel to
          </h3>
          <h1 className="text-balance text-8xl uppercase font-Bellefair my-3 tbl:text-9xl">
            Space
          </h1>
          <p className="text-pretty text-xl tbl:text-3xl tbl:w-11/12 tbl:mx-auto">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </section>

      <div className="w-full absolute bottom-[8%]">
        <div className="h-full w-full flex justify-center items-end relative pc:justify-end px-[20%] pb-5">
          <div
            id="container-explore"
            className="absolute z-10 bg-white/60 w-36 h-36 rounded-full tbl:w-48 tbl:h-48"
          ></div>
          <button className="relative w-36 h-36 bg-white rounded-full text-black text-2xl z-20 font-Bellefair uppercase tbl:w-48 tbl:h-48 tbl:text-3xl">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
