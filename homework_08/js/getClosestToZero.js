function getClosestToZero() {
	var num = Math.abs(arguments[0]);
	var l = arguments.length;
	for (var i = 0; i < l; i++) {
		if (Math.abs(arguments[i]) < num) num = arguments[i];
	}
	return num;
}