window.onload = function () {
  $.get("../pages/dynamic-page-content/footer.html", function (data) {
    $("#footer").html(data);
  });
};
