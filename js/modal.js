(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-modal]"),
        closeModalBtn: document.querySelector("[data-close-modal]"),
        backdrop: document.querySelector("[data-backdrop]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden");
    }

    function logBackdropClick() {
        console.log("This is backdrop click");
    }

    const { height: pageHeaderHeight } = document.querySelector(".contact-page-header").getBoundingClientRect();
    document.body.style.paddingTop = `${pageHeaderHeight}px`;

    const sectionTitles = document.body.querySelectorAll(".section-c-title");

    const titleTop = `${pageHeaderHeight}px`;
    sectionTitles.forEach(t => t.style.top = titleTop);
})()