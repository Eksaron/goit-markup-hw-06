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
//     (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
  
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
  
//       const scrollLockMethod = !isMenuOpen
//         ? 'disableBodyScroll'
//         : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     // Close the mobile menu on wider screens if the device orientation changes
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
//   })();
}
