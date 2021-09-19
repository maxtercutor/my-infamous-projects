const quizImages = document.querySelectorAll('.quiz__answer-img');
const quizInputs = document.querySelectorAll('.quiz__answer-input');

for(let i = 0; i < quizImages.length; i++) {
	let quizImage = quizImages[i];
	
	quizImage.addEventListener('click', () => {
		quizInputs[i].checked = true;
	});
}
       
    const quizItems = document.querySelectorAll('.quiz__item');
    const quizAnswers = document.querySelectorAll('.quiz__answer');
    const quizButtons = document.querySelectorAll('.quiz__button');

    let checked = false;

    const labelYes = document.querySelector('.label-yes');
    const dimentionsInput = document.querySelector('.label-dimentions > input');


    dimentionsInput.addEventListener('change', function() {
        if(this.value.length > 3) labelYes.style.pointerEvents = 'auto';
        else labelYes.style.pointerEvents = 'none';
    });

    quizAnswers.forEach((answer) => {
        answer.onclick = (event) => {
            if(event.target.tagName === 'LABEL' || event.target.tagName === 'IMG') checked = true;
          }
    });

    for(let i = 0; i < quizButtons.length; i++) {
        let quizButton = quizButtons[i];

        quizButton.addEventListener('click', () => {
          if(checked) {
            if(quizItems[i].classList.contains('current')) quizItems[i].classList.remove('current');

            quizItems[++i].classList.add('current');

            checked = false;
          }
        })
    }

const fileLabel = document.querySelector('label[for="file"] > span');
const fileLabelValue = fileLabel.innerText;
const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', function() {
    
    if (this.files && this.files.length >= 1) {
        fileLabel.innerText = 'Файл успешно закачан...';
        labelYes.style.pointerEvents = 'auto';
    } else fileLabel.innerText = fileLabelValue;

});

if(window.innerWidth < 768) {
    //const quiz = document.querySelector('.quiz');

    //quiz.style.height = quizItems[0].offsetHeight + 'px';
    

    /*document.querySelectorAll('.quiz__image img').forEach((image) => image.src = './assets/images/quiz/img-1.jpg');

    const urls = [
        './assets/images/quiz/img-9.jpg',
        './assets/images/quiz/img-10.jpg',
        './assets/images/quiz/img-11.jpg',
        './assets/images/quiz/img-12.jpg',
        './assets/images/quiz/img-13.jpg',
        './assets/images/quiz/img-14.jpg',
        './assets/images/quiz/img-15.jpg',
        './assets/images/quiz/img-16.jpg',
    ];

    for(let i = 0; i < urls.length; i++) {
        document.querySelectorAll('.quiz__answer-img')[i].src = urls[i];
    } */

    const quizAnswersGroups = document.querySelectorAll('.quiz__answers');

    for(let i = 0; i < quizAnswersGroups.length; i++) {
        let quizAnswersGroup = quizAnswersGroups[i];

        quizAnswersGroup.addEventListener('click', (event) => {
            if((event.target.tagName === 'LABEL' || event.target.tagName === 'IMG') && !event.target.classList.contains('multiple')) {
                document.body.scrollIntoView({block: 'start', inline: 'center', behavior: 'smooth'});
                if(quizItems[i].classList.contains('current')) quizItems[i].classList.remove('current');

                quizItems[++i].classList.add('current');

                checked = false;
            }
        })
    }
}

    $('form.quiz').on('submit', sendForm);

    function sendForm(e) {
        e.preventDefault();
      
        var form = $(this),
            name = form.find('input[type="text"]'),
            tel = form.find('input[type="tel"]'),
            btn = form.find('button[type="submit"]');
          
        btn.attr('disabled', true).addClass('disabled');
      
        var data = form.serialize();
      
        $.ajax({
              url: 'https://petrobeton.com/wp-content/themes/petrobeton/includes/mail.php',
              type: 'POST',
              data: data,
        }).done(function(data) {
            console.log("Ok! " + data);
            quizItems[6].classList.remove('current');
      
            setTimeout(function() {
                quizItems[7].classList.add('current');
				
				$('.modal__overlay').on('click', function() {
					quizItems[7].classList.remove('current');
					quizItems[0].classList.add('current');
				});
            }, 2000);
      
            form.find('input').val('');
            btn.removeAttr('disabled').removeClass('disabled'); 
			
			document.querySelectorAll('input[type="radio"]').forEach((input) => input.checked = false);
			
        }).fail(function() {
            console.log("Error from mail!!!" + data);
            quizItems[6].classList.remove('current');
      
            setTimeout(function() {
                quizItems[8].classList.add('current');
                
                $('.modal__overlay').on('click', function() {
					quizItems[7].classList.remove('current');
					quizItems[0].classList.add('current');
				});
            }, 2000);
      
            btn.removeAttr('disabled').removeClass('disabled'); 
        });
    }
     