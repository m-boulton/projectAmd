import {
  toggleNavSideBar,
  toggleNavItem,
  navCloser,
} from "./navigation-scripts.js";

// Event handlers for click events
// Closes all nav panes and then opens the targeted element
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
// Toggles the navigation pane for the mobile version
document.getElementById("toggleNavButton").addEventListener("click", () => {
  toggleNavSideBar();
});

import {
  documentLoader,
  navLoader,
  contentLoader,
  specLoader,
} from "./content-loader.js";

// // Event handlers for document loading
// document.addEventListener("DOMContentLoaded", () => {
//   documentLoader();
//   navLoader();
//   contentLoader();
//   specLoader();
// });
