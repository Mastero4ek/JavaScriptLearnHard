let arr = ['25', '51', '47', '3', '10', '97', '42'];
 console.log(arr);

arr.forEach((i) => {
	if(i.startsWith('2') || i.startsWith('4')) {
		console.log(i);
	}
});


let n = 100;

nextNum://метка
for (let i = 2; i <= n; i++) {//выводим числа пока i <= 100

	for (let j = 2; j < i; j++) {//производим расчеты пока j < i 
		if (i % j == 0) continue nextNum;//возвращаемся к метке 
	}

	console.log(`${i} Делители этого числа: 1 и ${i}`);
}