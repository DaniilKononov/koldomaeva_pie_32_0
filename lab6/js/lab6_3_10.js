let myArray = {
};

function getRandomInRange(min, max) {
	return Math.floor(Math.random() * (max - min +1) + min);
}

function createArray() {
	let n;
	n = document.getElementById("numberN").value;
	n = Number(n);
	let m;
	m = document.getElementById("numberM").value;
	m = Number(m);
	let mas = [];
	let result;
	if (Number.isInteger(n) && Number.isInteger(m) && n > 0 && m > 0) {
		for (let i=0; i < n; i++) {
			let tmp = [];
			for (let j = 0; j < m; j++) {
				tmp.push(getRandomInRange(1, 20));
			}
			console.log(tmp);
			mas.push(tmp);
		} 
		console.log(mas);
		result = mas;
	} else {
		result = 'Не возможно сгенерировать массив, так как введено не целое число больше 0';
	}
	return result;
	console.log(result);
}

function outputArray(mas, cont) {
	document.getElementById(cont).innerHTML='';
	console.log(mas[0][0]);
	if (Number.isInteger(mas[0][0])) {
		for (i=0; i < mas.length; i++) {
			for (j=0; j < mas[i].length; j++) {
				if (mas[i][j] < 10) {
					document.getElementById(cont).innerHTML += '&nbsp' + '&nbsp' + mas[i][j] + '&nbsp';
				} else {
					document.getElementById(cont).innerHTML += mas[i][j] + '&nbsp';
				}
			}
			document.getElementById(cont).innerHTML += '<br>';
		}
	} else {
		document.getElementById(cont).innerHTML=mas;
	}
}

function getArray() {
	myArray.arr = createArray();
	outputArray(myArray.arr, "resultContainer");
}

function getColumns() {
	document.getElementById("answerContainer").innerHTML='';
	if (Number.isInteger(myArray.arr[0][0])) {
		for (let j=0; j<myArray.arr[0].length; j=j+2) {
			document.getElementById("answerContainer").innerHTML += (j+1) + ' столбец: ';
			for (let i=0; i<myArray.arr.length; i++) {
				document.getElementById("answerContainer").innerHTML += myArray.arr[i][j] + ' ';
			}
			document.getElementById("answerContainer").innerHTML += '<br>';
		}
	} else {
		document.getElementById("answerContainer").innerHTML='Нельзя вывести элементы, так как массив не сгенерирован';
	}
}

function mirrorArray(){
	if (Number.isInteger(myArray.arr[0][0])) {
		myArray.revArr = JSON.parse(JSON.stringify(myArray.arr));
		n = myArray.revArr.length;
		m = myArray.revArr[0].length;
		for (let i=0; i < n; i++) {
			for (let j=0; j < m/2; j++) {
				[myArray.revArr[i][j], myArray.revArr[i][m-j-1]] = [myArray.revArr[i][m-j-1], myArray.revArr[i][j]];
			}
		}
		outputArray(myArray.revArr, "masContainer");
		for (let i=0; i<n; i++) {
			console.log(myArray.revArr[i]);
		}
		for (let i=0; i<n; i++) {
			console.log(myArray.arr[i]);
		}
		console.log(myArray);
	} else {
		document.getElementById("masContainer").innerHTML='Нельзя вывести массив, так как изначально он не был сгенерирован';
	}	
}