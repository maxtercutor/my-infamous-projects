document.body.onload = function () {
  const copyright = document.querySelector('#copyright');
  const openpp = document.querySelector('#open__pp');
  const closePpbutton = document.querySelector('#close_ppbutton');
  const opentest = document.querySelector('#open_btn');
  const closeTestbutton = document.querySelector('#close_button');
  const toMainButton = document.querySelector('#tomain_button');
  const privatePolicy = document.querySelector('#private-policy');
  const overlay = document.querySelector('#overlay');
  const quiz = document.querySelector('#quiz');
  const quizPages = document.querySelectorAll('.quiz-page');
  const quizForms = document.querySelectorAll('.quizForm');
  const finalForm = document.querySelector('.final-quiz-page');
  const quizInfo = document.querySelector('#quiz_info');
  const nextButtons = document.querySelectorAll('.quiz-page__btn button');
  const answers = document.querySelectorAll('.quiz-answer__radio');
  const submitButton = document.querySelector('.quiz__submit-btn');
  const postButton = document.querySelector("input[type=tel]");
  const mainTitle = document.querySelector('.main__title');
  const mainSubtitle = document.querySelector('.main__subtitle');
  const mainButton = document.querySelector('.main__btn');
  const mainFeatures = document.querySelector('.main__features');
  const mainSocial = document.querySelector('.main__social');
  const main = document.querySelector('.main');
  const mainBg = main.style.backgroundImage;
  const questions = document.querySelectorAll('.quiz-page__title');
  const progress = document.querySelector('progress');
  const progressBar = document.querySelector('.progress-bar');
  const quizProgressBar = document.querySelector('.quiz__progress');
  let currentIndex = 0;
  let progressBarWidth = 0;
  const width = document.documentElement.clientWidth;
  let price = 10000;
  const answersArray = [];
  const questionsArray = [];

  for (let x = 0; x < questions.length - 2; x++) {
    	questionsArray.push(questions[x].textContent);
  }

  quizPages[0].style.display = 'block';
  copyright.innerHTML = new Date().getFullYear();

  openpp.onclick = () => {
    privatePolicy.style.display = 'block';
    overlay.style.zIndex = '2';
    window.scrollTo(0,0);
  };

  closePpbutton.onclick = () => {
	    privatePolicy.style.display = 'none';
      overlay.style.zIndex = '-1';
      window.scrollTo(0,0);
  };

  opentest.onclick = () => {
    mainTitle.style.display = 'none';
    mainSubtitle.style.display = 'none';
    mainButton.style.display = 'none';
    mainFeatures.style.display = 'none';
    mainSocial.style.display = 'none';
    overlay.style.display = 'none';
    main.appendChild(quiz);
    main.style.backgroundImage = 'none';
	  quiz.style.display = 'block';
    window.scrollTo(0,0);
  };

  closeTestbutton.onclick = () => {
    mainTitle.style.display = 'block';
    mainSubtitle.style.display = 'block';
    mainButton.style.display = 'block';
    mainFeatures.style.display = 'block';
    overlay.style.display = 'block';
    window.scrollTo(0,0);
    main.style.backgroundImage = mainBg;
    if (width <= 480) {
      mainSocial.style.display = 'block';
    }

	  quiz.style.display = 'none';
  };

  window.addEventListener('keydown', (event) => {
	    if (event.keyCode === 27) {
	        if (quiz.style.display == 'block') {
		        mainTitle.style.display = 'block';
		        mainSubtitle.style.display = 'block';
		        mainButton.style.display = 'block';
            mainFeatures.style.display = 'block';
            main.style.backgroundImage = mainBg;
            overlay.style.display = 'block';
		        if (width <= 580) {
		          mainSocial.style.display = 'block';
		        }

			    quiz.style.display = 'none';
	        }

	    	if (privatePolicy.style.display == 'block') {
	    	    privatePolicy.style.display = 'none';
            overlay.style.display = 'block';
	      }
	    }
  });

  postButton.onfocus = () => {
    const quizContent = questionsArray.map((question, index) => `\n ????????????-${index + 1}: ${question}??????????: ${answersArray[index]}`);
    quizInfo.value = quizContent;
    document.querySelector('#price_data').value = price;
    document.querySelector('#post_price').value = price;
    document.querySelector('#post_quiz').value = quizContent;
  };

  submitButton.addEventListener('click', (event) => {
    document.querySelector('#post_phone').value = document.querySelector('#quiz_phone').value;
  });

  finalForm.addEventListener('submit', () => {
    closeTestbutton.style.display = 'none';
    quizProgressBar.style.display = 'none';
    quizPages[5].style.display = 'none';
	  quizPages[6].style.display = 'block';
  });

  toMainButton.onclick = () => {
    mainTitle.style.display = 'block';
    mainSubtitle.style.display = 'block';
    mainButton.style.display = 'block';
    mainFeatures.style.display = 'block';
    overlay.style.display = 'block';
    main.style.backgroundImage = mainBg;
    if (width <= 480) {
      mainSocial.style.display = 'block';
    }
	    quiz.style.display = 'none';
	    quizPages[0].style.display = 'none!important';
  };

  for (let i = 0; i < nextButtons.length - 1; i++) {
	    const nextButton = nextButtons[i];

	    nextButton.onclick = function () {
    	setTimeout(() => {
        quizPages[currentIndex].style.display = 'none';
	        currentIndex++;
        quizPages[currentIndex].style.display = 'block';
	    }, 400);
	    };
  };


  for (let j = 0; j < quizForms.length; j++) {
	    const quizForm = quizForms[j];

    quizForm.onchange = (e) => {
      if (e.target.tagName.toLowerCase() === 'input' && e.target.getAttribute('type') === 'radio') {
        answer = e.target.value;
        price += Number(e.target.getAttribute('data-price'));
        answersArray.push(answer);
        document.querySelector('.quiz-page__btn button').click();
        progress.value += 20;
        progressBarWidth += 20;
        progressBar.setAttribute("style", `width: ${progressBarWidth}%;`);
        progressBar.style.width = `${progressBarWidth} %;`;
        window.scrollTo(0,0);
      }
    };
  };


  $('input[type="tel"]').mask('+7(999) 999-9999');
};
