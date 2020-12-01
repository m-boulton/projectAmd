var script = document.createElement("script");

script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";
document.getElementsByTagName("nav-bar")[0].appendChild(script);

window.onload = function () {
  $.get("../pages/dynamic-page-content/nav-bar.html", function (data) {
    $("#nav-bar").html(data);
  });
};
