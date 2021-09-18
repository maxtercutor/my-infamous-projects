let choosen = false;

quizContainer.onclick = (event) => {
    if((event.target.tagName === 'IMG' && !event.target.closest('#close_button')) || event.target.tagName === 'FIGCAPTION' || event.target.tagName === 'LABEL' || event.target.className === 'text-answer' || event.target.tagName === 'INPUT') {
		choosen = true;
		
		makeAnswersQuestionsList();
		countTotalPrice(price[currentAnswer]);
		
		for(let i = 0; i < nextButtonsLength; i++) {
			const nextButton = nextButtons[i];
			
			nextButton.onclick = () => {
				if(choosen) goToNextPage();
				choosen = false;

			}
		} 
	}
}

for(let x = 0; x < prevButtons.length; x++) {
	const prevButton = prevButtons[x];
                
	prevButton.onclick = () => goToPreviousPage();
}

if(backToMainButton) backToMainButton.onclick = () => hideQuiz();

if(presentBox) presentBox.onclick = () => hideQuiz();

