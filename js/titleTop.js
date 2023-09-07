(() => {
    const { height: pageHeaderHeight } = document.querySelector(".contact-page-header").getBoundingClientRect();
    document.body.style.paddingTop = `${pageHeaderHeight}px`;

    const sectionTitles = document.body.querySelectorAll(".section-c-title");

    const titleTop = `${pageHeaderHeight}px`;
    sectionTitles.forEach(t => t.style.top = titleTop);
})()