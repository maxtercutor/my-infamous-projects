$(document).ready(function() {

        var quizForm = document.querySelector('.quiz-page__form');

        $(quizForm).submit(function() {

			$.ajax({
				type: "POST",
				url: "https://stroyway.com/wp-content/themes/twentynineteen/kupolnie-doma/rest-api/rest.php",
				data: $(this).serialize()
			}).done(function() {
				alert("Ваш заказ принят в обработку");
			});
			$.ajax({
				type: "POST",
				url: "https://stroyway.com/wp-content/themes/twentynineteen/timber-house/rest-api/post.php",
				data: $(this).serialize()
			}).done(function() {
			});
			return false;
	});
});
