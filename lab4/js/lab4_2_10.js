function getSum() {												//функция, считающая сумму по формуле из задания
	let n;
	n = document.getElementById("numberN").value;				//считываем введенную информацию со страниц
	n = Number(n);
	let sum = 0;
	if (Number.isInteger(n)) {
		for (let i = 1; i <= n; i++) {
			sum += 1/i;
		}
		sum = sum.toFixed(3);
	}
	if (sum == 0) {
		sum = 'Сумму невозожно посчитать, так как было введено не целое число больше 0';
	}
	document.getElementById("resultContainer").innerHTML=sum;	//передаем результат в контейнер на html странице
}
