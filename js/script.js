$('#countdown').timeTo({
    timeTo: new Date(new Date('Fri Feb 22 2019 09:00:00 GMT-0800 (Central European Summer Time)')),
    displayDays: 3,
    theme: "black",
    displayCaptions: true,
    fontSize: 30,
    captionSize: 12
});

$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });

  function myFunction(x) {
    x.classList.toggle("change");
}