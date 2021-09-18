const startButton = document.querySelector('#start_button');

if(startButton) {
const tmpl = document.querySelector('#tmpl');
const tmplContent = tmpl.content.cloneNode(true);

startButton.onclick = () => {

    main.remove();
    document.body.append(tmplContent);

    $('html, body').animate({scrollTop:0}, 'slow');

    burger.style.zIndex = '-1';
    privacyPolicyButton.style.zIndex = '-1';

    quizContainer = document.querySelector('#quiz_container');
    
    const quizPages = document.querySelectorAll('.quiz-page');
    const form = document.querySelector('#form');
    const checkBoxes = document.querySelectorAll('.check-box');
    const checkeds = document.querySelectorAll('.checked');
    const getOptionsButton = document.querySelector('#get_options_button');
    const nextButtons = document.querySelectorAll('.next-button');
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

    if(window.innerWidth > 480) quizContainer.style.top = (window.innerHeight / 2) - (quizPages[0].offsetHeight / 2) + 'px';
    else quizContainer.style.top = '15vw';

    let currentIndex = 0;
    let question;
    let answer;
    let quizMap = new Map();
    let answersList = [];

    quizPages[currentIndex].style.opacity = '1';
    quizPages[currentIndex].style.zIndex = '2';

    quizContainer.onclick = (event) => {

        question = event.target.closest('.quiz-page').children[0].textContent;  

        if(currentIndex < quizPages.length - 1) {

            if(event.target.tagName === 'IMG' && event.target.className !== 'check-box' && event.target.className !== 'img') {
                answer = event.target.alt;
                quizMap.set(question, answer);
                
                goToNextPage();

                $('html, body').animate({scrollTop:0}, 'slow');
            }

            else if(event.target.tagName === 'INPUT' && event.target.type === 'radio') {
                answer = event.target.name;
                quizMap.set(question, answer);

                goToNextPage();
                
                $('html, body').animate({scrollTop:0}, 'slow');
            }

            else if(event.target.className === 'img') {
                quizPages[currentIndex].style.opacity = '0';
                quizPages[currentIndex].style.zIndex = '1';
        
                currentIndex+= 2;
        
                quizPages[currentIndex].style.opacity = '1';
                quizPages[currentIndex].style.zIndex = '2';

                $('html, body').animate({scrollTop:0}, 'slow');
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

                $('html, body').animate({scrollTop:0}, 'slow');
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

        burger.style.zIndex = '1';
        privacyPolicyButton.style.zIndex = '1';
    }

    $("#phone").mask("8(999) 999 99 99");

    $('#form').submit(function() {   
        quizContainer.remove();
        header.after(main);
		$.ajax({
			type: "POST",
			url: "https://svotok.ru/mail.php",
			data: $(this).serialize()
		}).done(function() {
            console.log("Данные отправлены на эл. почту");
            setTimeout(() => {
                main.remove();
                showSuccessMessage();
            }, 1000);

            setTimeout(() => {
                removeSuccessMessage();
                header.after(main);
                location.reload();
            }, 5000);
		}).fail(function() {
            console.log("Не удалось отправить данные на почту");
            setTimeout(() => {
                main.remove();
                showErrorMessage();
            }, 1000);

            setTimeout(() => {
                removeErrorMessage();
                header.after(main);
                location.reload();
            }, 3000);
		});
		    return false;
    });
    
    $('input[type="radio"]').on('click', function() {
        $('input[type="radio"]').removeAttr('checked'); 
        $(this).prop('checked', true); 

    });
}
}
