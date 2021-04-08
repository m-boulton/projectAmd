import { currentPage, currentPagePath, page } from "./global-variables.js";
let pageContent = null;

// loads the body with a template to be filled with content later
function titleSetter() {
  if (page.get("p") == null) {
    // sets the title tag in the head to the current page parameters
    switch (currentPagePath) {
      case "contact":
        document.getElementsByClassName("title-name")[0].innerHTML =
          "AMD Technology | Contact Us";
        break;
      case "about":
        document.getElementsByClassName("title-name")[0].innerHTML =
          "AMD Technology | Our Company";
        break;
      default:
        document.getElementsByClassName("title-name")[0].innerHTML =
          "AMD Technology | Welcome";
        break;
    }
    pageContent = currentPagePath;
  } else {
    // reformats the url search parameters to a single word
    pageContent = page.get("p").split("-").join(" ");
    let pageContentCapitalized = pageContent.replace(/^\w/, function (c) {
      return c.toUpperCase();
    });
    // sets the title tag in the head to the current pages parameter
    document.getElementsByClassName("title-name")[0].innerHTML =
      "AMD Technology | " + pageContentCapitalized;
  }
}

export default titleSetter;
