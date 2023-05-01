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
const sun=document.querySelector('.gg-sun');
const moon=document.querySelector('.gg-moon');
sun.addEventListener('click', function(){
    sun.classList.add('d-none');
    moon.classList.remove('d-none');

});
moon.addEventListener('click', function(){
    sun.classList.remove('d-none');
    moon.classList.add('d-none');
});
