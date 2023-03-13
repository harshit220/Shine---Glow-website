// Menu Open Close

let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle('move');
};

// Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 50000,
        disableOnInteraction: false,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    }
})
