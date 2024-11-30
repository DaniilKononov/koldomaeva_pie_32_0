function getRandomInRange(min, max) {									//функция, которая генерирует случайное число
	return Math.floor(Math.random() * (max - min +1) + min);			//в диапозоне от min до max
}

function createArray() {												//функция, которая создает массив случайных
	let n;																//чисел размерностью n
	n = document.getElementById("numberN").value;						//считываем введенную информацию со страницы
	n = Number(n);
	let arr = [];
	let result;
	if (Number.isInteger(n) && n > 0) {
		for (let i = 0; i < n; i++) {
			arr.push(getRandomInRange(1, 20));
		}
		result = arr;
	} else {
		result = 'Не возможно сгенерировать набор, так как введено не целое число больше 0';
	}
	document.getElementById("resultContainer").innerHTML=result;		//передаем результат в контейнер на html странице
}

function foundK() {														//функция, сравнивающая числа с K
	let k = document.getElementById("numberK").value;					//считываем введенную информацию со страницы
	k =Number(k);
	n = document.getElementById("numberN").value;						//считываем введенную информацию со страницы
	n =Number(n);
	let st;
	let flag = 0;
	let arr = document.getElementById("resultContainer").textContent;	//считываем введенную информацию со страницы
	let arr1 = arr.split(',')
	arr = [];
	for (let i=0; i<arr1.length; i++){
		arr.push(Number(arr1[i]))
	}
	console.log(arr);
	if (isNaN(arr[0])) {
		arr = [];
	}
	if (!(Number.isInteger(k))) {
		st = 'Введено не целое число K больше 0';
	} else {
		if (arr.length > 0) {
			for (let j = 0; j < n; j++) {
				if (arr[j] < k) {
					st = 'TRUE';
					flag = 1;
				}
			}
			if (flag == 0) {
				st = 'FALSE';
			}
		} else {
			st = 'Нельзя определить,так как набор не сгенерирован';
		}
	}
	document.getElementById("answerContainer").innerHTML=st;			//передаем результат в контейнер на html странице
}
