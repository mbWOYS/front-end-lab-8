/*alert(Math.round(Math.random() * 5));*/

var getStarted = confirm("Do you want to play a game?");

if (getStarted) {
    var maxRange = 6,
        games = 0,
        totalPrize = 0,
        maxPrize = 10,
        prize = 10,
        numAttempts = 0,
        attemptsLeft = 3,
        onceAgain = true,
        range = Math.floor(Math.random() * maxRange);

    while (numAttempts < 3 && onceAgain) {
        var custom = +prompt(`Enter a number from 0 to ${maxRange -1}\nAttempts left: ${attemptsLeft}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${prize}$`);

        if (!isNaN(parseFloat(custom)) && isFinite(custom) && Number(custom) === range) {
            totalPrize += prize;
            numAttempts = 0;
            attemptsLeft = 3;
            maxRange = maxRange * 2 - 1;
            maxPrize *= 3;
            prize = maxPrize;
            range = Math.floor(Math.random() * maxRange);
            onceAgain = confirm('Do you want to continue a game?');
        } else {
            attemptsLeft--;
            numAttempts++;
            prize = Math.floor(maxPrize / (numAttempts * 2));
        }
    }

    console.log(`Thank you for a game. Your prize is ${totalPrize}`);
    getStarted = confirm('Do you want to try again?');
    games++;
} else {
    console.log('You did not become a millionaire');
}