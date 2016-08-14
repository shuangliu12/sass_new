$(document).ready(function(){
  $('.menuTitle > h3').click(function() {
    var subMenu = $(this).next();
    if (subMenu[0].style.display === 'none') {
      subMenu.slideDown();
    } else {
      subMenu.slideUp();
    }
  });
});
