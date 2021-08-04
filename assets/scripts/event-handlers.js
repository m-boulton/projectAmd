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
import contactForm from "./contactForm/contactMain.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Sets the title tag and returns a query for the current product
  const query = await titleSetter();

  // Loads the current products content in the body
  contentLoader(query);

  // Loads the navigation HTML for both the header and sidebar
  navInitiator("header");
  await navInitiator("sideNav");

  // Loads the buttons for selecting product models and loads the first
  const modelButton = await specLoader(query);
  specLoader(modelButton, "item");

  // -----------------------------------------------------------------
  // Event handlers for click events
  if (modelButton) {
    document
      .getElementById("modelSelect")
      .addEventListener("click", modelButtons, false);
  }
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

  // Click handler for contact form
  if (document.getElementById("contactForm")) {
    // adds click event for the buttons in the contact form
    document
      .getElementById("contactForm")
      .addEventListener("click", contactForm, false);
  }
});
