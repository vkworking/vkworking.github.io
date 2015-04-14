window.onload = function () {
// перемикач для головного меню - тогл класу activeHeadMenu
	'use strict';
// видалити після завершення роботи	
	// alert('Документ завантажився, можна тестувати анімацію');
	
	function headMenuShow() {
             
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
	function showSubMenu() {
                var mainMenuItem = document.getElementsByClassName("headMenuItem");
                for (var i = 0;i < mainMenuItem.length; i++){       
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
	function showFooterSubMenu() {
                var footerMenuItem = document.getElementsByClassName("firstMenuItem");
                
                for (var i = 0;i < footerMenuItem.length; i++){
                    
                    Event.add(footerMenuItem[i],'click',function(){
                    var subFooterMenu = this.getElementsByClassName("secondItemList")[0];
                    var arrowDown = this.getElementsByClassName("toggleMenu")[0];
					subFooterMenu.classList.toggle("activeHeadMenu");
					arrowDown.classList.toggle("toggleActive");
                    });
                };
            }
showFooterSubMenu();
	
// валюта і мова - тогл класу visibleOption
	function showOption() {
                var optionSelect = document.getElementsByClassName("regionSelector");
                for(var i = 0;i < optionSelect.length; i++){
                    
                    Event.add(optionSelect[i],'click',function(){
                    var showItem = this.getElementsByClassName("hiddenOption")[0];
                    var arrowDown = this.getElementsByClassName("regionArrow")[0];
			showItem .classList.toggle("visibleOption");
			arrowDown.classList.toggle("toggleActive");
                    });
                };
            }
showOption();
	// спосіб сортування - тогл класу visibleOption
	function sortOption() {
                var optionSelect = document.getElementsByClassName("sortList")[0];
                    Event.add(optionSelect,'click',function(){
                    var showItem = this.getElementsByClassName("hiddenOption")[0];
                    var arrowDown = this.getElementsByClassName("toggleMenuTwo")[0];
			showItem .classList.toggle("visibleOption");
			arrowDown.classList.toggle("toggleActive");
                    });
            }
sortOption();
    
    // зміна режиму перегляду - тогл класу activeView
    function viewMode() {
                var fullMode = document.getElementsByClassName("fullModeView")[0];
                var smallMode = document.getElementsByClassName("smallModeView")[0];
                var listMode = document.getElementsByClassName("listModeView")[0];
                
                var activeFull = document.getElementsByClassName("fullView")[0];
                var activeSmall = document.getElementsByClassName("smallView")[0];
                var activeList = document.getElementsByClassName("listView")[0];
 // full view
                Event.add(fullMode,'click',function(){
            listMode.classList.remove("activeMode");
            smallMode.classList.remove("activeMode");
            fullMode.classList.add("activeMode");
                activeList.classList.remove("activeView");
                activeSmall.classList.remove("activeView");
                activeFull.classList.add("activeView");
                    });
// small view
                Event.add(smallMode,'click',function(){
            listMode.classList.remove("activeMode");
            smallMode.classList.add("activeMode");
            fullMode.classList.remove("activeMode");
                    activeList.classList.remove("activeView");
                    activeSmall.classList.add("activeView");
                    activeFull.classList.remove("activeView");
                    });
        
// list view
               Event.add(listMode,'click',function(){
            listMode.classList.add("activeMode");
            smallMode.classList.remove("activeMode");
            fullMode.classList.remove("activeMode");
                    activeList.classList.add("activeView");
                    activeSmall.classList.remove("activeView");
                    activeFull.classList.remove("activeView");
                    });
            }
viewMode();
    
    // випадаюче вікно після додавання товару до корзини
    function addToCart(){
        var addButton = document.getElementsByClassName("addToCart");
        var cartNotificator = document.getElementsByClassName("shoppingBag-container")[0];
        var closeWindow = document.getElementsByClassName("shoppingBag-close")[0];
        for(var i = 0; i < addButton.length; i++){        
            Event.add(addButton[i], 'click', function(){
            cartNotificator.classList.add("activeNotify");
            });
        }
        Event.add(closeWindow, 'click', function(){
           cartNotificator.classList.remove("activeNotify"); 
        });
    }
    
    addToCart();
}

        


