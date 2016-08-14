$(document).ready(function(){
  $('.menuTitle > h3').click(function() {
    var subMenu = $(this).next();
    if (subMenu[0].style.display === 'none') {
      subMenu.slideDown();
    } else {
      subMenu.slideUp();
    }
  });

  function resizeMenu() {
    var h = $(window).height();
    var sideMenu = $('#sideMenu');
    sideMenu[0].style.height = h + 'px';
    if ($(window).width() < 768) {
      sideMenu[0].style.height = '';
      sideMenu.removeClass('sideMenuHeight');
    }
  }
  resizeMenu();

  $(window).resize(function() {
    resizeMenu();
  });
});
