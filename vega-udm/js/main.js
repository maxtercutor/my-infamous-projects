$("#sliderCarousel").owlCarousel({
    items: 1,
    dotsEach: 1,
    loop: true,
    autoplay: true,
    responsive: {
        1200: {
            items: 8,
            dots: false
        }
    }
    
});

$('[data-toggle="popover"]').popover();

const burger = document.querySelector('#burger');
const burgerItems = document.querySelectorAll('.burger__item');
const headerMenu = document.querySelector('ul#headerMenu');
const headerMenuItems = document.querySelectorAll('ul#headerMenu li');

burger.onclick = () => {
    headerMenu.classList.toggle('active');

    for (let i = 0; i < burgerItems.length; i++) {
        let burgerItem = burgerItems[i];

        burgerItem.classList.toggle('active');
    }
}

for(let i = 0; i < headerMenuItems.length; i++) {
    let headerMenuItem = headerMenuItems[i];

    headerMenuItem.onclick = () => {
        headerMenu.classList.toggle('active');
        
        for (let i = 0; i < burgerItems.length; i++) {
            let burgerItem = burgerItems[i];
    
            burgerItem.classList.toggle('active');
        }
    }
}

const sliderPoster = document.querySelector('#sliderPoster img');
const sliderItems = document.querySelectorAll('.slider__item');

const carouselImages = [
    './assets/images/carousel-image-1.png',
    './assets/images/carousel-image-2.png',
    './assets/images/carousel-image-3.png',
    './assets/images/carousel-image-4.png',
    './assets/images/carousel-image-5.png',
    './assets/images/carousel-image-6.png',
    './assets/images/carousel-image-7.png',
    './assets/images/carousel-image-8.png',
    './assets/images/carousel-image-9.png',
    './assets/images/carousel-image-10.png',
    './assets/images/carousel-image-11.png',
    './assets/images/carousel-image-12.png',
    './assets/images/carousel-image-13.png',
];

let count = 0;

const interval = setInterval(() => {

    sliderPoster.src = carouselImages[count++];
    if(count === carouselImages.length) count = 0;
}, 5000);

for(let i = 0; i < sliderItems.length; i++) {
    let sliderItem = sliderItems[i];

    sliderItem.onclick = (event) => {
        let classStr = event.target.className;
        let orderNum = classStr.slice(27,) - 1;
        sliderPoster.style.opacity = '0';
        sliderPoster.style.transitionDuration = '1.0s';
        setTimeout(() => {
            sliderPoster.src = carouselImages[orderNum];
            sliderPoster.style.opacity = '1';
        }, 500);
    }
}

const stagesMenuItems = document.querySelectorAll('ul.stages__menu li');
const stagesItems = document.querySelectorAll('.stages__item');

stagesMenuItems[0].classList.add('active');
stagesItems[0].classList.add('active');

for(let i = 0; i < stagesMenuItems.length; i++) {
    let stagesMenuItem = stagesMenuItems[i];

    stagesMenuItem.addEventListener('click', (event) => {
        for(let j = 0; j < stagesMenuItems.length; j++) {
            let stagesMenuItem = stagesMenuItems[j];
            stagesMenuItem.classList.remove('active');
        }
        event.target.classList.add('active');
    });
    stagesMenuItem.addEventListener('click', () => {
        for(let x = 0; x < stagesItems.length; x++) {
            let stagesItem = stagesItems[x];
            stagesItem.classList.remove('active');
        }
        stagesItems[i].classList.add('active');
    })
}

const productsCards = document.querySelectorAll('.products__cards');

if(window.innerWidth < 1200) {
    for(let i = 0; i < productsCards.length; i++) {
        let productsCard = productsCards[i];

        productsCard.classList.add('owl-carousel');
    }

    $('.products__cards').owlCarousel({
        items: 1,
        loop: true
    });

    const stItems = document.querySelector('#stagesItems');

    stItems.classList.add('owl-carousel');

    $(stItems).owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });

}


  