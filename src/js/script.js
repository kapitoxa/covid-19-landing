document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.navigation__toggle');
    const menu = document.querySelector('.navigation__menu');
    const menuItems = document.querySelectorAll('.navigation__item');

    function toggleNavigation() {
        hamburger.classList.toggle('navigation__toggle_active');
        menu.classList.toggle('navigation__menu_active');
    }
    
    hamburger.addEventListener('click', toggleNavigation);
    menuItems.forEach(item => item.addEventListener('click', toggleNavigation));

    const form = document.querySelector('.contacts__form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const input = form.querySelector('input');
        input.value = '';
    });
});