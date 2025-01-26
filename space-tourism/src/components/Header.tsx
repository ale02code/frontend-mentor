import React, { useEffect, useContext } from "react";
import logoMainHeader from "../assets/shared/logo.svg";
import { NavigationContext } from "../context/NavigationContext";

function Header() {
  const { currentPage, setCurrentPage } = useContext(NavigationContext);

  const AllPages = document.querySelectorAll(".Page");

  useEffect(() => {
    const changePageVisible = (currentPage: string) => {
      AllPages.forEach((page) => {
        if (page.id === currentPage) {
          page.classList.remove("hidden");
        } else {
          page.classList.add("hidden");
        }
      });
    };

    const nav = document.getElementById("nav");
    nav?.classList.replace("translate-y-0", "-translate-y-full");

    changePageVisible(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const openMenu = document.getElementById("open-menu");

    openMenu?.addEventListener("click", () => {
      openMenu.style.animation = "rotate .5s forwards";
    });

    openMenu?.addEventListener("animationend", () => {
      openMenu.style.animation = "none";
    });
  }, []);

  const changeClassToVisibilityNavBar = () => {
    const nav = document.getElementById("nav");
    const checkMenu = nav?.classList.contains("-translate-y-full");
    checkMenu
      ? nav?.classList.replace("-translate-y-full", "translate-y-0")
      : nav?.classList.replace("translate-y-0", "-translate-y-full");
  };

  const handleMenu = () => {
    setTimeout(() => {
      changeClassToVisibilityNavBar();
    }, 500);
  };

  const underLine: string = `after:content-[''] after:block after:h-1 after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full`;

  return (
    <header className="w-screen m-auto h-24 flex items-center justify-between px-[10%] z-50 absolute top-0 tbl:h-32">
      <img src={logoMainHeader} id="logo" alt="icon-main" className="h-4/6" />
      <i
        id="open-menu"
        className="fa-solid fa-caret-down text-5xl text-white hover:cursor-pointer hover:text-gray-300 tbl:hidden pc:hidden"
        onClick={handleMenu}
      ></i>
      <nav
        id="nav"
        className="h-dvh w-dvw bg-black absolute right-0 top-0 -translate-y-full transition-transform duration-500 ease-in-out tbl:translate-y-0 tbl:h-28 tbl:w-max tbl:bg-white/10 tbl:backdrop-blur-xl tbl:px-8 pc:translate-y-0 pc:h-20 pc:w-max pc:px-8 pc:bg-white/10"
      >
        <ul className="text-white h-full mx-auto flex flex-col justify-center items-center text-3xl gap-4 tbl:flex-row tbl:gap-6 pc:flex-row">
          <i
            className="fa-solid fa-xmark absolute right-[10%] top-8 text-5xl hover:cursor-pointer hover:text-gray-300 tbl:hidden pc:hidden"
            onClick={handleMenu}
          ></i>

          <li
            className={`hover:cursor-pointer hover:text-gray-200 pc:text-gray-300 ${underLine}`}
            onClick={() => {
              setCurrentPage("home");
            }}
          >
            <strong className="tbl:hidden">00</strong> Home
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-200 pc:text-gray-300 ${underLine}`}
            onClick={() => {
              setCurrentPage("destination");
            }}
          >
            <strong className="tbl:hidden">01</strong> Destination
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-200 pc:text-gray-300 ${underLine}`}
            onClick={() => {
              setCurrentPage("crew");
            }}
          >
            <strong className="tbl:hidden">02</strong> Crew
          </li>
          <li
            className={`hover:cursor-pointer hover:text-gray-200 pc:text-gray-300 ${underLine}`}
            onClick={() => {
              setCurrentPage("technology");
            }}
          >
            <strong className="tbl:hidden ">03</strong> Technology
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
