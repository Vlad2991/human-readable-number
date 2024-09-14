module.exports = function toReadable(number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['hundred'];

    if (number < 10) {
        return ones[number];
    } else if (number < 20 && number > 10) {
        return teens[number - 11];
    } else if (number < 100) {
        return tens[Math.floor(number / 10) - 1] + (number % 10 !== 0 ? ' ' + ones[number % 10] : '');
    } else if (number < 1000) {
        return ones[Math.floor(number / 100)] + ' ' + hundreds[0] + (number % 100 !== 0 ? ' ' + toReadable(number % 100) : '');
    }
};