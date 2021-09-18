const showQuiz = () => {
	quizContainer.classList.add('open');
	quizPages[currentIndex].classList.add('visible');
	main.classList.add('hidden');
	
	socialTel.style.zIndex = '1';
	privatePolicy.style.zIndex = '1';
            
    if(overlay) overlay.style.display = 'block';
	
	if(window.innerWidth <= 480) quizPages[currentIndex].style.display = 'flex';
	
	if(window.innerWidth <= 1200) document.body.scrollIntoView();
}

const hideQuiz = () => {
	quizContainer.classList.remove('open');
	main.classList.remove('hidden');
	
	socialTel.style.zIndex = '3';
	privatePolicy.style.zIndex = '3';
	       
    if(overlay) overlay.style.display = 'none';
};

const goToNextPage = () => {
	quizPages[currentIndex].classList.add('invisible');
    currentIndex++;
	quizPages[currentIndex].classList.remove('invisible');
	quizPages[currentIndex].classList.add('visible');
	
	if(progress) {
		var progressRate = 100 / (quizPages.length - 1);
		progressValue+= progressRate;
		progress.setAttribute('value', progressValue);
	}
        
    if(window.innerWidth <= 480) {
		document.body.scrollIntoView();
		quizPages[currentIndex].style.display = 'flex';
		quizPages[currentIndex - 1].style.display = 'none';
	}
};

const goToPreviousPage = () => {
	quizPages[currentIndex].classList.add('invisible');
    currentIndex--;
	quizPages[currentIndex].classList.remove('invisible'); 
	quizPages[currentIndex].classList.add('visible'); 
	
	if(window.innerWidth <= 480) quizPages[currentIndex].style.display = 'flex';		
};

const makeAnswersQuestionsList = () => {
	currentQuestion = event.target.closest('.quiz-page').children[0].textContent;
    currentAnswer = event.target.tagName === 'IMG' ? event.target.alt : event.target.textContent;
    questions.push(currentQuestion);
    answers.push(currentAnswer);
};

const countTotalPrice = (val) => {
	if(val !== undefined) totalPrice += val;
	else totalPrice += 0;
};

const showPrivatePolicy = () => {
	privatePolicyContainer.classList.add('open');
    main.style.zIndex = '1';
            
    if(overlay) overlay.style.display = 'block';
		
    privatePolicy.style.zIndex = '3';

	if(window.innerWidth <= 480) {
		document.body.scrollIntoView();
		privatePolicyContainer.style.display = 'block';
	}
		
	if(window.innerWidth >= 481) 
		privatePolicyContainer.style.top = (window.innerHeight / 2) - (privatePolicyContainer.clientHeight / 2) + window.pageYOffset + 'px';
};

const hidePrivatePolicy = () => {
	privatePolicyContainer.classList.remove('open');
    main.style.zIndex = '3';
            
    if(overlay) overlay.style.display = 'none';

	if(window.innerWidth <= 480) privatePolicyContainer.style.display = 'none';
};

const showSuccessMessage = () => {
	main.classList.add('hidden');
	var successMessage = document.createElement('div');
	successMessage.className = 'success-message';
	successMessage.innerHTML = '<p style="text-align: center;">Отлично!<br>Мы подобрали для Вас лучшее предложение.<br>Наш специалист свяжется с Вами в ближайшее время.</p>';
	document.body.appendChild(successMessage);
	
	setTimeout(() => {
		document.body.removeChild(successMessage);
		main.classList.remove('hidden');
		
		copyright.style.visibility = '';
		privatePolicy.style.visibility = '';
		document.querySelector('.made-with-love').style.visibility = '';
	}, 5000);
	
	if(window.innerWidth >= 1200) {
		successMessage.style.top = (window.innerHeight / 2) - (successMessage.clientHeight / 2) + 'px';
	} else successMessage.style.top = '1.5vw';
	
	if(window.innerWidth <= 1200) document.body.scrollIntoView();
};

const showErrorMessage = () => {
	main.classList.add('hidden');
	var errorMessage = document.createElement('div');
	errorMessage.className = 'error-message';
	errorMessage.innerHTML = '<p style="text-align: center;">Не получилось !!!<br>Что-то пошло не так.<br>Повторите попытку чуть позже.</p>';
	document.body.appendChild(errorMessage);
	
	setTimeout(() => {
		document.body.removeChild(errorMessage);
		main.classList.remove('hidden');
		
		copyright.style.visibility = '';
		privatePolicy.style.visibility = '';
		document.querySelector('.made-with-love').style.visibility = '';
	}, 5000);
	
	if(window.innerWidth >= 1200) {
		errorMessage.style.top = (window.innerHeight / 2) - (errorMessage.clientHeight / 2) + 'px';
	} else errorMessage.style.top = '1.5vw';
	
	if(window.innerWidth <= 1200) document.body.scrollIntoView();
};