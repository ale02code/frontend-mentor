import React, { useEffect, useState } from "react";
import SpaceBackgroundTechnologyPhone from "../assets/technology/background-technology-mobile.jpg";
import { TitleSection } from "../components/TitleSection";
import FirstStep from "../assets/technology/image-launch-vehicle-landscape.jpg";
import SecondStep from "../assets/technology/image-spaceport-landscape.jpg";
import ThirdStep from "../assets/technology/image-space-capsule-landscape.jpg";

const API_ROUTE = "/data.json";

interface Technology {
  name: string;
  description: string;
}

function Technology() {
  const [technology, setTechnology] = useState<Technology | undefined>();
  const [selectedTechnology, setSelectedTechnology] = useState(0);

  useEffect(() => {
    fetch(API_ROUTE)
      .then((res) => res.json())
      .then((data) => {
        const { technology } = data;
        setTechnology(technology[selectedTechnology]);
      });
  }, [selectedTechnology]);

  const ChangeImageTech = () => {
    switch (selectedTechnology) {
      case 0: {
        return FirstStep;
      }
      case 1: {
        return SecondStep;
      }
      case 2: {
        return ThirdStep;
      }
    }
  };

  return (
    <section
      id="technology"
      className="Page hidden h-dvh w-dvw relative top-0 left-0"
    >
      <img
        src={SpaceBackgroundTechnologyPhone}
        alt="Background technology"
        className="w-dvw h-dvh absolute top-0 left-0"
      />

      <article className="absolute bottom-0 left-0 w-full h-[90%] flex justify-center items-center flex-col">
        <TitleSection numberSection={3} titleSection="space launch 101" />

        <figure className="h-[35%] my-3">
          <img
            src={ChangeImageTech()}
            alt="Image"
            className="h-full object-cover"
          />
        </figure>

        <nav className="w-full flex justify-center gap-4">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className={`text-white h-14 w-14 border-white border flex justify-center items-center rounded-full hover:cursor-pointer tbl:h-16 tbl:w-16 ${
                item === selectedTechnology ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => setSelectedTechnology(item)}
            >
              <h3
                className={`text-3xl ${
                  item === selectedTechnology && "text-black"
                }`}
              >
                {item + 1}
              </h3>
            </div>
          ))}
        </nav>

        <section className="w-[90%] mx-auto text-center my-5 text-white">
          <p className="uppercase text-xl tbl:text-2xl">The terminology...</p>
          <h3 className="text-4xl uppercase font-Bellefair my-2">
            {technology?.name || ""}
          </h3>
          <p className="text-xl text-pretty tbl:text-3xl">
            {technology?.description || ""}
          </p>
        </section>
      </article>
    </section>
  );
}

export default Technology;
