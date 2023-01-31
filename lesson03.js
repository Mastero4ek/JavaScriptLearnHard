let lang;
let langArr = [];

langArr['ru'] = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
langArr['en'] = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';

if(lang === 'ru') {
	console.log(langArr[lang]);
} else if(lang === 'en') {
	console.log(langArr[lang]);
}

switch(true) {
	case lang === 'ru':
		console.log(langArr[lang]);
		break

	case lang === 'en':
		console.log(langArr[lang]);
}

console.log(langArr[lang]);

let namePerson;

namePerson === 'Андрей' ? console.log('директор') : console.log('студент');
namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент');