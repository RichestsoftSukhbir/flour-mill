// Year
document.querySelector(".year").innerHTML = new Date().getFullYear();

// header top position changer
let menu = document.querySelector(".menu");
let header = document.querySelector('header');
let ham = document.querySelector(".hamburger");

window.addEventListener("load", function () {
    headerTop();
});
window.addEventListener("resize", function () {
    headerTop();
});

ham.addEventListener("click", function () {
    menu.classList.toggle('active');
    ham.classList.toggle('active');
});

function headerTop() {
    let headerHeight = header.clientHeight;
    menu.style.top = (headerHeight + 1) + "px";
}

// search toggler
let searchToggler = document.querySelector('.search-toggler');
let searchForm = document.querySelector('.search-form');

searchToggler.addEventListener("click", function () {
    searchForm.classList.toggle("active");
});

// nav active toggler
let url = window.location.pathname;
let menuItems = document.querySelectorAll(".menu-list a");

menuItems.forEach(function (element) {
    if (url == element.pathname) {
        element.classList.add("active");
    } else {
        element.classList.remove("active");
    }
    if (url == "" || url == "/" || url == "/index.html") {
        document.querySelector(".menu-list:nth-child(1) a").classList.add("active");
    }
});

// Int Tel Input
var phoneInput = document.querySelector("#phone");
window.intlTelInput(phoneInput, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "us";
            callback(countryCode);
        });
    },
});

// Owl Carousels
$(document).ready(function () {
    var productOwl = $('.product-slide');
    productOwl.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 3,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.prod-prev').click(function () {
        productOwl.trigger('prev.owl.carousel');
    });
    $('.prod-next').click(function () {
        productOwl.trigger('next.owl.carousel');
    });

    var testiOwl = $('.testimoial-slider');
    testiOwl.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 1,
        dots: false,
        smartSpeed: 1000
    });
    $('.testi-prev').click(function () {
        testiOwl.trigger('prev.owl.carousel');
    });
    $('.testi-next').click(function () {
        testiOwl.trigger('next.owl.carousel');
    });

    var relProdSlider = $('.related-prod-slider');
    relProdSlider.owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        items: 4,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('.rel-prod-prev').click(function () {
        relProdSlider.trigger('prev.owl.carousel');
    });
    $('.rel-prod-next').click(function () {
        relProdSlider.trigger('next.owl.carousel');
    });
});

// Google Translator
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

// fancybox
Fancybox.bind('[data-fancybox="gallery"]', {});