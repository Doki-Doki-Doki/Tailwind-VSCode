const toggleMenu = document.querySelector('.toggle__menu');
const headerNav = document.querySelector('.header__drop');

toggleMenu.addEventListener('click',()=>{
    headerNav.classList.toggle('h-[20rem]');
})

