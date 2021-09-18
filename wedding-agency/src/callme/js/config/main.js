{
	"button": {
		"show": true,
		"text": "Заказать обратный звонок"
	},
	"fields": [
		{
			"type": "text",
			"name": "Ваше имя",
			"placeholder": "Type your name",
			"required": true,
			"sms": true
		},
		{
			"type": "email",
			"name": "Ваш E-mail",
			"placeholder": "Type your e-mail",
			"required": false,
			"sms": true
		},
		{
			"type": "tel",
			"mask": "(999) 999-9999",
			"name": "Ваш телефон",
			"required": true,
			"sms": true
		},
		{
			"type": "textarea",
			"name": "Comments",
			"placeholder": "Комментарии...",
			"required": false,
			"sms": true
		},
		{
			"type": "select",
			"name": "Question",
			"sms": true,
			"options": [
				"Get details",
				"Make an order"
			]
		},
		{
			"type": "checkbox",
			"name": "Gift case",
			"caption": "You need to <a href='#'>read the rules</a> and check this",
			"required": false,
			"sms": true
		}
	],
	"form": {
		"template": "default",
		"title": "Заказать обратный звонок",
		"button": "Позвонить мне",
		"align": "center",
		"welcome": "Заполните форму и мы скоро вам перезвоним"
	},
	"alerts": {
		"yes": "Yes",
		"no": "No",
		"process": "Отправка запроса...",
		"success": "Ваш запрос успешно отправлен",
		"fails": {
			"required": "Пожалуйста заполните необходимые поля",
			"sent": "Прежнее сообщение отправлено меньше минуты назад"
		}
	},
	"captcha": {
		"show": true,
		"title": "Captcha",
		"error": "Captcha is wrong"
	},
	"license": {
		"key": "422033305436423430283020423433305122272633304820421830205426",
		"show": true
	},
	"mail": {
		"referrer": "Page referrer",
		"url": "URL",
		"linkAttribute": "Link attribute",
		"smtp": false
	},
	"animationSpeed": 150,
	"sms": {
		"send": false,
		"captions": true,
		"cut": true
	}
}
