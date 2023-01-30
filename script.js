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
let lang = 'ru';
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