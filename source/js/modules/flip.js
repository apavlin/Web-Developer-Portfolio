$('#auth__link').on('click', function(event) {
  event.preventDefault();
  $('.flip-container').addClass('flip');
  $('#auth__link').css('transform', 'scale(0.01)');
});

$('#nav__link_welcome').on('click', function(event) {
  event.preventDefault();
  $('.flip-container').removeClass('flip');
  $('#auth__link').css('transform', 'scale(1)');
});
