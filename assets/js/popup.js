$(document).ready(function () {
  //開啟 popup
  $(".popup-trigger").on("click", function (event) {
    event.preventDefault();
    $(".popup-overlay").addClass("is-visible");
  });

  //關閉 popup
  $(".popup-overlay").on("click", function (event) {
    if (
      $(event.target).is(".popup-close") ||
      $(event.target).is(".popup-overlay")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
});