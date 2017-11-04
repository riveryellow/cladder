function removeClass() {
  $('.tab li').removeClass('current');
}
$('.icon').click(function (e) {
  e.stopPropagation();
  removeClass();
  $(e.currentTarget).addClass('current')
});
