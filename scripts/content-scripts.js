const currentPage = window.location.search;
const currentPagePath = window.location.pathname.split(";")[0].split("/").pop();
const page = new URLSearchParams(currentPage);
var pageContent = null;

// loads the body with a template to be filled with content later
function pageGet() {
  if (page.get("prod") == null) {
    // sets the title tag in the head to the current page parameters
    switch (currentPagePath) {
      case "index.html":
        document.getElementsByClassName("title-name")[0].innerHTML =
          "AMD Technology | Welcome";
        break;
      case "contact.html":
        document.getElementsByClassName("title-name")[0].innerHTML =
          "AMD Technology | Contact Us";
        break;
      case "our-company.html":
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
    pageContent = page.get("prod").split("-").join(" ");
    let pageContentCapitalized = pageContent.replace(/^\w/, function (c) {
      return c.toUpperCase();
    });
    // sets the title tag in the head to the current pages parameter
    document.getElementsByClassName("title-name")[0].innerHTML =
      "AMD Technology | " + pageContentCapitalized;
  }
}

// export { pageContent, pageGet };
