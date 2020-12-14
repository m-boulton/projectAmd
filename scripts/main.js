let toggleNavSideBarsStatus = false;
let toggleNavProcessorsStatus = false;
let toggleNavGraphicsStatus = false;
let navBar = null;
let navProcessors = null;
let navGraphics = null;
let navProcessorsArrow = null;
let navGraphicsArrow = null;
//
const queryElements = () => {
  navBar = document.querySelector(".nav-bar");
  navProcessors = document.querySelector(".nav-list-processors");
  navGraphics = document.querySelector(".nav-list-graphics");
  navProcessorsArrow = document.querySelector("#processors-arrow");
  navGraphicsArrow = document.querySelector("#graphics-arrow");
};
//
const toggleNavSideBar = () => {
  queryElements();
  if (toggleNavSideBarsStatus === false) {
    navBar.style.display = "block";
    toggleNavSideBarsStatus = true;
  } else {
    navBar.style.display = "none";
    toggleNavSideBarsStatus = false;
    graphicsHide();
    processorsHide();
  }
};
//
//
const processorsExpand = () => {
  navProcessors.style.display = "block";
  navProcessorsArrow.style.transform = "rotate(180deg)";
  toggleNavProcessorsStatus = true;
  graphicsHide();
};
const processorsHide = () => {
  navProcessors.style.display = "none";
  navProcessorsArrow.style.transform = "rotate(0deg)";
  toggleNavProcessorsStatus = false;
};
const graphicsExpand = () => {
  navGraphics.style.display = "block";
  navGraphicsArrow.style.transform = "rotate(180deg)";
  toggleNavGraphicsStatus = true;
  processorsHide();
};
const graphicsHide = () => {
  navGraphics.style.display = "none";
  navGraphicsArrow.style.transform = "rotate(0deg)";
  toggleNavGraphicsStatus = false;
};
//
const toggleNavProcessors = () => {
  return toggleNavProcessorsStatus ? processorsHide() : processorsExpand();
};
//
const toggleNavGraphics = () => {
  return toggleNavGraphicsStatus ? graphicsHide() : graphicsExpand();
};
