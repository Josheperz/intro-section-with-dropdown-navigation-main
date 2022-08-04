
const iconMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.menu-mobile-container_sombra');

const closedIconMenu = document.querySelector('.icon-close-menu');

const featuresArrow = document.getElementById('features-arrow');
const menuFeatures = document.querySelector('.menu_features'); 
const companyArrow = document.getElementById('company-arrow'); 
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
  let menuClosed = featuresArrow.classList.contains('icon_down');
  
  if (menuClosed){
    featuresArrow.classList.remove('icon_down');
    featuresArrow.classList.add('icon_up');
  }else {
    featuresArrow.classList.remove('icon_up');
    featuresArrow.classList.add('icon_down');
  };  
};
function openClosedMenuCompany(){
  menuCompany.classList.toggle('not-visible');
  let menuClosed = companyArrow.classList.contains('icon_down');
  
  if (menuClosed){
    companyArrow.classList.remove('icon_down');
    companyArrow.classList.add('icon_up');
  }else {
    companyArrow.classList.remove('icon_up');
    companyArrow.classList.add('icon_down');
  };
};

const menuDesktopArrow = document.createElement('li');
menuDesktopArrow.innerText = 'Features'
const pFeatures = document.createElement('p');
pFeatures.innerText = 'Nc'
const divFeatures = document.createElement('div');
divFeatures.classList.add('icon-arrow', 'icon_down');
divFeatures.setAttribute('id','features-arrow');

menuDesktopArrow.addEventListener('click',prueba);

function prueba(){
let arrowDown = divFeatures.classList.contains('icon_down');

if (arrowDown){
  divFeatures.classList.remove('icon_down');
  divFeatures.classList.add('icon_up');
  }else {
    divFeatures.classList.remove('icon_up');
    divFeatures.classList.add('icon_down');
  };

}

navMenuDesktop.appendChild(menuDesktopArrow);
menuDesktopArrow.appendChild(pFeatures);
menuDesktopArrow.appendChild(divFeatures);



var mediaqueryList = window.matchMedia("(min-width: 376px)");
if (mediaqueryList.matches){
  
};