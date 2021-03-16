import {
  toggleNavSideBar,
  toggleNavItem,
  navCloser,
} from "./navigation-scripts.js";

// Event handlers for click events
document.getElementById("toggleNavButton").addEventListener("click", () => {
  toggleNavSideBar();
});
document.getElementById("navHeaderProcessors").addEventListener("click", () => {
  navCloser("navHeaderProcessors");
  toggleNavItem("Header", "Processors", false);
});
document.getElementById("navHeaderGraphics").addEventListener("click", () => {
  navCloser("navHeaderGraphics");
  toggleNavItem("Header", "Graphics", false);
});
document.getElementById("navSideProcessors").addEventListener("click", () => {
  navCloser("navSideProcessors");
  toggleNavItem("Side", "Processors", false);
});
document.getElementById("navSideGraphics").addEventListener("click", () => {
  navCloser("navSideGraphics");
  toggleNavItem("Side", "Graphics", false);
});
