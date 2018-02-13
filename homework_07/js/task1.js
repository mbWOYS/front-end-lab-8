var floorsNum = +prompt("Enter a number of floors from 1 to 20", ""),
    boxes = "";

if(isNaN(floorsNum) || (floorsNum < 1 || floorsNum > 20) || floorsNum % 1 !==0) {
    document.write("Incorrect data!");
} else {
    for(var i = 0; i < floorsNum; i++) {
       for(var k = 0; k < (floorsNum + i); k++) {
           if(k < (floorsNum - i - 1)) {
               boxes += "   "; // 3 spaces, because [~] - 3 symbols
           } else {
               boxes += "[~]";
           }
       } 
        boxes += "\n";
    }
    console.log(boxes);
}

