function removeClass() {
  $('.tab li').removeClass('current');
}
$('.icon').click(function (e) {
  e.stopPropagation();
  removeClass();
  $(e.currentTarget).addClass('current');
  $('.tableList').css('display', 'none');
  if($(this).attr("class").indexOf('moderization') >= 0){
    $('.moderization').css('display', 'block');
  } else if($(this).attr("class").indexOf('mode') >= 0){
    $('.mode').css('display', 'block');
  } else if($(this).attr("class").indexOf('cloud') >= 0){
    $('.cloud').css('display', 'block');
  } else if($(this).attr("class").indexOf('store') >= 0){
    $('.store').css('display', 'block');
  }
});
