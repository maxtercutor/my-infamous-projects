if(window.innerWidth < 1200) {
    const sliderCarousel = document.querySelector('#sliderCarousel');
    const complectsCarousel = document.querySelector('#complectsCarousel');
    const priceCarousel = document.querySelector('#priceCarousel');
    const worksCarousel = document.querySelector('#worksCarousel');

    function startCarousel(id) {
        $(id).owlCarousel({
            items: 1,
            dotsEach: 1,
            loop: true,
            autoplay: true,
        });
    }

    if(sliderCarousel && complectsCarousel) {
        sliderCarousel.classList.add('owl-carousel');
        complectsCarousel.classList.remove('row');
        complectsCarousel.classList.add('owl-carousel');

        startCarousel(sliderCarousel);
        startCarousel(complectsCarousel);
    }

    if(priceCarousel) {
        priceCarousel.classList.add('owl-carousel');

        startCarousel(priceCarousel);
    }

    if(worksCarousel) {
        worksCarousel.classList.add('owl-carousel');

        startCarousel(worksCarousel);
    }

    const burger = document.querySelector('#burger');
    const burgerItems = document.querySelectorAll('.burger div.burger__item');
    const menu = document.querySelector('#menu');

    burger.onclick = () => {
        menu.classList.toggle('active');

        burgerItems.forEach((item) => item.classList.toggle('active'));
        
        document.body.classList.toggle('active');
    }

    ! function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : t()
    }(0, function() {
        var o = "details",
            i = "summary";
        (function() {
            var e = document.createElement(o);
            if (!("open" in e)) return !1;
            e.innerHTML = "<" + i + ">a</" + i + ">b", document.body.appendChild(e);
            var t = e.offsetHeight;
            e.open = !0;
            var n = t != e.offsetHeight;
            return document.body.removeChild(e), n
        })() || (document.documentElement.className += " no-details", window.addEventListener("click", function(e) {
            if ("summary" === e.target.nodeName.toLowerCase()) {
                var t = e.target.parentNode;
                if (!t) return;
                t.getAttribute("open") ? (t.open = !1, t.removeAttribute("open")) : (t.open = !0, t.setAttribute("open", "open"))
            }
        }), function(e, t) {
            if (document.getElementById(e)) return;
            var n = document.createElement("style");
            n.id = e, n.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(n)
        }("details-polyfill-style", "html.no-details " + o + ":not([open]) > :not(" + i + ") { display: none; }\nhtml.no-details " + o + " > " + i + ':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details ' + o + "[open] > " + i + ':before { content: "▼"; }'))
    });
}

const details = document.querySelectorAll('details');
const summaries = document.querySelectorAll('details summary');

if(window.innerWidth > 1200) {
    details.forEach((elem) => elem.open = true);
    summaries.forEach((summary) => summary.onclick = () => false);
} else details.forEach((elem) => elem.open = false);

if(window.innerWidth > 1200) {
    const sliderImages = [
        './assets/images/slider-image-1.jpg',
        './assets/images/slider-image-2.jpg',
        './assets/images/slider-image-3.jpg',
        './assets/images/slider-image-4.jpg',
        './assets/images/slider-image-5.jpg',
        './assets/images/slider-image-6.jpg',
        './assets/images/slider-image-7.jpg',
        './assets/images/slider-image-8.jpg',
        './assets/images/slider-image-9.jpg',
        './assets/images/slider-image-10.jpg',
    ];

    const sliderPoster = document.querySelector('#sliderPoster img');
    const sliderItems = document.querySelectorAll('.slider__item');
    let interval;

    if(sliderPoster && sliderItems) {
        function changePoster(index) {
            sliderPoster.style.opacity = '0';
    
            setTimeout(() => {
                sliderPoster.src = sliderImages[index];
                sliderPoster.style.opacity = '1';
            }, 400);
        }
    
        function showPosters () {
            let count = 0;
    
            interval = setInterval(() => {
                changePoster(count++);
    
                if(count === sliderImages.length) count = 0;
            }, 5000);
        }
    
        showPosters();
        
        for (let i = 0; i < sliderItems.length; i++) {
            let sliderItem = sliderItems[i];
    
            sliderItem.onclick = () => {
                clearInterval(interval);
    
                changePoster(i);   
               
                setTimeout(() => {
                    showPosters();
                }, 5000);
            }
        }
    }
}

const bigImages = document.querySelectorAll('.product__big-image');
const miniImages = document.querySelectorAll('.product__mini-image');

if(bigImages && miniImages) {
    setInterval(() => {
        bigImages.forEach((image) => image.classList.toggle('active'));
        miniImages.forEach((image) => image.classList.toggle('active'));
    }, 5000);

    for(let i = 0; i < miniImages.length; i++) {
        let miniImage = miniImages[i];

        miniImage.onclick = () => {
            bigImages.forEach((image) => image.classList.remove('active'));
            bigImages[i].classList.add('active');
            miniImages.forEach((image) => image.classList.remove('active'));
            miniImage.classList.add('active');
        }
    }
}