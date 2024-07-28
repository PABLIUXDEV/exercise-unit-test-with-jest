// We declare the function with the exact name "fromEuroToDollar"
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(fromEuroToDollar) {
    // Convert the given valueInYen to dollars
    let valueInYen = fromEuroToDollar * 146.261682242990654;
    // return the dollar value
    return Math.floor(valueInYen * 100)/100;
}

const fromYenToPound = function(yenToPound) {
    // Convert the given valueInGbp to Yen
    let valueInGbp = yenToPound * 0.00555910543131;
    // return the dollar value
    return Math.floor(valueInGbp * 100)/100;
}


// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(14,9))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
