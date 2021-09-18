let quizContainer;
const main = document.querySelector('#main');
const burger = document.querySelector('.burger');
const privacyPolicyButton = document.querySelector('#privacy_policy_button');

class Dialog {
    constructor(options) {
        this.options = options;
    }


    createElem() {
        this.elem = document.createElement('div');
        this.elem.className = this.options.className;

        this._createChildren();

        document.body.append(this.elem);
    }

    _createChildren() {
        const header = document.createElement('h2');
        header.className = this.options.headerClassName;
        header.textContent = this.options.headerText;
        this.elem.append(header);

        const content = document.createElement('div');
        content.className = this.options.contentClassName;
        content.innerHTML = this.options.contentText;
        this.elem.append(content);
    }

    createDialog() {
        this.dialog = document.createElement('div');
        this.dialog.className = this.options.dialogClassName;
        this.dialog.innerHTML = this.options.dialogContent;

        header.append(this.dialog);
    }
}

const ppOptions = {
    className: 'pp-container',
    headerClassName: 'h2--pp',
    headerText: 'Политика конфиденциальности',
    contentClassName: 'pp-content',
    contentText: '<p>Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.</p><p>Все лица, заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных. Под персональными данными Гражданина понимается нижеуказанная информация: общая информация (ФИО и адрес электронной почты, телефон, город проживания, дата рождения, личная информация, фото и видео с участием Гражданина). Гражданин, принимая настоящее Соглашение, выражает свою заинтересованность и полное согласие, что обработка персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.</p><p>Гражданин гарантирует: информация, им предоставленная, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена Гражданином в отношении себя лично.</p>'
}

const createPrivacyPolicy = () => {
    const privacyPolicy = new Dialog(ppOptions);

    privacyPolicy.createElem();

    setTimeout(() => {
        let ppContainer = document.querySelector('.pp-container');

        if(window.innerWidth > 480) {
            ppContainer.style.top = window.pageYOffset + (window.innerHeight / 2) - (ppContainer.offsetHeight / 2) + 'px';
        } else ppContainer.style.top = '15vw';
    });
}

const removePrivacyPolicy = () => {
    let ppContainer = document.querySelector('.pp-container');
    ppContainer.remove();
}

let ppOpened;

privacyPolicyButton.onclick = () => {
    if(!ppOpened && !quizContainer) {
        main.remove();
        createPrivacyPolicy();

        burger.style.zIndex = '-1';
    } else {
        removePrivacyPolicy();
        header.after(main);

        burger.style.zIndex = '1';
    }

    ppOpened = !ppOpened;
}

const menuOptions = {
    dialogClassName: 'mobile-menu',
    dialogContent: '<nav><ul class="menu menu--mobile"><li><a href="https://svotok.ru">О нас</a></li><li><a href="https://svotok.ru/otoplenie">Монтаж отопления</a></li><li><a href="https://svotok.ru/skvazhiny">Бурение скважин</a></li><li><a href="https://svotok.ru/vodopodgotovka">Водоподготовка</a></li><li><a href="https://svotok.ru/septiki">Монтаж септиков</a></li><li><a href="https://svotok.ru/prajs">Прайс лист</a></li><li><a href="https://svotok.ru/portfolio">Портфолио</a></li><li><a href="https://svotok.ru/otzyvy">Отзывы</a></li></ul></nav><div class="section business-info--mobile"><div class="business-info-text--mobile"><a href="tel:+7-499-322-49-38">+7 499 322 49 38</a></div><div class="business-info-text--mobile"><a href="mailto:mail@svotok.ru">mail@svotok.ru</a></div><div class="business-info-text--mobile">Ежедневно c 9:00 до 21:00</div></div>'
}

const createMobileMenu = () => {
    const mobileMenu = new Dialog(menuOptions);
   
    mobileMenu.createDialog();

    setTimeout(() => {
        let menuContainer = document.querySelector('.mobile-menu');
        menuContainer.style.marginTop = '4vw';
    }) 
}

const removeMobileMenu = () => {
    let menuContainer = document.querySelector('.mobile-menu');
    menuContainer.remove();
}

let menuOpened;

burger.onclick = () => {
    if(!menuOpened) {
        main.remove();
        createMobileMenu();

        privacyPolicyButton.style.zIndex = '-1';
    } else {
        removeMobileMenu();
        header.after(main);

        privacyPolicyButton.style.zIndex = '1';
    }

    menuOpened = !menuOpened;
}


const successOptions = {
    dialogClassName: 'success-message',
    dialogContent: '<h2>Ваша заявка успешно отправлена</h2>'
}

const showSuccessMessage = () => {
    const successMessage = new Dialog(successOptions);
   
    successMessage.createDialog();

    setTimeout(() => {
        let successMessageContainer = document.querySelector('.success-message');
    }) 
}

const removeSuccessMessage = () => {
    let successMessage = document.querySelector('.success-message');
    successMessage.remove();
}

const errorOptions = {
    dialogClassName: 'error-message',
    dialogContent: '<h2>Что-то пошло не так.<br>Побробуйте еще раз позже...</h2>'
}

const showErrorMessage = () => {
    const errorMessage = new Dialog(errorOptions);
   
    errorMessage.createDialog();

    setTimeout(() => {
        let errorMessageContainer = document.querySelector('.error-message');
    }) 
}

const removeErrorMessage = () => {
    let errorMessage = document.querySelector('.error-message');
    errorMessage.remove();
}



