document.addEventListener("DOMContentLoaded", () => {
    const keys = [1, 2, 3, 4, 5, 6, 7];

    const pages = {};
    const links = {};
    keys.forEach((n) => {
        pages[n] = document.getElementById("page" + n);
        links[n] = document.getElementById("menu" + n + "-link");
    });

    // Переключение страниц: показываем одну, остальные прячем
    function showPage(n) {
        keys.forEach((k) => {
            pages[k].classList.add("id-hidden");
            links[k].classList.remove("active");
        });
        pages[n].classList.remove("id-hidden");
        links[n].classList.add("active");
        window.scrollTo(0, 0);
    }

    keys.forEach((n) => {
        links[n].addEventListener("click", (e) => {
            e.preventDefault();
            showPage(n);
        });
    });

    // При открытии сайта всегда показываем первую страницу
    showPage(1);
});
