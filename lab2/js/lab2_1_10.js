let first_number = prompt('Введите первое ненулевое вещественное число: ');		//ввод первого числа
let second_number = prompt('Введите второе ненулевое вещественное число: ');	//ввод второго числа

first_number = parseFloat(first_number);										//преобразвание строки в вещественное число
second_number = parseFloat(second_number);										//преобразвание строки в вещественное число

let summa = first_number**2 + second_number**2;									//формула суммы квадратов
let difference = first_number**2 - second_number**2;							//формула разности квадратов
let composition = (first_number**2) * (second_number**2);						//формула произведения квадратов
let quotient = (first_number**2) / (second_number**2);							//формула частного квадратов

alert('сумма квадратов =' + summa.toFixed(4) + '\n' + 'разность квадратов =' + difference.toFixed(4) + '\n' + 'произведение квадратов =' + composition.toFixed(4) + '\n' + 'частное от деления квадратов =' + quotient.toFixed(4));
//вывод суммы, разности, произведения и частного квадратов