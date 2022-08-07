
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

const subFeatures = document.querySelector('.sub_features');
const subCompany = document.querySelector('.sub_company');


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

const menuDesktopArrowCompany = document.createElement('li');
menuDesktopArrowCompany.innerText = 'Company';
menuDesktopArrowCompany.classList.add('menu-desktop_arrow','item-menu')
menuDesktopArrowCompany.setAttribute('id','company-arrow');

const divCompany = document.createElement('div');
divCompany.classList.add('icon-arrow', 'icon_down');

const menuDesktopCareers = document.createElement('li');
menuDesktopCareers.innerText = 'Careers';
menuDesktopCareers.classList.add('item-menu');


const menuDesktopAbout = document.createElement('li');
menuDesktopAbout.innerText = 'About';
menuDesktopAbout.classList.add('item-menu');


navMenuDesktop.appendChild(menuDesktopArrowFeatures);
menuDesktopArrowFeatures.appendChild(divFeatures);
navMenuDesktop.appendChild(menuDesktopArrowCompany);
menuDesktopArrowCompany.appendChild(divCompany);
navMenuDesktop.appendChild(menuDesktopCareers);
navMenuDesktop.appendChild(menuDesktopAbout);


menuDesktopArrowFeatures.addEventListener('click',showmenuDesktopFeatures);
menuDesktopArrowCompany.addEventListener('click',showmenuDesktopCompany);

function showmenuDesktopFeatures(){
let arrowDown = divFeatures.classList.contains('icon_down');

if (arrowDown){
  divFeatures.classList.remove('icon_down');
  divFeatures.classList.add('icon_up');
  subFeatures.classList.toggle('not-visible');
  }else {
    divFeatures.classList.remove('icon_up');
    divFeatures.classList.add('icon_down');
    subFeatures.classList.add('not-visible');
  };
  
};
function showmenuDesktopCompany(){
  let arrowDown = divCompany.classList.contains('icon_down');
  
  if (arrowDown){
    divCompany.classList.remove('icon_down');
    divCompany.classList.add('icon_up');
    subCompany.classList.toggle('not-visible');
    }else {
      divCompany.classList.remove('icon_up');
      divCompany.classList.add('icon_down');
      subCompany.classList.add('not-visible');
    };
  };

/* var mediaqueryList = window.matchMedia("(min-width: 376px)");
if (mediaqueryList.matches){
  
}; */
/*  sub menu desktop features 
const menuFeatureDesktop = document.createElement('ul');
menuFeatureDesktop.setAttribute('id', 'list-submenu-desktop');
const itemTodoList = document.createElement('li');
const itemImgTodoList = document.createElement('img');
itemImgTodoList.setAttribute('src', './images/icon-todo.svg');
itemTodoList.classList.add('item-menu', 'sub_men','sub_feature-desktop', 'not-visible');
itemTodoList.innerText = 'Todo List';

const itemCalendar = document.createElement('li');
const itemImgCalendar = document.createElement('img');
itemImgCalendar.setAttribute('src', './images/icon-calendar.svg');
itemCalendar.classList.add('item-menu', 'sub_men', 'sub_feature-desktop');
itemCalendar.innerText = 'Calendar';

const itemReminders = document.createElement('li');
const itemImgReminders = document.createElement('img');
itemImgReminders.setAttribute('src', './images/icon-reminders.svg');
itemReminders.classList.add('item-menu', 'sub_men','sub_feature-desktop');
itemReminders.innerText = 'Reminders';

const itemPlanning = document.createElement('li');
const itemImgPlanning = document.createElement('img');
itemImgReminders.setAttribute('src', './images/icon-planning.svg');
itemPlanning.classList.add('item-menu', 'sub_men','sub_feature-desktop');
itemPlanning.innerText = 'Planning';

menuDesktopArrowFeatures.appendChild(menuFeatureDesktop);
menuFeatureDesktop.appendChild(itemTodoList);
menuFeatureDesktop.appendChild(itemCalendar);
menuFeatureDesktop.appendChild(itemReminders);
menuFeatureDesktop.appendChild(itemPlanning);
itemTodoList.appendChild(itemImgTodoList);
itemCalendar.appendChild(itemImgCalendar);
itemReminders.appendChild(itemImgReminders);
itemPlanning.appendChild(itemImgPlanning);

  */
/* sub menus desktop */
/*  #list-submenu-desktop {
  display: flex;
  width: 150px;
  flex-direction: column;
 }  
.sub_feature-desktop {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 48px;
  } */
