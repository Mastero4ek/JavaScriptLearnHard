//lesson02
const num = 266219,
	  numArray = num.toString().split('');//превращаем в строку + каждый символ добавляем в массив

numArray.forEach((i) => {
	i = Number(i);//каждый элемент массива превращаем в число
});

const numMultiply = numArray.reduce((acc, rec) => acc * rec);//перемножаем каждый элемент массива
console.log(numMultiply);

const numDegree = numMultiply ** 3,//возводим в 3 степень
	  numDegreeArray = numDegree.toString().split('').slice(0, 2);//переводим в строку + каждый символ добавляем в массив + отрезаем первые два элемента

numDegreeArray.forEach((i) => {
	i = Number(i);//каждый элемент массива превращаем в число
	console.log(i);
});

//lesson03
let lang;

if(lang === 'ru') {
	console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if(lang === 'en') {
	console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch(true) {
	case lang === 'ru':
		console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
		break

	case lang === 'en':
		console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

let langArr = [];

langArr['ru'] = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
langArr['en'] = 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
console.log(langArr[lang]);

let namePerson;

namePerson === 'Андрей' ? console.log('директор') : console.log('студент');
namePerson === 'Александр' ? console.log('преподаватель') : console.log('студент');