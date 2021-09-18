quizContainer.onclick = (event) => {
    if((event.target.tagName === 'IMG' && !event.target.closest('#close_button')) || event.target.tagName === 'FIGCAPTION' || event.target.tagName === 'LABEL' || event.target.className === 'text-answer') {
		goToNextPage();
		makeAnswersQuestionsList();
		countTotalPrice(price[currentAnswer]);
    }
	
	//document.querySelector('.total-price').textContent = totalPrice;
	document.querySelector('#price_data').value = totalPrice;
	document.querySelector('#mail_price').value = totalPrice;
}

telInput.oninput = () => {
	if((telInput.value[0] === '+' && telInput.value.length > 12) || (telInput.value[0] !== '+' && telInput.value.length > 11) || (telInput.value.length > 1 && isNaN(telInput.value)))
		telInput.value = telInput.value.slice(0, telInput.value.length - 1);
}	

backToMainButton.addEventListener('click', (event) => {
	var pattern = /^\+?[78]\d{10}$/;

	if(telInput.value === '') event.preventDefault();
	else if(pattern.test(telInput.value)) hideQuiz();
	
	mailPhone.value = telInput.value;
})

backToMainButton.addEventListener('click', () => {
	quizInfo.value = questions.map((question, index) => {
        return `Вопрос ${++quizCount}: ${question}, Ответ: ${answers[index]}`;
	});
	
	mail_quiz.value = quizInfo.value;
	quizCount = 0;
})
