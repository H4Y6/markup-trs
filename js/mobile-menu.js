(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const toggleMenuBtn = document.querySelector('.js-toggle-menu');
    // const openMenuBtn = document.querySelector('.js-open-menu');
    // const closeMenuBtn = document.querySelector('.js-close-menu');

    const toggleMenu = () => {
        const isMenuOpen =
            toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        toggleMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        // openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

        //     openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        // openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        // mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](document.body);
    };

    toggleMenuBtn.addEventListener('click', toggleMenu);
    // openMenuBtn.addEventListener('click', toggleMenu);
    // closeMenuBtn.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        toggleMenuBtn.setAttribute('aria-expanded', false);
        // openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();