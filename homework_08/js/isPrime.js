function isPrime(n) {
	
    var primeArr = [];
    for(var i = 2; i < n; i++) {
        primeArr[i] = true;
    };
	
    var ch = Math.sqrt(n);
	
    for(var i = 2; i < ch; i++) {
        if(primeArr[i] === true) {
            for(var j = i * i; j < n; j += i) {
                primeArr[j] = false;
            }
        }
    };
	
    for(var i = 2; i < n; i++) {
        if(primeArr[i] === true) {
            console.log(i + " " + primeArr[i]);
        }
    };
};