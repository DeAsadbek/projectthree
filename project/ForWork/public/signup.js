
// navabr on Scroll events
// jQuery(function ($) {
//     var $navbar = $('.nav');
//     $(window).scroll(function (e) {
//         var $current = $(this).scrollTop();
//         if ($current > 0) {
//             $navbar.addClass('active');
//         } else {
//             $navbar.removeClass('active');
//         }
//     });
// });
// navabr on Scroll events

// -------------subMenu-----------------
const text = document.querySelector('.login');
const subMenu = document.querySelector('.sub-menu ');
const closeBtn = document.querySelector('.ionClose');
const bodyOverlet = document.querySelector('.body-overley');
const body = document.querySelector('body');

// console.log(text)
// console.log(subMenu);

text.onclick = () => {
    subMenu.classList.add('active');
    bodyOverlet.classList.add('active');
    body.classList.add('active');
}

closeBtn.onclick = () => {
    subMenu.classList.remove('active');
    bodyOverlet.classList.remove('active');
    body.classList.remove('active');
}
//

