function solveEquations() {
	let x = Number(prompt('Введите x: '));							//ввод x с преобразование в число
	let a = Number(prompt('Введите коэффициент a: '));				//ввод коэффициента a с преобразование в число
	let b =Number(prompt('Введите коэффициент b: '));				//ввод коэффициента b с преобразование в число
	let y;															//объявление переменной y
	const img = document.createElement('img');						//cоздаем элемент изображения
		
	if (isNaN(x) || isNaN(a) || isNaN(b)){							//проверка, является ли числом
		alert('Введено не число. Попробуйте снова');				//если не число, то происходит
		solveEquations();											//вызов этой же функции
	} else {
		switch (x) {
		case 1:														//если x=1 
			if ((a + Math.abs(x)) < 0){								//проверка отсутствия решения при введенных данных
				alert('Система не имеет решений');					//если условие верно, нет решений
			} else {												//если нет
				y = 1 + Math.sqrt(a + Math.abs(x));					//y вычиляется по первой формуле из задания
			}
			img.src = './img/formula3_1.png';						//устанавливаем путь к изображению
			break;
		case 7:														//если x=7
			y = 2 + (a * x)**2 + Math.exp(x);						//y вычиляется по второй формуле из задания
			img.src = './img/formula4_2.png';						//устанавливаем путь к изображению
			break;
		case 5:														//если x=5
			if ( (a==0) || ((1 + b * Math.log((a**2)*x)) < 0))  {	//проверка отсутствия решения при введенных данных
				alert('Система не имеет решений');					//если условие верно, нет решений
			} else {												//если нет
				y = x * Math.sqrt(1 + b * Math.log((a**2)*x));		//y вычиляется по третьей формуле из задания
			}
			img.src = './img/formula4_3.png';						//устанавливаем путь к изображению
			break;
		default: 													//в остальных случаях нет решений
			alert('Система не имеет решений');
			break;
		}
		document.getElementById('image-container').append(img);		//добавили картинку внутрь элемента с id="image-container"
		alert('y = ' + y.toFixed(3));											//вывод y
	}
}

solveEquations();													//вызов этой же функции
