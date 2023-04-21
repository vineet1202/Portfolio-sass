const menuBtn = document.querySelector('.menu-btn');
// const hamburger = document.querySelector('.menu-btn_burger');
const bars = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');

const nav = document.querySelector(".nav");
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        // hamburger.classList.add('open');
        bars.classList.add('open');
        xmark.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    }else{
        // hamburger.classList.remove('open');
        bars.classList.remove('open');
        xmark.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}