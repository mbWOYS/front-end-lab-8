var euro, usd, usdToUah, euroToUah, euroToUsd;

const usdER = 27.1196;
const euroER = 33.4602;

euro = +prompt('enter amount of EURO', 1);
usd = +prompt('enter amount of USD', 1);

usdToUah = parseFloat((usdER * usd).toFixed(2));
euroToUah = parseFloat((euroER * euro).toFixed(2));
euroToUsd = parseFloat((euroER / usdER).toFixed(2));

if (isNaN(euro) || isNaN(usd)) {
    console.log('incorrect data')
} else {
    console.log(euro + ' euros  equal to ' + euroToUah + ' UAH, ' + usd + ' dollars equal to ' + usdToUah + ', one euro equals to ' + euroToUsd + ' dollars');
}