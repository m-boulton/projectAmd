// these are the variables for the header
let toggleNavHeaderProcessorsStatus = false;
let toggleNavHeaderGraphicsStatus = false;
let navHeaderProcessors = null;
let navHeaderGraphics = null;
let navHeaderProcessorsArrow = null;
let navHeaderGraphicsArrow = null;
// these are the variable for the aside navigation
let toggleNavSideBarsStatus = false;
let toggleNavProcessorsStatus = false;
let toggleNavGraphicsStatus = false;
let navBar = null;
let navProcessors = null;
let navGraphics = null;
let navProcessorsArrow = null;
let navGraphicsArrow = null;
//
// this is to get elements from the DOM
const queryElements = () => {
  // this gets the header nav elements
  navHeaderProcessors = document.querySelector(".header-nav-list-processors");
  navHeaderGraphics = document.querySelector(".header-nav-list-graphics");
  navHeaderProcessorsArrow = document.querySelector("#header-processors-arrow");
  navHeaderGraphicsArrow = document.querySelector("#header-graphics-arrow");

  // this gets the sidebar nav elements
  navBar = document.querySelector(".nav-bar");
  navProcessors = document.querySelector(".nav-list-processors");
  navGraphics = document.querySelector(".nav-list-graphics");
  navProcessorsArrow = document.querySelector("#processors-arrow");
  navGraphicsArrow = document.querySelector("#graphics-arrow");
};
//
// this is the navigation button function that opens the side bar navigation
const toggleNavSideBar = () => {
  queryElements();
  if (toggleNavSideBarsStatus === false) {
    navBar.style.display = "block";
    toggleNavSideBarsStatus = true;
    console.log("Sidebar expanded");
  } else {
    navBar.style.display = "none";
    toggleNavSideBarsStatus = false;
    graphicsHide();
    processorsHide();
    console.log("Sidebar minimizing");
  }
};
//
// these are the expanding and hiding functions for the side navigation element
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
// these are the onclick funtions for the processor and graphics elements in the side navigation
const toggleNavProcessors = () => {
  return toggleNavProcessorsStatus ? processorsHide() : processorsExpand();
};
const toggleNavGraphics = () => {
  return toggleNavGraphicsStatus ? graphicsHide() : graphicsExpand();
};
//
// these are the expanding and hiding functions for the header navigation element
const headerProcessorsExpand = () => {
  navHeaderProcessors.style.display = "block";
  navHeaderProcessorsArrow.style.transform = "rotate(180deg)";
  toggleNavHeaderProcessorsStatus = true;
  headerGraphicsHide();
};
const headerProcessorsHide = () => {
  navHeaderProcessors.style.display = "none";
  navHeaderProcessorsArrow.style.transform = "rotate(0deg)";
  toggleNavHeaderProcessorsStatus = false;
};
const headerGraphicsExpand = () => {
  navHeaderGraphics.style.display = "block";
  navHeaderGraphicsArrow.style.transform = "rotate(180deg)";
  toggleNavHeaderGraphicsStatus = true;
  headerProcessorsHide();
};
const headerGraphicsHide = () => {
  navHeaderGraphics.style.display = "none";
  navHeaderGraphicsArrow.style.transform = "rotate(0deg)";
  toggleNavHeaderGraphicsStatus = false;
};
//
// these are the onclick funtions for the processor and graphics elements in the header navigation
const toggleNavHeaderProcessors = () => {
  queryElements();
  return toggleNavHeaderProcessorsStatus
    ? headerProcessorsHide()
    : headerProcessorsExpand();
};
const toggleNavHeaderGraphics = () => {
  queryElements();
  return toggleNavHeaderGraphicsStatus
    ? headerGraphicsHide()
    : headerGraphicsExpand();
};
//
//
//
// const navExpand = (link) => {
//     nav[link].style.display = 'block';
//     nav[link]Arrow.style.transform = 'rotate(180deg)';
//     toggleNav[link]Status = true;
// };
// const navHide = (link) => {
//     nav[link].style.display = 'none';
//     nav[link]Arrow.style.transform = 'rotate(0deg)';
//     toggleNav[link]Status = false;
// };
// const toggleNavProcessors = () => {
//     return toggleNavProcessorsStatus ? navExpand('Processors') : navHide('Processors');
// };
// const toggleNavGraphics = () => {
//     return toggleNavGraphicsStatus ? navExpand('Graphics') : navHide('Graphics');
// };
document.onload = queryElements();
