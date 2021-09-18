document.body.onload = function() {
	var answers = document.querySelectorAll('.quiz_section');
	var inputs = document.querySelectorAll('input');
	var questions = document.querySelectorAll('.mlw_qmn_question');
	var nextBtn = document.querySelector('.qsm-next');
	
	var answer = '';
	var answersArray = [];
	var questionsArray = [];
	var count = 0;
		
	var quizForm = document.querySelector('.qsm-quiz-form');
    var elems = quizForm.elements;
    var length = elems.length;
		
	var quizInfo = document.querySelector('#quiz_info');
		
	for(var x = 0; x < questions.length - 1; x++) {
        questionsArray.push(questions[x].textContent);
	}
		
	for(var j = 0; j < (inputs.length - 9); j++) {
        var input = inputs[j];
        
        input.onchange = function() {
            answer = this.value;
        }
        nextBtn.onclick = () => {
            answersArray.push(answer);
            count++;
            
           if(count === answers.length - 1) {
               questionsArray.length = answers.length - 1;
           
				var quizContent = questionsArray.map((question, index) => {
					return 'ВОПРОС-' + (index + 1) + ': ' + question + 'ОТВЕТ: ' + answersArray[index];
				})
			}
			quizInfo.value = quizContent;
        }
    }
}

