'use strict'

const date1 = document.querySelector('.date1'),
	date2 = document.querySelector('.date2');

setInterval(function() {
	const now = new Date();

	let message = '',
		year = now.getFullYear(),
		month = now.getMonth(),
		week = now.getDay(),
		day = now.getDate(),
		hour = now.getHours(),
		minute = now.getMinutes(),
		second = now.getSeconds();

	const weeks = [
		{day: 'Понедельник'},
		{day: 'Вторник'},
		{day: 'Среда'},
		{day: 'Четверг'},
		{day: 'Пятница'},
		{day: 'Суббота'},
		{day: 'Воскресенье'}
		];

	const months = [
		{month: 'Января'},
		{month: 'Февраля'},
		{month: 'Марта'},
		{month: 'Апреля'},
		{month: 'Мая'},
		{month: 'Июня'},
		{month: 'Июля'},
		{month: 'Августа'},
		{month: 'Сентября'},
		{month: 'Октября'},
		{month: 'Ноября'},
		{month: 'Декабря'},
		];

	const calculateDay = (6 + week) % 7;

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

	message += 'Сегодня ' + weeks[calculateDay].day.bold() + ', ' + day + ' ' + months[month].month.bold() + ' ' + year + ' года, ' + timeHours(hour, ' час').italics() + timeMinSec(minute, ' минут').italics() + timeMinSec(second, ' секунд').italics();

	date1.innerHTML = message;
	date2.innerHTML = now.toLocaleString().replace(',', ' -');
}, 1000);