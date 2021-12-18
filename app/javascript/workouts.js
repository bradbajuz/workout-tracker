document.addEventListener("turbo:load", () => {
  $("tr[data-link]").click(function () {
    window.location = $(this).data("link")
  });
});
