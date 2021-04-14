import { productQuery } from "./global-variables.js";
let pageContent = null;

// loads the body with a template to be filled with content later
function titleSetter() {
  let query = "";
  if (
    productQuery == null ||
    productQuery == "contact" ||
    productQuery == "about"
  ) {
    // sets the title tag in the head to the current productQuery parameters
    switch (productQuery) {
      case "contact":
        document.getElementById("title-name").innerHTML =
          "AMD Technology | Contact Us";
        query = productQuery;
        break;
      case "about":
        document.getElementById("title-name").innerHTML =
          "AMD Technology | Our Company";
        query = productQuery;
        break;
      default:
        document.getElementById("title-name").innerHTML =
          "AMD Technology | Welcome";
        query = "home";
        break;
    }
  } else {
    // reformats the url search parameters to a single word
    pageContent = productQuery.split("-").join(" ");
    let pageContentCapitalized = pageContent.replace(/^\w/, (c) =>
      c.toUpperCase()
    );
    // sets the title tag in the head to the current productQuerys parameter
    document.getElementById(
      "title-name"
    ).innerHTML = `AMD Technology | ${pageContentCapitalized}`;
    query = productQuery;
  }
  return query;
}

export default titleSetter;
