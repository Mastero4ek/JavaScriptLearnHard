let num = 266219,
	numArray = num.toString().split('');

numArray.forEach((i) => {
	i = Number(i);
});

let numMultiply = numArray[0] * numArray[1] * numArray[2] * numArray[3] * numArray[4] * numArray[5];
console.log(numMultiply);

let numDegree = numMultiply ** 3,
	numDegreeArray = numDegree.toString().split('').slice(0, 2);

numDegreeArray.forEach((i) => {
	i = Number(i);
	console.log(i);
});