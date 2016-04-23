document.addEventListener('DOMContentLoaded', function(){ 
    // var sideMenus = document.querySelectorAll('.sideMenu');
    // if(sideMenus.length > 0)
    // {
    //   var sideMenu = sideMenus[0];
    //   console.log(sideMenu.style.height)
    //   console.log(document.getElementById('.sideMenu').clientHeight)
    // }
    // console.log(document.getElementById('sideMenu').clientHeight)
}, false);



var openSubmenu = false;
function clickPortfolio()
{
	openSubmenu = !openSubmenu;
	var subMenus = document.querySelectorAll('.subMenu');
  for (var index = 0; index < subMenus.length; index++)
  {
  	if(openSubmenu)
  	{
    	subMenus[index].style.display = "block";
  	}
  	else
  	{
  		subMenus[index].style.display = "none";
  	}
	}
}