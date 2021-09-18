$(document).ready(function(){
    var isMobile = false; 

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
        isMobile = true;
    }

    if(window.innerWidth > 1023) {
    $("#portfolioCarousel").owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        slideBy: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        navClass: ['prev-button', 'next-button'],
        autoplaySpeed: 500,
        navSpeed: 300
    });

    $("#commentsCarousel").owlCarousel({
        items: 2,
        loop: true,
        nav: true,
        slideBy: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        navClass: ['prev-button', 'next-button'],
        autoplaySpeed: 500,
        navSpeed: 300
    });

        $("#gallery").owlCarousel({
            items: 2,
            loop: true,
            nav: true,
            slideBy: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            navClass: ['prev-button', 'next-button'],
            autoplaySpeed: 500,
            navSpeed: 300
        });

    } else if (window.innerWidth < 1024 || isMobile) {
        $("#portfolioCarousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            slideBy: 1,
            autoplay: false,
            autoplayTimeout: 5000,
            navClass: ['prev-button', 'next-button'],
            autoplaySpeed: 500,
            navSpeed: 300
        });

        $("#commentsCarousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            slideBy: 1,
            autoplay: false,
            autoplayTimeout: 5000,
            navClass: ['prev-button', 'next-button'],
            autoplaySpeed: 500,
            navSpeed: 300
        });

        $("#gallery").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            slideBy: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            navClass: ['prev-button', 'next-button'],
            autoplaySpeed: 500,
            navSpeed: 300
        });
    } 

    $(".modal-solutions__min-imgs").owlCarousel({
        items: 3,
        loop: true,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
    })



    const dinamicContactForm = document.querySelector('.dinamic-contact-form');

    if(window.innerWidth > 1023) {
        setTimeout(() => {
            dinamicContactForm.style.display = 'flex';
        }, 5000);
    } 
	
    $(".phone").mask("+7 (999) 999 99 99");

    const menuLinks = document.querySelectorAll('li.menu__link a');

    for (let menuLink of menuLinks) {
		menuLink.addEventListener('click', function (event) {
			event.preventDefault();
			
			const blockID = menuLink.getAttribute('href');
			
			document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
			})
		})
	}

const quizContainer = document.querySelector('#quiz_container');

if(quizContainer) {
    
    const quizPages = document.querySelectorAll('.quiz-page');
    const form = document.querySelector('#form');
    const checkBoxes = document.querySelectorAll('.check-box');
    const checkeds = document.querySelectorAll('.checked');
    const getOptionsButton = document.querySelector('#get_options_button');
    const nextButtons = document.querySelectorAll('.quiz-next-button');
    const inputs = document.querySelectorAll('.input--quiz');
    const quizInput = document.querySelector('#quiz');
    const nameInput = document.querySelector('#name');
    const phoneInput = document.querySelector('#phone');
    const submitButton = document.querySelector('#submit_button');

    const goToNextPage = () => {
        quizPages[currentIndex].style.opacity = '0';
        quizPages[currentIndex].style.zIndex = '1';

        currentIndex++;

        quizPages[currentIndex].style.opacity = '1';
        quizPages[currentIndex].style.zIndex = '2';
    }

    let currentIndex = 0;
    let question;
    let answer;
    let quizMap = new Map();
    let answersList = [];

    quizPages[currentIndex].style.opacity = '1';
    quizPages[currentIndex].style.zIndex = '2';

    quizContainer.onclick = (event) => {

        question = event.target.closest('.quiz-page').children[1].textContent;  

        if(currentIndex < quizPages.length - 1) {

            if(event.target.tagName === 'IMG' && event.target.className !== 'check-box' && event.target.className !== 'img') {
                answer = event.target.alt;
                quizMap.set(question, answer);
                
                goToNextPage();

                quizContainer.scrollIntoView({
                    behavior: 'smooth',
			        block: 'start'
                });
            }

            else if(event.target.tagName === 'INPUT' && event.target.type === 'radio') {
                answer = event.target.name;
                quizMap.set(question, answer);

                goToNextPage();
                
                quizContainer.scrollIntoView({
                    behavior: 'smooth',
			        block: 'start'
                });
            }

            else if(event.target.className === 'img') {
                quizPages[currentIndex].style.opacity = '0';
                quizPages[currentIndex].style.zIndex = '1';
        
                currentIndex+= 2;
        
                quizPages[currentIndex].style.opacity = '1';
                quizPages[currentIndex].style.zIndex = '2';

                quizContainer.scrollIntoView({
                    behavior: 'smooth',
			        block: 'start'
                });
            }
        }
    }

    for(let i = 0; i < checkBoxes.length; i++) {
        let checkBox = checkBoxes[i];
        let flag = false;

        checkBox.onclick = (event) => {
            let displayType = flag ? 'none' : 'block';
            checkeds[i].style.display = displayType;
            flag = !flag;
            question = event.target.closest('.quiz-page').children[0].textContent;
            answer = event.target.alt;

            if(flag) answersList.push(answer);
            else answersList.pop();

            const buttonBefore = document.querySelector('.before');

            buttonBefore.classList.add('animated');

            setTimeout(() => {
                buttonBefore.classList.remove('animated');
            }, 1100);

            getOptionsButton.onclick = () => {
                if(flag) {
                    quizMap.set(question, answersList);

                    quizPages[currentIndex].style.opacity = '0';
                    quizPages[currentIndex].style.zIndex = '1';
        
                currentIndex+= 5;
        
                quizPages[currentIndex].style.opacity = '1';
                quizPages[currentIndex].style.zIndex = '2';

                    $('html, body').animate({scrollTop:0}, 'slow');
                } 
                return false;
            }
        }
    }

    for(let i = 1; i < nextButtons.length; i++) {
        let nextButton = nextButtons[i];
        let pattern = /^\d+$/;

        nextButton.onclick = (event) => {
            question = event.target.closest('.quiz-page').children[0].textContent;
            answer = inputs[i - 1].value;

            if(pattern.test(inputs[i - 1].value)) {
                quizMap.set(question, answer);
                goToNextPage();

                quizContainer.scrollIntoView({
                    behavior: 'smooth',
			        block: 'start'
                });
            }
            return false;
        }
    }

    submitButton.onclick = () => {

        let quizResult = '';

        for(let questionAndAnmswer of quizMap) {
            quizResult+= `Вопрос: ${questionAndAnmswer[0]}\nОтвет: ${questionAndAnmswer[1]}; \n`;
        }

        quizInput.value = quizResult;
        console.log(quizResult);
    }

    $("#phone").mask("8(999) 999 99 99");

    
    
    $('input[type="radio"]').on('click', function() {
        $('input[type="radio"]').removeAttr('checked'); 
        $(this).prop('checked', true); 

    });

    }

    $('.site-form').submit(function() {   
       if(quizContainer) quizContainer.remove();
    
		$.ajax({
			type: "POST",
			url: "https://svotok.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
            console.log("Данные отправлены на эл. почту");
            
           setTimeout(() => {
                //main.remove();
                //showSuccessMessage();
                location.reload();
            }, 1000);

            /*setTimeout(() => {
                removeSuccessMessage();
                //header.after(main);
                location.reload();
            }, 5000);*/
		}).fail(function() {
            console.log("Не удалось отправить данные на почту");
            if(quizContainer) {
                setTimeout(() => {
                    //main.remove();
                    //showErrorMessage();
                    location.reload();
                }, 1000);
            }

            /*setTimeout(() => {
                removeErrorMessage();
                //header.after(main);
                location.reload();
            }, 3000); */
		});
		    return false;
    });

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('nav');

    let hidden = true;

    burger.onclick = () => {
        let menuDisplay = hidden ? 'block' : 'none';
        let burgerHTML = hidden ? '<p class="burger-disable">&#10006;</p>' : '<div class="strip"></div><div class="strip"></div><div class="strip"></div>';

        menu.style.display = menuDisplay;
        burger.innerHTML = burgerHTML;

        hidden = !hidden;
    } 

    document.querySelector('.main-footer__text').innerHTML = `&copy;${new Date().getFullYear()} ООО «Svotok» - Монтаж инженерных коммуникаций`;
    
})