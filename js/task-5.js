
const checkForSpam = function(message) {
    
  
    const normalizedMassage = message.toLowerCase();
    return normalizedMassage.includes('spam')||normalizedMassage.includes('sale')
   
};


console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true */