$(document).ready(function () {
  $(".menu-icon").click(function (e) {
    $(this).toggleClass("active");
    e.preventDefault();
  });
});
