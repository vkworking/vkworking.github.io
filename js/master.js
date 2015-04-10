window.onload = function(){
// перемикач для головного меню - тогл класу activeHeadMenu
function headMenuShow(){
             
                var menuButton = document.getElementsByClassName("toggle-menu")[0];
                var menuContainer = document.getElementsByClassName("headMenuContainer")[0];
                var searchInput = document.getElementsByClassName("search")[0];
                Event.add(menuButton,'click',function(){
                    menuContainer.classList.toggle("activeHeadMenu");
                    searchInput.classList.toggle("hideMenu");
                });
            }
   headMenuShow();           
// перемикач головного меню 2-го рівня - тогл класу showItems
function showSubMenu(){
                var mainMenuItem = document.getElementsByClassName("headMenuItem");
                for(var i=0;i < mainMenuItem.length; i++){       
                    Event.add(mainMenuItem[i],'click',function(){
                    var secondMenuItem = this.getElementsByClassName("subMenuOne")[0];
                    var arrowDown = this.getElementsByClassName("toggleMenu")[0];
					secondMenuItem.classList.toggle("showItems");
					arrowDown.classList.toggle("toggleActive");         
                	});
            	};
          	} 
showSubMenu();
// перемикач нижнього меню - тогл класу activeHeadMenu
function showFooterSubMenu(){
                var footerMenuItem = document.getElementsByClassName("firstMenuItem");
                
                for(var i=0;i < footerMenuItem.length; i++){
                    
                    Event.add(footerMenuItem[i],'click',function(){
                    var subFooterMenu = this.getElementsByClassName("secondItemList")[0];
                    var arrowDown = this.getElementsByClassName("toggleMenu")[0];
					subFooterMenu.classList.toggle("activeHeadMenu");
					arrowDown.classList.toggle("toggleActive");
                    });
                };
            }
showFooterSubMenu();
}
        


