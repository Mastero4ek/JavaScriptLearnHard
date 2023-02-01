function checkString(str) {
	if(!str || typeof str !== 'string') {
		alert('Введите строку');
	}

	str = str.trim();

	if(str.length > 30) {
		str = str.slice(0, 30) + '...';
	}
	console.log(str)
}

checkString();