function sign(x) {
	return (x > 0) ? 1 : 0;
}

function getSign() {
	let a = document.getElementById("numberA").value;
	let b = document.getElementById("numberB").value;
	let c = document.getElementById("numberC").value;
	let result;
	if ((a =='') || (b == '') || (c == '')) {
		result = 'Не возможно вычислить, так как не введено число';
	} else {
		a = Number(a);
		b = Number(b);
		c = Number(c);	
		if (isNaN(a) || isNaN(b) || isNaN(c)) {
			result = 'Не возможно вычислить, так как введено не число';
		} else {
			result = sign(a) +sign(b) + sign(c);
		}
	}
	document.getElementById("resultContainer").innerHTML=result;
}
