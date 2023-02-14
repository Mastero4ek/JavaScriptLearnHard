'use strict'

const date1 = document.querySelector('.date1'),
	date2 = document.querySelector('.date2');

setInterval(function() {
	const now = new Date();
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	let message1 = '',
		message2 = '',
		messageEdit = '',
		hour = now.getHours(),
		minute = now.getMinutes(),
		second = now.getSeconds();

	const timeHours = function(num, txt) {
		num = (num < 10) ? '0' + num : num;

		if(num == 0 || (num >= 5 && num <= 20) || (num >= 25 && num <= 30) || (num >= 35 && num <= 40) || (num >= 45 && num <= 50) || (num >= 55 && num <= 59)) {
			num = num + txt + 'ов';
		} else
		if(num == 1 || num == 21 || num == 31 || num == 41 || num == 51) {
			num = num + txt;
		} else
		if((num >= 2 && num <= 4) || (num >= 22 && num <= 24) || (num >= 32 && num <= 34) || (num >= 42 && num <= 44) || (num >= 52 && num <= 54)) {
			num = num + txt + 'а';
		}

		return num + ' ';
	}

	const timeMinSec = function(num, txt) {
		num = (num < 10) ? '0' + num : num;

		if(num == 0 || (num >= 5 && num <= 20) || (num >= 25 && num <= 30) || (num >= 35 && num <= 40) || (num >= 45 && num <= 50) || (num >= 55 && num <= 59)) {
			num = num + txt;
		} else
		if(num == 1 || num == 21 || num == 31 || num == 41 || num == 51) {
			num = num + txt + 'а';
		} else
		if((num >= 2 && num <= 4) || (num >= 22 && num <= 24) || (num >= 32 && num <= 34) || (num >= 42 && num <= 44) || (num >= 52 && num <= 54)) {
			num = num + txt + 'ы';
		}

		return num + ' ';
	}

	messageEdit = now.toLocaleString('ru', options)[0].toUpperCase() +
				  now.toLocaleString('ru', options).slice(1);

	message1 += 'Сегодня ' +
				messageEdit.replace('.', 'ода, ') +
				timeHours(hour, ' час').italics() +
				timeMinSec(minute, ' минут').italics() +
				timeMinSec(second, ' секунд').italics();

	message2 += now.toLocaleString().replace(',', ' -');

	date1.innerHTML = message1;
	date2.innerHTML = message2;

}, 1000);

