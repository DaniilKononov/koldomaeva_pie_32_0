function compareNumbers() {
	let first_number = prompt('Введите первое целое число: ');						//ввод первого числа
	let second_number = prompt('Введите второе целое число: ');						//ввод второго числа
	
	first_number = Number(first_number);											//преобразованиев строки в число
	second_number = Number(second_number);											//преобразованиев строки в число
	
	if (Number.isInteger(first_number) && Number.isInteger(second_number)) {		//проверка, является ли число целым
		if (first_number == second_number) {										//если числа равны
			second_number = first_number = 0;										//присваивание обоим числам нулевого значения
		} else {
			second_number = first_number = first_number + second_number;			//присваивание обоим числам суммы этих чисел
		}
		alert('Число A = ' + first_number + '\n' + 'Число B = ' + second_number);	//вывод чисел
	} else {																		//если число не целое
		alert('Введено не целое число. Попробуйте снова');							//или вовсе не число, то происходит
		compareNumbers();															//вызов этой же функции
	}
}

compareNumbers();																	//вызов функции
