var s1 = Number(prompt("Length of the first side"));
var s2 = Number(prompt("Length of the second side"));
var s3 = Number(prompt("Length of the third side"));

if (checkLenght(s1, s2, s3)) {
    checkTriangle(s1, s2, s3);
} else {
    console.log('Incorrect data');
}

function checkLenght(a, b, c) {
    if (a > 0 && b > 0 && c > 0) { 
        if (a + b > c && a + c > b && b + c > a) {
            return true;
        }
    } else {
        return false;
    }
}

function squareGeron(a, b, c) {
    var p = (a + b + c) / 2;
    var square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    if (square % 1 === 0) {
        return square
    }
    return square.toFixed(2);
}

function checkTriangle(a, b, c) {
    if (a * a + b * b == c * c || a * a + c * c == b * b || a * a == b * b + c * c) {
        console.log("Type of triangle is right triangle and square is " + squareGeron(a, b, c));
    } else if ((a == b) && (a == c)) {
        console.log("Type of triangle is equilateral triangle and square is " + squareGeron(a, b, c));
    } else if ((a == b && b != c) || (a != b && c == a) || (c == b && c != a)) {
        console.log("Type of triangle is isosceles triangle and square is " + squareGeron(a, b, c));
    } else {
        console.log("Type of triangle is scalene triangle and square is " + squareGeron(a, b, c));
    }
}