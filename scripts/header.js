window.onload = function () {
  $.get("../pages/dynamic-page-content/header.html", function (data) {
    $("#header").html(data);
  });
};
