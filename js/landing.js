const videoCover = document.getElementById("videoCover");
const videoModal = document.getElementById("videoModal");
const closeBtn = document.getElementById("closeBtn");
const myVideo = document.getElementById("myVideo");

videoCover.addEventListener("click", () => {
    videoModal.style.display = "flex";
    myVideo.play(); 
});

closeBtn.addEventListener("click", () => {
    videoModal.style.display = "none";
    myVideo.pause();
    myVideo.currentTime = 0;
});

window.addEventListener("click", (e) => {
    if (e.target === videoModal) {
        videoModal.style.display = "none";
        myVideo.pause();
        myVideo.currentTime = 0;
    }
});

/*--------------------------------------------*/
const swiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 700,
    spaceBetween: 20,
    slidesPerView: 7,
    slidesPerGroup: 1,
    centeredSlides: false,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-next-btn',
        prevEl: '.swiper-prev-btn'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    breakpoints: {
        424: { slidesPerView: 1, spaceBetween: 12 },
        767: { slidesPerView: 2, spaceBetween: 14 },
        1023: { slidesPerView: 3, spaceBetween: 18 },
        1439: { slidesPerView: 5, spaceBetween: 18 }
    },

    preloadImages: true,
    lazy: false,
    a11y: true
});

Fancybox.bind("[data-fancybox^='single-']", {
    Toolbar: {
        display: ["close"]
    },
    Thumbs: false,
    dragToClose: true,
    placeFocusBack: true
});