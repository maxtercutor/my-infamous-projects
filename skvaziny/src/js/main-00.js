"use strict";

var startButton = document.querySelector('#start_button');

if (startButton) {
  var tmpl = document.querySelector('#tmpl');
  var tmplContent = tmpl.content.cloneNode(true);

  startButton.onclick = function () {
    main.remove();
    document.body.append(tmplContent);
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    burger.style.zIndex = '-1';
    privacyPolicyButton.style.zIndex = '-1';
    quizContainer = document.querySelector('#quiz_container');
    var quizPages = document.querySelectorAll('.quiz-page');
    var form = document.querySelector('#form');
    var checkBoxes = document.querySelectorAll('.check-box');
    var checkeds = document.querySelectorAll('.checked');
    var getOptionsButton = document.querySelector('#get_options_button');
    var nextButtons = document.querySelectorAll('.next-button');
    var inputs = document.querySelectorAll('.input--quiz');
    var quizInput = document.querySelector('#quiz');
    var nameInput = document.querySelector('#name');
    var phoneInput = document.querySelector('#phone');
    var submitButton = document.querySelector('#submit_button');

    var goToNextPage = function goToNextPage() {
      quizPages[currentIndex].style.opacity = '0';
      quizPages[currentIndex].style.zIndex = '1';
      currentIndex++;
      quizPages[currentIndex].style.opacity = '1';
      quizPages[currentIndex].style.zIndex = '2';
    };

    if (window.innerWidth > 480) quizContainer.style.top = window.innerHeight / 2 - quizPages[0].offsetHeight / 2 + 'px';else quizContainer.style.top = '15vw';
    var currentIndex = 0;
    var question;
    var answer;
    var quizMap = new Map();
    var answersList = [];
    quizPages[currentIndex].style.opacity = '1';
    quizPages[currentIndex].style.zIndex = '2';

    quizContainer.onclick = function (event) {
      question = event.target.closest('.quiz-page').children[0].textContent;

      if (currentIndex < quizPages.length - 1) {
        if (event.target.tagName === 'IMG' && event.target.className !== 'check-box' && event.target.className !== 'img') {
          answer = event.target.alt;
          quizMap.set(question, answer);
          goToNextPage();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        } else if (event.target.tagName === 'INPUT' && event.target.type === 'radio') {
          answer = event.target.name;
          quizMap.set(question, answer);
          goToNextPage();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        } else if (event.target.className === 'img') {
          quizPages[currentIndex].style.opacity = '0';
          quizPages[currentIndex].style.zIndex = '1';
          currentIndex += 2;
          quizPages[currentIndex].style.opacity = '1';
          quizPages[currentIndex].style.zIndex = '2';
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }
      }
    };

    var _loop = function _loop(i) {
      var checkBox = checkBoxes[i];
      var flag = false;

      checkBox.onclick = function (event) {
        var displayType = flag ? 'none' : 'block';
        checkeds[i].style.display = displayType;
        flag = !flag;
        question = event.target.closest('.quiz-page').children[0].textContent;
        answer = event.target.alt;
        if (flag) answersList.push(answer);else answersList.pop();
        var buttonBefore = document.querySelector('.before');
        buttonBefore.classList.add('animated');
        setTimeout(function () {
          buttonBefore.classList.remove('animated');
        }, 1100);

        getOptionsButton.onclick = function () {
          if (flag) {
            quizMap.set(question, answersList);
            quizPages[currentIndex].style.opacity = '0';
            quizPages[currentIndex].style.zIndex = '1';
            currentIndex += 5;
            quizPages[currentIndex].style.opacity = '1';
            quizPages[currentIndex].style.zIndex = '2';
            $('html, body').animate({
              scrollTop: 0
            }, 'slow');
          }

          return false;
        };
      };
    };

    for (var i = 0; i < checkBoxes.length; i++) {
      _loop(i);
    }

    var _loop2 = function _loop2(_i) {
      var nextButton = nextButtons[_i];
      var pattern = /^\d+$/;

      nextButton.onclick = function (event) {
        question = event.target.closest('.quiz-page').children[0].textContent;
        answer = inputs[_i - 1].value;

        if (pattern.test(inputs[_i - 1].value)) {
          quizMap.set(question, answer);
          goToNextPage();
          $('html, body').animate({
            scrollTop: 0
          }, 'slow');
        }

        return false;
      };
    };

    for (var _i = 1; _i < nextButtons.length; _i++) {
      _loop2(_i);
    }

    submitButton.onclick = function () {
      var quizResult = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = quizMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var questionAndAnmswer = _step.value;
          quizResult += "\u0412\u043E\u043F\u0440\u043E\u0441: ".concat(questionAndAnmswer[0], "\n\u041E\u0442\u0432\u0435\u0442: ").concat(questionAndAnmswer[1], "; \n");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      quizInput.value = quizResult;
      burger.style.zIndex = '1';
      privacyPolicyButton.style.zIndex = '1';
    };

    $("#phone").mask("8(999) 999 99 99");
    $('#form').submit(function () {
      quizContainer.remove();
      header.after(main);
      $.ajax({
        type: "POST",
        url: "https://svotok.ru/mail.php",
        data: $(this).serialize()
      }).done(function () {
        console.log("Данные отправлены на эл. почту");
        setTimeout(function () {
          main.remove();
          showSuccessMessage();
        }, 1000);
        setTimeout(function () {
          removeSuccessMessage();
          header.after(main);
          location.reload();
        }, 5000);
      }).fail(function () {
        console.log("Не удалось отправить данные на почту");
        setTimeout(function () {
          main.remove();
          showErrorMessage();
        }, 1000);
        setTimeout(function () {
          removeErrorMessage();
          header.after(main);
          location.reload();
        }, 3000);
      });
      return false;
    });
    $('input[type="radio"]').on('click', function () {
      $('input[type="radio"]').removeAttr('checked');
      $(this).prop('checked', true);
    });
  };
}