// Đổi icon menu khi responsive
const toggleButton = document.querySelector(".navbar-toggler");
const expandIcon = document.querySelector(".icon-expand");
const closeIcon = document.querySelector(".icon-close");

toggleButton.addEventListener("click", function() {
  if (expandIcon.classList.contains("d-none")) {
    expandIcon.classList.remove("d-none");
    closeIcon.classList.add("d-none");
  } else {
    expandIcon.classList.add("d-none");
    closeIcon.classList.remove("d-none");
  }
});

/**
 * Dark theme and light theme
 */
var hTopelement = document.querySelector('.header__top');
var hBottomelement = document.querySelector('.header__bottom');
const body = document.body;
const html = document.documentElement;
body.style.background="white";
var brandnameElement = document.querySelector('.header__bottom .brandname');
var formElement=document.querySelector('.header__bottom .input-search input');
const input = document.getElementById('searchform');
var navElement=document.querySelector('.header__bottom .nav-item .nav-link.nav-link-item');
var navDark=document.querySelectorAll('.header__bottom .nav-item .nav-link');
var dropdownmenu =document.querySelector('.navbar-expand-lg .navbar-nav .dropdown-menu');
var dropdownitem = document.querySelectorAll('.dropdown-item');
// var navdropdown=document.querySelector('#navbarDropdown');
// var navcontact=document.querySelector('#navlink-contact');
var ulnavbar=document.querySelector('.domnotchange ul');
var searchright=document.querySelector('.domnotchange .search__right');
ulnavbar.style.background="white";
searchright.style.background="white";
const sun=document.querySelector('.gg-sun');
const moon=document.querySelector('.gg-moon');
sun.addEventListener('click', function(){
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    body.style.backgroundColor = "white";
    html.style.backgroundColor = "white";
    brandnameElement.classList.remove("brandname_darkTheme");
    formElement.style.border="2px solid gray";
    formElement.style.background="transparent";
    input.style.setProperty('--placeholder-color', 'gray');
    hTopelement.style.background="#0d369f";
    navDark.forEach(link => link.classList.remove('darkTheme'));
    dropdownmenu.style.background="white";
    dropdownitem.forEach(link=> link.style.color="black");
    ulnavbar.style.background=body.style.backgroundColor;
    searchright.style.background=body.style.backgroundColor;
   
    // navElement.style.setProperty('--navlink-color','black');
    // navcontact.style.setProperty('--navlink-color','black')

    // const linkColor1 = window.getComputedStyle(navdropdown).getPropertyValue('color');
    // navdropdown.addEventListener('mouseover', function() {
    // this.style.color = '#ff6e65';
    // });
    // navdropdown.addEventListener('mouseout', function() {
    // this.style.color = linkColor1;
    // });

    // const linkColor2 = window.getComputedStyle(navcontact).getPropertyValue('color');
    // navcontact.addEventListener('mouseover', function() {
    // this.style.color = '#ff6e65';
    // });
    // navcontact.addEventListener('mouseout', function() {
    // this.style.color = linkColor2;
    // });
});
moon.addEventListener('click', function(){
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
    hTopelement.style.background="#4867b0";
    body.style.backgroundColor = "#161c2d";
    html.style.backgroundColor = "#161c2d";
    brandnameElement.classList.add("brandname_darkTheme");
    formElement.style.border="2px solid white";
    formElement.style.background="transparent";
    input.style.setProperty('--placeholder-color', 'white');
    navDark.forEach(link => link.classList.add('darkTheme'));
    dropdownmenu.style.background="#161c2d";
    dropdownitem.forEach(link=> link.style.color="white");
    ulnavbar.style.background=body.style.backgroundColor;
    searchright.style.background=body.style.backgroundColor;
    // navdropdown.style.setProperty('--navlink-color','white');
    // navcontact.style.setProperty('--navlink-color','white');

    // const linkColor1 = window.getComputedStyle(navdropdown).getPropertyValue('color');
    // navdropdown.addEventListener('mouseover', function() {
    // this.style.color = '#ff6e65';
    // });
    // navdropdown.addEventListener('mouseout', function() {
    // this.style.color = linkColor1;
    // });

    // const linkColor2 = window.getComputedStyle(navcontact).getPropertyValue('color');
    // navcontact.addEventListener('mouseover', function() {
    // this.style.color = '#ff6e65';
    // });
    // navcontact.addEventListener('mouseout', function() {
    // this.style.color = linkColor2;
    // });
});

window.addEventListener('scroll', function() {

  if (window.scrollY > 0) {
    hBottomelement.classList.add('fixed-top');
  
    hBottomelement.style.background=body.style.backgroundColor;
  }
  else{
    hBottomelement.classList.remove('fixed-top');
    hBottomelement.classList.add('d-block');
    hBottomelement.style.background="transparent";
  }
  });

