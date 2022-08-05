
const iconMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.menu-mobile-container_sombra');

const closedIconMenu = document.querySelector('.icon-close-menu');

const featuresArrow = document.getElementById('features-arrow');
const arrowF = document.querySelector('.arrow-f');
const menuFeatures = document.querySelector('.menu_features'); 

const companyArrow = document.getElementById('company-arrow');
const arrowC = document.querySelector('.arrow-c');
const menuCompany = document.querySelector('.menu_company');

const navMenuDesktop = document.querySelector('.nav-menu-desktop');

iconMenu.addEventListener('click', showMenuMobile);
closedIconMenu.addEventListener('click', closedMenuMobile);
featuresArrow.addEventListener('click', openClosedMenuFeatures);
companyArrow.addEventListener('click', openClosedMenuCompany);

function showMenuMobile(){
  menuMobile.classList.toggle('not-visible');
  
};
function closedMenuMobile(){
  menuMobile.classList.toggle('not-visible');
}
function openClosedMenuFeatures(){
 menuFeatures.classList.toggle('not-visible');
  let menuClosed = arrowF.classList.contains('icon_down');
  
  if (menuClosed){
    arrowF.classList.remove('icon_down');
    arrowF.classList.add('icon_up');
  } else {
    arrowF.classList.remove('icon_up');
    arrowF.classList.add('icon_down');
  };   
};
function openClosedMenuCompany(){
  menuCompany.classList.toggle('not-visible');
  let menuClosed = arrowC.classList.contains('icon_down');
  
  if (menuClosed){
    arrowC.classList.remove('icon_down');
    arrowC.classList.add('icon_up');
  }else {
    arrowC.classList.remove('icon_up');
    arrowC.classList.add('icon_down');
  };
};

 const menuDesktopArrowFeatures = document.createElement('li');
 menuDesktopArrowFeatures.innerText = 'Features';
 menuDesktopArrowFeatures.classList.add('menu-desktop_arrow','item-menu');
 menuDesktopArrowFeatures.setAttribute('id','features-arrow');

const divFeatures = document.createElement('div');
divFeatures.classList.add('icon-arrow', 'icon_down');

const menuDesktopArrowDown = document.createElement('li');
menuDesktopArrowDown.innerText = 'Company';
menuDesktopArrowDown.classList.add('menu-desktop_arrow','item-menu')
menuDesktopArrowDown.setAttribute('id','company-arrow');

const divCompany = document.createElement('div');
divCompany.classList.add('icon-arrow', 'icon_down');

const menuDesktopCareers = document.createElement('li');
menuDesktopCareers.innerText = 'Careers';
menuDesktopCareers.classList.add('item-menu');
menuDesktopCareers.classList.add('item-menu_desktop');/* 
 */
const menuDesktopAbout = document.createElement('li');
menuDesktopAbout.innerText = 'About';
menuDesktopAbout.classList.add('item-menu');
/* menuDesktopAbout.classList.add('item-menu_desktop'); */

navMenuDesktop.appendChild(menuDesktopArrowFeatures);
menuDesktopArrowFeatures.appendChild(divFeatures);
navMenuDesktop.appendChild(menuDesktopArrowDown);
menuDesktopArrowDown.appendChild(divCompany);
navMenuDesktop.appendChild(menuDesktopCareers);
navMenuDesktop.appendChild(menuDesktopAbout);

menuDesktopArrowFeatures.addEventListener('click',showmenuDesktopFeatures);
menuDesktopArrowDown.addEventListener('click',showmenuDesktopCompany);

function showmenuDesktopFeatures(){
let arrowDown = divFeatures.classList.contains('icon_down');

if (arrowDown){
  divFeatures.classList.remove('icon_down');
  divFeatures.classList.add('icon_up');
  }else {
    divFeatures.classList.remove('icon_up');
    divFeatures.classList.add('icon_down');
  };
};
function showmenuDesktopCompany(){
  let arrowDown = divCompany.classList.contains('icon_down');
  
  if (arrowDown){
    divCompany.classList.remove('icon_down');
    divCompany.classList.add('icon_up');
    }else {
      divCompany.classList.remove('icon_up');
      divCompany.classList.add('icon_down');
    };
  };

/* var mediaqueryList = window.matchMedia("(min-width: 376px)");
if (mediaqueryList.matches){
  
}; */