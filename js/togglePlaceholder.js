
(() => {
    document.querySelector('.js-input').addEventListener('focusin', e => {
        e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
    });
    document.querySelector('.js-input').addEventListener('focusout', e => {
        e.currentTarget.placeholder = '';
    });
})()

