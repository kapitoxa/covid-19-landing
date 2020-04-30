document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.navigation__toggle');
    const menu = document.querySelector('.navigation__menu');
    const menuItems = document.querySelectorAll('.navigation__item');

    function toggleNavigation() {
        if (hamburger.classList.contains('navigation__toggle_active')) {
            document.body.style.overflow = '';
        } else {
            document.body.style.overflow = 'hidden';
        }
        hamburger.classList.toggle('navigation__toggle_active');
        menu.classList.toggle('navigation__menu_active');
    }
    
    hamburger.addEventListener('click', toggleNavigation);
    menuItems.forEach(item => item.addEventListener('click', toggleNavigation));
});