$(document).ready(function() {
    var submitBtn = document.querySelector('.qsm-submit-btn');
    var quizForm = document.querySelector('.qsm-quiz-form');
	var splitter = String.fromCodePoint(8212);
	var siteName = document.querySelector('title').textContent.split(splitter)[0];
    var bitrixTitleInput = '<input type="hidden" name="DATA[TITLE]" value="Сайт ' + siteName + '">';
	var bitrixPhoneInput = '<input type="hidden" name="DATA[PHONE_WORK]" id="bitrix_phone" value="">';
	var bitrixQuizResultInput = '<input type="hidden" name="DATA[QUESTIONS_&_ANSWERS]" id="bitrix_quiz_result" value="">';
    var elems = quizForm.elements;
    var length = elems.length;
	
    elems[length - 7].setAttribute('placeholder', '+7(___) ___-____');
	
	quizForm.insertAdjacentHTML('beforeEnd', bitrixTitleInput);
	quizForm.insertAdjacentHTML('beforeEnd', bitrixPhoneInput);
	quizForm.insertAdjacentHTML('beforeEnd', bitrixQuizResultInput);
	
    $(quizForm).submit(function() {
		$.ajax({
			type: "POST",
			url: "https://stroyway.com/wp-content/themes/stroyway-theme/rest-api/rest.php",
			data: $(this).serialize()
		}).done(function() {
				console.log("Данные отправлены в Битрикс");
		});
	return false;
	});
});
