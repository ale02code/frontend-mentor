export const changeClassToVisibilityNavBar = () => {
  const nav = document.getElementById("nav");
  const checkMenu = nav?.classList.contains("-translate-y-full");
  checkMenu
    ? nav?.classList.replace("-translate-y-full", "translate-y-0")
    : nav?.classList.replace("translate-y-0", "-translate-y-full");
};