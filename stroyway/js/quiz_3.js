quizContainer.onclick = (event) => {
    if((event.target.tagName === 'IMG' && !event.target.closest('#close_button')) || event.target.tagName === 'FIGCAPTION' || event.target.tagName === 'LABEL') {
		//goToNextPage();
		makeAnswersQuestionsList();
		countTotalPrice(price[currentAnswer]);
    }
	
	//document.querySelector('.total-price').textContent = totalPrice;
	document.querySelector('#price_data').value = totalPrice;
	document.querySelector('#mail_price').value = totalPrice;
}

document.querySelector('#next_button').onclick = () => goToNextPage();

telInput.oninput = () => {
	if((telInput.value[0] === '+' && telInput.value.length > 12) || (telInput.value[0] !== '+' && telInput.value.length > 11) || (telInput.value.length > 1 && isNaN(telInput.value)))
		telInput.value = telInput.value.slice(0, telInput.value.length - 1);
}	

telInput.oninvalid = (event) => event.preventDefault();

telInput.addEventListener('keydown', (event) => {
    var namePattern = /^[А-Яа-я]+\s?[А-Яа-я]*$/;
    var telPattern = /^\+?[78]\d{10}$/;
    
    if((event.key === 'Enter' && telInput.value === '') || (event.key === 'Enter' && nameInput.value === '')) event.preventDefault();
    else if(event.key === 'Enter' && telPattern.test(telInput.value) && namePattern.test(nameInput.value)) {
        quizInfo.value = questions.map((question, index) => {
        return `Вопрос ${++quizCount}: ${question}, Ответ: ${answers[index]}`;
	});
	
	mail_quiz.value = quizInfo.value;
	quizCount = 0;
    }
});

backToMainButton.onclick = () => location.reload();
