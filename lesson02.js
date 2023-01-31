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
