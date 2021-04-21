import navInitiator from "./loaders/nav-initiator.js";
import contentLoader from "./loaders/content-loader.js";
import specLoader from "./loaders/spec-loader.js";
import titleSetter from "./title-setter.js";
import modelButtons from "./click-handlers.js";
import {
  toggleNavSideBar,
  toggleNavItem,
  navCloser,
} from "./navigation-scripts.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Event handlers for document loading
  const query = await titleSetter();
  contentLoader(query);
  navInitiator("header");
  await navInitiator("sideNav");
  const loc = await specLoader(query);
  specLoader(loc, "item");

  // Event handlers for click events

  document
    .getElementById("modelSelect")
    .addEventListener("click", modelButtons, false);

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
});
