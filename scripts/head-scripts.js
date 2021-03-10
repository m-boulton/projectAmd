const currentPage = window.location.search;
const currentPagePath = window.location.pathname.split(";")[0].split("/").pop();
const page = new URLSearchParams(currentPage);
const apiUrl = "localhost:3000";
var pageContent = null;
// loads the body with a template to be filled with content later
$(function () {
  $("body").load("/pages/body-template.html");
  fillContent();
});
if (page.get("prod") == null) {
  // sets the title tag in the head to the current page parameters
  if (currentPagePath == "index.html") {
    document.getElementsByClassName("title-name")[0].innerHTML =
      "AMD Technology | Welcome";
    pageContent = currentPagePath;
  } else if (currentPagePath == "contact.html") {
    document.getElementsByClassName("title-name")[0].innerHTML =
      "AMD Technology | Contact Us";
    pageContent = currentPagePath;
  } else if (currentPagePath == "our-company.html") {
    document.getElementsByClassName("title-name")[0].innerHTML =
      "AMD Technology | Our Company";
    pageContent = currentPagePath;
  }
} else {
  // reformats the url search parameters to a single word
  pageContent = page.get("prod").split("-").join(" ");
  pageContentCapitalized = pageContent.replace(/^\w/, function (c) {
    return c.toUpperCase();
  });
  // sets the title tag in the head to the current pages parameter
  document.getElementsByClassName("title-name")[0].innerHTML =
    "AMD Technology | " + pageContentCapitalized;
}
// this fills out the html template
setTimeout(fillContent, 500);
function fillContent() {
  $(".header").load("/pages/dynamic-page-content/header.html");
  $(".nav-bar").load("/pages/dynamic-page-content/nav-bar.html");
  $(".footer").load("/pages/dynamic-page-content/footer.html");
  $(".content").load("/pages/product-content/" + pageContent + ".html");
}
// api call to get the content page format
const apiFetchPageTemplate = async () => {
  let response = await fetch(apiUrl);
  if (response.ok) {
    let json = await response.json();
  } else {
    alert("HTTP-Error: " + response.status);
  }
};

// api call to fill the content template with current data
