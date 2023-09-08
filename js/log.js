(() => {
    document.querySelector('.js-modal-form')
        .addEventListener('submit', e => {
            e.preventDefault();
            new FormData(e.currentTarget).forEach((value, name) =>
                console.log(`${name}: ${value}`),
            );
        });
})();