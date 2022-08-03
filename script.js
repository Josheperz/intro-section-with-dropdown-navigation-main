
const iconMenu = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.menu-mobile-container_sombra');

const closedIconMenu = document.querySelector('.icon-close-menu');

const featuresArrow = document.getElementById('features-arrow');
const menuFeatures = document.querySelector('.menu_features'); 
const companyArrow = document.getElementById('company-arrow'); 
const menuCompany = document.querySelector('.menu_company');

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