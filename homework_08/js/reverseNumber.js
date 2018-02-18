function reverseNumber(x) {
	var num = Math.abs(x).toString().split("").reverse().join("");
	num = Number(num) * Math.sign(x);
	return num;
};