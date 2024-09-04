document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    const close = document.getElementById("close-btn");
    const open = document.getElementById("view-btn");

    open.addEventListener('click', () => {
        sidebar.classList.add("active");
        close.classList.add("visible");
    })

    close.addEventListener('click', () => {
        sidebar.classList.remove("active");
        close.classList.remove("visible");
    });

});