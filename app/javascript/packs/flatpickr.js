document.addEventListener("turbolinks:load", () => {
  flatpickr('.datepicker', {
    static: true,
    dateFormat: 'Y-m-d',
  });
});
