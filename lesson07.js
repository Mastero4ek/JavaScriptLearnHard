'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	  calculateDay = (6 + new Date().getDay()) % 7,
	  today = week[calculateDay].bold(),
	  changeDay = week.splice(calculateDay, 1, today),
	  weekend = week.splice(5, 7),
	  
	  body = document.querySelector('body');

body.insertAdjacentHTML('afterbegin', `${week.join('<br>')}` + '<br>' + `${weekend.join('<br>').italics()}`);

