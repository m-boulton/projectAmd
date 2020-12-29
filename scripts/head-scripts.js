$(function () {
  $("body").load("/pages/body-scripts.html");
  fillContent();
});
setTimeout(fillContent, 1000);
const currentPage = window.location.search;
const currentPagePath = window.location.pathname.split(";")[0].split("/").pop();
const page = new URLSearchParams(currentPage);
var pageContent = null;
if (page.get("prod") == null) {
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
  pageContent = page.get("prod").split("-").join(" ");
  pageContentCapitalized = pageContent.replace(/^\w/, function (c) {
    return c.toUpperCase();
  });
  document.getElementsByClassName("title-name")[0].innerHTML =
    "AMD Technology | " + pageContentCapitalized;
}

function fillContent() {
  $(".content").load("/pages/product-content/" + pageContent + ".html");

  $(function () {
    $(".header").load("/pages/dynamic-page-content/header.html");
  });
  $(function () {
    $(".nav-bar").load("/pages/dynamic-page-content/nav-bar.html");
  });
  $(function () {
    $(".footer").load("/pages/dynamic-page-content/footer.html");
  });
}
