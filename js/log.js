(() => {
    document.querySelector('.js-order-form')
        .addEventListener('submit', e => {
            e.preventDefault();
            new FormData(e.currentTarget).forEach((value, name) =>
                console.log(`${name}: ${value}`),
            );
        });
})();