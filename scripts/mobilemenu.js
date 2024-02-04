'use strict'
{

    let menuBtnOpen = document.querySelector('.mobile-menu-btn-open');
    menuBtnOpen.addEventListener('click', function () {
        mobileMenuToggle();
    })

    let menuBtnClose = document.querySelector('.mobile-menu-btn-close');
    menuBtnClose.addEventListener('click', function () {
        mobileMenuToggle();
    })

    let menu = document.querySelector('.mobile-menu');
    function mobileMenuToggle() {
        menu.classList.toggle('active');
    }

    // function mobileMenuOpenClose() {
    //     menu.classList.toggle('active');
    //     // menu.classList.add('is-open');
    // }
}