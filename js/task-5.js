
const checkForSpam = function(message) {
    
    const words = message.toLowerCase().split(' ');
    console.log(words);

    const isInSpam = message.includes();
    return isInSpam;
};

const spam1 = 'span';
const spam2 = 'sale';
 

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true */