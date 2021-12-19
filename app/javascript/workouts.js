document.addEventListener("turbolinks:load", () => {
  $("tr[data-link]").click(function () {
    window.location = $(this).data("link")
  });
});
