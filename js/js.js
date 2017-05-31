$(document).ready(function() {

  $('.activator'||'.dots').on('click', function () {
    $('.card-reveal').css({'top':'0px'});
  })
  $('.close').on('click', function () {
    $('.card-reveal').css({'top':'440px'});
  })
});
