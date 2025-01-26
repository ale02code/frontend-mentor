import React, { useEffect, useState } from "react";
import SpaceBackgroundDestinationPhone from "../assets/destination/background-destination-mobile.jpg";
import { TitleSection } from "../components/TitleSection";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

function DestinationPage() {
  interface Destination {
    name: string;
    description: string;
    travel: string;
    distance: string;
  }

  const [useDataPlanet, setUseDataPlanet] = useState<Destination>();
  const [planet, setPlanet] = useState({
    name: moon,
    currentPlanet: 0,
  });

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res}`);
        }
        return res.json();
      })
      .then((data) => {
        const { destinations } = data;
        setUseDataPlanet(destinations[planet.currentPlanet]);
      });
  }, [planet]);

  return (
    <section
      id="destination"
      className="Page hidden h-dvh w-dvw absolute top-0 left-0 overflow-hidden"
    >
      <img
        src={SpaceBackgroundDestinationPhone}
        alt="background destination"
        className="w-dvw h-dvh absolute top-0 left-0"
      />

      <main className="w-full h-[87%] mx-auto text-white text-center absolute bottom-0 left-0 z-20">
        <div className="w-[85%] mx-auto h-dvh flex justify-evenly items-center flex-col overflow-hidden  pc:relative pc:flex-row">
          <div className="w-max pc:absolute pc:top-0 pc:left-0 mt-10">
            <TitleSection
              numberSection={1}
              titleSection="Pick your destination"
            />
          </div>

          {useDataPlanet ? (
            <div className="flex justify-center items-center h-[35%] w-full pc:justify-center pc:w-1/2">
              <img
                src={planet.name}
                alt={`${useDataPlanet?.name} image`}
                title={useDataPlanet?.name}
                className="h-full pc:h-max pc:max-h-96"
              />
            </div>
          ) : (
            <p className="tbl:text-3xl">Loading...</p>
          )}

          <div className="pc:w-[40%] pc:h-full pc:flex pc:items-center pc:flex-col pc:justify-center pc:gap-5">
            <nav className="w-full">
              <ul className="flex justify-around items-center pc:justify-between">
                <li
                  onClick={() => {
                    setPlanet({
                      name: moon,
                      currentPlanet: 0,
                    });
                  }}
                  className="tracking-wider uppercase text-2xl tbl:text-4xl pc:text-3xl pc:hover:cursor-pointer"
                >
                  Moon
                </li>
                <li
                  onClick={() => {
                    setPlanet({
                      name: mars,
                      currentPlanet: 1,
                    });
                  }}
                  className="tracking-wider uppercase text-2xl tbl:text-4xl pc:text-3xl pc:hover:cursor-pointer"
                >
                  Mars
                </li>
                <li
                  onClick={() => {
                    setPlanet({
                      name: europa,
                      currentPlanet: 2,
                    });
                  }}
                  className="tracking-wider uppercase text-2xl tbl:text-4xl pc:text-3xl pc:hover:cursor-pointer"
                >
                  Europa
                </li>
                <li
                  onClick={() => {
                    setPlanet({
                      name: titan,
                      currentPlanet: 3,
                    });
                  }}
                  className="tracking-wider uppercase text-2xl tbl:text-4xl pc:text-3xl pc:hover:cursor-pointer"
                >
                  Titan
                </li>
              </ul>
            </nav>

            <article className="flex justify-around items-center flex-col pc:text-left">
              <section>
                <strong className="text-5xl uppercase tracking-wide font-Bellefair pc:text-6xl">
                  {useDataPlanet?.name}
                </strong>
                <p className="text-pretty text-xl tbl:text-3xl pc:text-xl">
                  {useDataPlanet?.description}
                </p>
              </section>

              <hr className="w-full my-3 text-gray-600" />

              <section className="pc:flex pc:justify-between pc:w-full">
                <strong className="text-3xl uppercase font-Bellefair tbl:text-4xl">
                  {useDataPlanet?.travel}
                </strong>
                <br />
                <strong className="text-3xl uppercase font-Bellefair tbl:text-4xl">
                  {useDataPlanet?.distance}
                </strong>
              </section>
            </article>
          </div>
        </div>
      </main>
    </section>
  );
}

export default DestinationPage;
