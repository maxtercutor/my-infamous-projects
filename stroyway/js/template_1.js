const
	main = document.querySelector('#main'),
	overlay = document.querySelector('#overlay'),
	progress = document.querySelector('#progress');
	privatePolicy = document.querySelector('#private_policy'),
	privatePolicyContainer = document.querySelector('#private_policy_container'),
	copyright = document.querySelector('#copyright'),

	quizContainer = document.querySelector('#quiz_container'),
	quizPages = document.querySelectorAll('.quiz-page'),
	openButton = document.querySelector('#open_button'),
	closeButton = document.querySelector('#close_button');     
	backToMainButton = document.querySelector('#back_to_main_button'),
	presentBox = document.querySelector('#present_box');
	nextButtons = document.querySelectorAll('.next-button'),
	prevButtons = document.querySelectorAll('.prev-button'),
	nextButtonsLength = nextButtons.length < quizPages.length ? nextButtons.length : nextButtons.length - 1,
	socialTel = document.querySelector('#social_tel'),
	currentIndex = 0,

	progressValue = 0,
	quizInfo = document.querySelector('#quiz_info'),
	telInput = document.querySelector('#tel_input'),
	nameInput = document.querySelector('#name_input'),
	mailPhone = document.querySelector('#mail_phone'),

	price = {
	"Вагонка": 600,
	"Пластик": 300,
	"Металлопрофиль": 400,
	"Гипсокартон": 400,
	"Мягкая кровля": 1300,
	"Металлочерепица": 1300,
	"Черепица": 1500,
	"Блок-хаус": 600,
	"Сайдинг": 300,
	"Бревно": 10000,
	"Брус": 10000,
	"Газоблок": 15000,
	"Кирпич": 20000,
	"Профилированный брус": 15000,
	"Каркасный": 12000
};

let 
	answers = [],
	questions = [],
	currentQuestion,
	currentAnswer,
	quizCount = 0,
	totalPrice = 8000,
	hidden = true;

privatePolicy.onclick = () => {
    if(hidden) {
		showPrivatePolicy();
    } else {
		hidePrivatePolicy();
    }
    hidden = !hidden; 
}
        
if(window.innerWidth <= 480) {
    privatePolicyContainer.onclick = () => {
		hidePrivatePolicy();
		
        hidden = !hidden;
    }
}
        
copyright.innerHTML = '&copy; ' + new Date().getFullYear() + ' «StroyWay»' + copyright.innerHTML;

if(window.innerWidth >= 1200) {
    quizContainer.style.top = (window.innerHeight / 2) - (quizContainer.clientHeight / 2) + 'px';
} else quizContainer.style.top = '1.5vw';

socialTel.style.zIndex = '3';
        
openButton.onclick = () => showQuiz();
        
closeButton.onclick = () => hideQuiz();