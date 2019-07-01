
$(function () {
  const burger = document.querySelector("#burger");
        nav    = document.querySelector("#nav");

        burger.addEventListener('click', () => {
          burger.classList.toggle("active")
          nav.classList.toggle("active");


        console.log(nav);  
        console.log(burger);
});
