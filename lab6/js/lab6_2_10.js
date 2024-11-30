let myArray = {
};

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min +1) + min);
}

function createArray() {
	let n;
	n = document.getElementById("numberN").value;
	n = Number(n);
	let arr = [];
	let result;
	if (Number.isInteger(n) && n > 0 && ((n % 2) == 0)) {
		for (let i = 0; i < n; i++) {
			arr.push(getRandomInRange(1, 20));
		}
		result = arr;
	} else {
		result = 'Не возможно сгенерировать набор, так как введено не целое четное число больше 0';
	}
	return result;
	console.log(result);
}

function outputArray(mas, cont) {
	document.getElementById(cont).innerHTML='';
	console.log(mas);
	if (Number.isInteger(mas[0])) {
		for (i=0; i < mas.length; i++) {
			document.getElementById(cont).innerHTML += mas[i] + '&nbsp'+ '&nbsp';
		}
	} else {
		document.getElementById(cont).innerHTML=mas;
	}
}

function getArray() {
	myArray.arr = createArray();
	outputArray(myArray.arr, "resultContainer");
}

function minNumber(mas) {
	minimum = mas[0];
	for (i=0; i<mas.length; i++) {
		if (mas[i] < minimum) {
			minimum = mas[i];
		}
	}
	return minimum;
}

function maxNumber(mas) {
	maximum = mas[0];
	for (i=0; i<mas.length; i++) {
		if (mas[i] > maximum) {
			maximum = mas[i];
		}
	}
	return maximum;
}

function changeNumbers(mas, i, j) {
	console.log(mas[i]);
	[mas[i], mas[j]] = [mas[j], mas[i]];
	console.log(mas[i]);
	return mas;
}

function changeArray() {
	if (Number.isInteger(myArray.arr[0])) {
		myArray.changeArr = JSON.parse(JSON.stringify(myArray.arr));
		myArray.changeArr = changeNumbers(myArray.changeArr, myArray.changeArr.indexOf(minNumber(myArray.changeArr)), myArray.changeArr.indexOf(maxNumber(myArray.changeArr)));
		outputArray(myArray.changeArr, "masContainer");
		console.log(myArray.changeArr);
		console.log(myArray.arr);
		console.log(myArray);
	} else {
		document.getElementById("masContainer").innerHTML='Нельзя вывести массив, так как изначально он не был сгенерирован';
	}	
}

function outputElements() {
	document.getElementById("answerContainer").innerHTML='';
	if (isNaN(myArray.arr[0])) {
		document.getElementById("answerContainer").innerHTML='Нельзя вывести элементы, так как массив не сгенерирован';
	} else {
		for (i=1; i<myArray.arr.length; i=i+2) {
			document.getElementById("answerContainer").innerHTML += myArray.arr[i] + '&nbsp'+ '&nbsp';
		}
	}
}
