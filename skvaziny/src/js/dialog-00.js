"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var quizContainer;
var main = document.querySelector('#main');
var burger = document.querySelector('.burger');
var privacyPolicyButton = document.querySelector('#privacy_policy_button');

var Dialog =
/*#__PURE__*/
function () {
  function Dialog(options) {
    _classCallCheck(this, Dialog);

    this.options = options;
  }

  _createClass(Dialog, [{
    key: "createElem",
    value: function createElem() {
      this.elem = document.createElement('div');
      this.elem.className = this.options.className;

      this._createChildren();

      document.body.append(this.elem);
    }
  }, {
    key: "_createChildren",
    value: function _createChildren() {
      var header = document.createElement('h2');
      header.className = this.options.headerClassName;
      header.textContent = this.options.headerText;
      this.elem.append(header);
      var content = document.createElement('div');
      content.className = this.options.contentClassName;
      content.innerHTML = this.options.contentText;
      this.elem.append(content);
    }
  }, {
    key: "createDialog",
    value: function createDialog() {
      this.dialog = document.createElement('div');
      this.dialog.className = this.options.dialogClassName;
      this.dialog.innerHTML = this.options.dialogContent;
      header.append(this.dialog);
    }
  }]);

  return Dialog;
}();

var ppOptions = {
  className: 'pp-container',
  headerClassName: 'h2--pp',
  headerText: 'Политика конфиденциальности',
  contentClassName: 'pp-content',
  contentText: '<p>Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.</p><p>Все лица, заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных. Под персональными данными Гражданина понимается нижеуказанная информация: общая информация (ФИО и адрес электронной почты, телефон, город проживания, дата рождения, личная информация, фото и видео с участием Гражданина). Гражданин, принимая настоящее Соглашение, выражает свою заинтересованность и полное согласие, что обработка персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p><p>Гражданин гарантирует: информация, им предоставленная, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена Гражданином в отношении себя лично.</p>'
};

var createPrivacyPolicy = function createPrivacyPolicy() {
  var privacyPolicy = new Dialog(ppOptions);
  privacyPolicy.createElem();
  setTimeout(function () {
    var ppContainer = document.querySelector('.pp-container');

    if (window.innerWidth > 480) {
      ppContainer.style.top = window.pageYOffset + window.innerHeight / 2 - ppContainer.offsetHeight / 2 + 'px';
    } else ppContainer.style.top = '15vw';
  });
};

var removePrivacyPolicy = function removePrivacyPolicy() {
  var ppContainer = document.querySelector('.pp-container');
  ppContainer.remove();
};

var ppOpened;

privacyPolicyButton.onclick = function () {
  if (!ppOpened && !quizContainer) {
    main.remove();
    createPrivacyPolicy();
    burger.style.zIndex = '-1';
  } else {
    removePrivacyPolicy();
    header.after(main);
    burger.style.zIndex = '1';
  }

  ppOpened = !ppOpened;
};

var menuOptions = {
  dialogClassName: 'mobile-menu',
  dialogContent: '<nav><ul class="menu menu--mobile"><li><a href="https://svotok.ru">О нас</a></li><li><a href="https://svotok.ru/otoplenie">Монтаж отопления</a></li><li><a href="https://svotok.ru/skvazhiny">Бурение скважин</a></li><li><a href="https://svotok.ru/vodopodgotovka">Водоподготовка</a></li><li><a href="https://svotok.ru/septiki">Монтаж септиков</a></li><li><a href="https://svotok.ru/prajs">Прайс лист</a></li><li><a href="https://svotok.ru/portfolio">Портфолио</a></li><li><a href="https://svotok.ru/otzyvy">Отзывы</a></li></ul></nav><div class="section business-info--mobile"><div class="business-info-text--mobile"><a href="tel:+7-499-322-49-38">+7 499 322 49 38</a></div><div class="business-info-text--mobile"><a href="mailto:mail@svotok.ru">mail@svotok.ru</a></div><div class="business-info-text--mobile">Ежедневно c 9:00 до 21:00</div></div>'
};

var createMobileMenu = function createMobileMenu() {
  var mobileMenu = new Dialog(menuOptions);
  mobileMenu.createDialog();
  setTimeout(function () {
    var menuContainer = document.querySelector('.mobile-menu');
    menuContainer.style.marginTop = '4vw';
  });
};

var removeMobileMenu = function removeMobileMenu() {
  var menuContainer = document.querySelector('.mobile-menu');
  menuContainer.remove();
};

var menuOpened;

burger.onclick = function () {
  if (!menuOpened) {
    main.remove();
    createMobileMenu();
    privacyPolicyButton.style.zIndex = '-1';
  } else {
    removeMobileMenu();
    header.after(main);
    privacyPolicyButton.style.zIndex = '1';
  }

  menuOpened = !menuOpened;
};

var successOptions = {
  dialogClassName: 'success-message',
  dialogContent: '<h2>Ваша заявка успешно отправлена</h2>'
};

var showSuccessMessage = function showSuccessMessage() {
  var successMessage = new Dialog(successOptions);
  successMessage.createDialog();
  setTimeout(function () {
    var successMessageContainer = document.querySelector('.success-message');
  });
};

var removeSuccessMessage = function removeSuccessMessage() {
  var successMessage = document.querySelector('.success-message');
  successMessage.remove();
};

var errorOptions = {
  dialogClassName: 'error-message',
  dialogContent: '<h2>Что-то пошло не так.<br>Побробуйте еще раз позже...</h2>'
};

var showErrorMessage = function showErrorMessage() {
  var errorMessage = new Dialog(errorOptions);
  errorMessage.createDialog();
  setTimeout(function () {
    var errorMessageContainer = document.querySelector('.error-message');
  });
};

var removeErrorMessage = function removeErrorMessage() {
  var errorMessage = document.querySelector('.error-message');
  errorMessage.remove();
};