import React, { useEffect, useState } from "react";
import SpaceBackgroundCrewPhone from "../assets/crew/background-crew-mobile.jpg";
import { TitleSection } from "../components/TitleSection";
import crewDouglas from "../assets/crew/image-douglas-hurley.webp";
import crewMark from "../assets/crew/image-mark-shuttleworth.webp";
import crewVictor from "../assets/crew/image-victor-glover.webp";
import crewAnsary from "../assets/crew/image-anousheh-ansari.webp";

const API_ROUTE: string = "/data.json";

interface Crew {
  name: string;
  role: string;
  bio: string;
}

function CrewPage() {
  const [crewMembers, setCrewMembers] = useState<Crew[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState(0);

  const employeeSelectedImg = () => {
    switch (selectedEmployee) {
      case 0:
        return crewDouglas;
      case 1:
        return crewMark;
      case 2:
        return crewVictor;
      case 3:
        return crewAnsary;
    }
  };

  useEffect(() => {
    fetch(API_ROUTE)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res}`);
        }
        return res.json();
      })
      .then((data) => {
        const { crew } = data;
        setCrewMembers(crew);
      });
  }, []);

  const selectedCrewMember = crewMembers[selectedEmployee];

  return (
    <section
      id="crew"
      className="Page hidden h-dvh w-dvw absolute top-0 left-0 flex justify-around items-center flex-col"
    >
      <img
        src={SpaceBackgroundCrewPhone}
        alt="Background crew"
        className="w-dvw h-dvh absolute top-0 left-0"
      />

      <article className="h-[85%] w-[85%] mx-auto relative z-20 flex justify-center items-center flex-col text-white">
        <TitleSection numberSection={2} titleSection="meet your crew" />

        <figure className="h-[40%] my-5">
          <img className="h-full" src={employeeSelectedImg()} alt="employee" />
        </figure>

        <div className="mb-5 flex gap-3">
          {[0, 1, 2, 3].map((employeeID) => (
            <div
              key={employeeID}
              className={`h-6 w-6 rounded-full hover:cursor-pointer tbl:h-9 tbl:w-9 ${
                selectedEmployee === employeeID ? "bg-neutral-400" : "bg-white"
              }`}
              onClick={() => setSelectedEmployee(employeeID)}
            ></div>
          ))}
        </div>

        <section className="text-center uppercase">
          <div className="mb-3">
            <h3 className="font-Bellefair text-xl text-neutral-400 tbl:text-2xl">
              {selectedCrewMember?.role || ""}
            </h3>
            <h5 className="font-Bellefair text-3xl tbl:text-4xl">
              {selectedCrewMember?.name || ""}
            </h5>
          </div>
          <p className="text-balance text-lg normal-case tbl:text-3xl">
            {selectedCrewMember?.bio || ""}
          </p>
        </section>
      </article>
    </section>
  );
}

export default CrewPage;
