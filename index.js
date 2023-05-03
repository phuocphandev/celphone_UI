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
var body = document.body;
var html = document.documentElement;
html.style.background="white";
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
// Biến đổi màu chữ khi đổi theme
const changeTitleColor=document.querySelector('.title h3');
const changeNumberColor=document.querySelector('.number h3');
const changeFeedbackColor=document.querySelector('.feedback_title');
const changeInstructorColor=document.querySelector('.instructor h3');
const changeContactColor=document.querySelector('.contact h3');
var w1=document.querySelectorAll('.title h3.feature-title');
var w2=document.querySelectorAll('.banner_row .banner_item');
var w3=document.querySelectorAll('.banner_row .banner_item p');
var n1=document.querySelectorAll('.number .counterpart .timer');
var n2=document.querySelectorAll('.number .count-text');
var f1=document.querySelectorAll('.feedback .feedback_item .feedback_avatar_name h6');
var f2=document.querySelectorAll('.feedback .feedback_item');
var i1=document.querySelectorAll('.team-block-single');
var i2=document.querySelectorAll('.instructor .team-bottom-block .member a');
var i3=document.querySelectorAll('.instructor .team-bottom-block small');
var s1=document.querySelectorAll('footer .box .subcribe_box h4');
var s2=document.querySelectorAll('footer .box');
var u=document.querySelectorAll('footer .box .input_box input');

// 
sun.addEventListener('click', function(){
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    body.style.backgroundColor = "white";
    html.style.backgroundColor = "white";
    hBottomelement.style.background= html.style.backgroundColor;
    brandnameElement.classList.remove("brandname_darkTheme");
    formElement.style.border="2px solid gray";
    formElement.style.background="transparent";
    input.style.setProperty('--placeholder-color', 'gray');
    hTopelement.style.background="#0d369f";
    navDark.forEach(link => link.classList.remove('darkTheme'));
    dropdownmenu.style.background="white";
    dropdownitem.forEach(link=> link.style.color="black");
    ulnavbar.style.background=html.style.backgroundColor;
    searchright.style.background=html.style.backgroundColor;
    changeTitleColor.style.color="black";
    changeNumberColor.style.color="black";
    changeFeedbackColor.style.color="black";
    changeInstructorColor.style.color="black";
    changeContactColor.style.color="black";
    w1.forEach(link => link.classList.remove('white'));
    w2.forEach(link=>link.classList.remove('blue'));
    w3.forEach(link=>link.classList.remove('blue'));
    n1.forEach(link=>link.classList.remove('white'));
    n2.forEach(link=>link.classList.remove('white'));
    f1.forEach(link=>link.classList.remove('white'));
    f2.forEach(link=>link.classList.remove('blue'));
    i1.forEach(link=>link.classList.remove('blue'));
    i2.forEach(link=>link.classList.remove('white'));
    i3.forEach(link=>link.classList.remove('white'));
    s1.forEach(link=>link.classList.remove('white'));
    s2.forEach(link=>link.classList.remove('blue'));
    u.forEach(link=>link.classList.remove('trans'));
});
moon.addEventListener('click', function(){
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
    hTopelement.style.background="#4867b0";
    body.style.backgroundColor = "#161c2d";
    html.style.backgroundColor = "#161c2d";
    hBottomelement.style.background= html.style.backgroundColor;
    brandnameElement.classList.add("brandname_darkTheme");
    formElement.style.border="2px solid white";
    formElement.style.background="transparent";
    input.style.setProperty('--placeholder-color', 'white');
    navDark.forEach(link => link.classList.add('darkTheme'));
    dropdownmenu.style.background="#161c2d";
    dropdownitem.forEach(link=> link.style.color="white");
    ulnavbar.style.background=html.style.backgroundColor;
    searchright.style.background=html.style.backgroundColor;
    // ChangeTITLEcolor 
    changeTitleColor.style.color="white";
    changeNumberColor.style.color="white";
    changeFeedbackColor.style.color="white";
    changeInstructorColor.style.color="white";
    changeContactColor.style.color="white";
    w1.forEach(link => link.classList.add('white'));
    w2.forEach(link=>link.classList.add('blue'));
    w3.forEach(link=>link.classList.add('blue'));
    n1.forEach(link=>link.classList.add('white'));
    n2.forEach(link=>link.classList.add('white'));
    f1.forEach(link=>link.classList.add('white'));
    f2.forEach(link=>link.classList.add('blue'));
    i1.forEach(link=>link.classList.add('blue'));
    i2.forEach(link=>link.classList.add('white'));
    i3.forEach(link=>link.classList.add('white'));
    s1.forEach(link=>link.classList.add('white'));
    s2.forEach(link=>link.classList.add('blue'));
    u.forEach(link=>link.classList.add('trans'));
});

window.addEventListener('scroll', function() {

  if (window.scrollY > 50) {
    hBottomelement.classList.add('fixed-top');
  
    hBottomelement.style.background=html.style.backgroundColor;
  }
  else{
    hBottomelement.classList.remove('fixed-top');
    hBottomelement.classList.add('d-block');
    hBottomelement.style.background="transparent";
  }
  });

