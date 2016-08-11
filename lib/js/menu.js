$(document).ready(function(){
  $('.menuTitle').click(function() {
    subMenu = $(this).find('.contents_list')
    if (subMenu[0].style.display == 'none') {
      subMenu.slideDown();
    } else {
      subMenu.slideUp();
    };
  })
});
