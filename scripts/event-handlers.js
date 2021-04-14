import navInitiator from "./loaders/nav-initiator.js";
import contentLoader from "./loaders/content-loader.js";
import specLoader from "./loaders/spec-loader.js";
import titleSetter from "./title-setter.js";
import {
  toggleNavSideBar,
  toggleNavItem,
  navCloser,
} from "./navigation-scripts.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  // Event handlers for document loading
  const product = await titleSetter();
  contentLoader(product);
  navInitiator("header");
  await navInitiator("sideNav");
  // specLoader();
  console.log("assets finished loading");
});
document.addEventListener("load", (e) => {
  // Event handlers for click events
  // Closes all nav panes and then opens the targeted element
  document
    .getElementById("navHeaderProcessors")
    .addEventListener("click", () => {
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
  console.log("event listeners loaded");
});
