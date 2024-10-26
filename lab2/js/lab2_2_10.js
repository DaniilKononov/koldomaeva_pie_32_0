let number = prompt('Введите положительное трехзначное число: ');		//ввод числа

number = parseInt(number);												//преобразование строки в целое число

let units_number = number % 10;											//нахождение единиц у числа
let tens_number = number % 100 / 10;									//нахождение десятков у числа

tens_number = parseInt(tens_number);									//преобразование числа в целое

alert('единицы =' + units_number + '\n' + 'десятки = ' + tens_number + '\n' + units_number + tens_number);
//вывод единиц и десятков