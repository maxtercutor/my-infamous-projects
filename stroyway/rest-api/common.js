$(document).ready(function() {
    $('#form').submit(function() {   
		$.ajax({
			type: "POST",
			url: "https://stroyway.com/wp-content/themes/stroyway-theme/rest-api/rest.php",
			data: $(this).serialize()
		}).done(function() {
			console.log("Данные отправлены в Битрикс");
			if(!document.querySelector('.final-page')) showSuccessMessage();
            else goToNextPage();
		}).fail(function() {
			console.log("Не удалось отправить данные в Битрикс");
			if(!document.querySelector('.final-page')) showErrorMessage();
            else {
                document.querySelector('.final-page-text').innerHTML = 'Не получилось !!!<br>Что-то пошло не так.<br>Повторите попытку чуть позже.';
                goToNextPage();
            }
		});
		$.ajax({
			type: "POST",
			url: "https://stroyway.com/wp-content/themes/stroyway-theme/rest-api/mail.php",
			data: $(this).serialize()
		}).done(function() {
			console.log("Данные отправлены на эл. почту");
		}).fail(function() {
			console.log("Не удалось отправить данные на почту");
		});
		return false;
	});
});