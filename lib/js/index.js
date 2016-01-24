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