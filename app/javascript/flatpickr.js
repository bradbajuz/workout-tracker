document.addEventListener("turbolinks:load", () => {
  flatpickr('.datepicker', {
    static: true,
    dateFormat: 'Y-m-d',
  });
  flatpickr('.stopwatchpicker', {
    enableTime: true,
    time_24hr: true,
    enableSeconds: true,
    noCalendar: true,
    dateFormat: 'H:i:S',
    defaultDate: '00:00:00',
  });
});
