function compareNumbers() {
	let first_number = prompt('Введите первое целое число: ');							//ввод первого числа
	let second_number = prompt('Введите второе целое число: ');							//ввод второго числа
	let statement = 'Ровно одно из чисел нечетное'
	
	first_number = Number(first_number);												//преобразованиев строки в число
	second_number = Number(second_number);												//преобразованиев строки в число
	
	if (Number.isInteger(first_number) && Number.isInteger(second_number)) {			//проверка, является ли число целым
		if ((Math.abs(first_number)%2 == 1) || (Math.abs(second_number)%2 == 1)) {		//проверка, есть ли среди чисел нечетное
			if ((Math.abs(first_number)%2 == 1) && (Math.abs(second_number)%2 == 1)) {	//проверка, оба ли числа нечетные
				alert(statement + '\n' + 'FALSE');										//вывод FALSE, если оба нечетные
			} else {
				alert(statement + '\n' + 'TRUE');										//вывод TRUE, если только одно нечетное
			} 
		} else {
			alert(statement + '\n' + 'FALSE');											//вывод FALSE, если оба числа четные
		}
	} else {																			//если число не целое
		alert('Введено не целое число. Попробуйте снова');								//или вовсе не число, то происходит
		compareNumbers();																//вызов этой же функции
	}
}

compareNumbers();																		//вызов функции
