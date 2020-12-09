const formatString = function(string) {
    const words = string.split('');
    console.log(words);
    const count = words.length;
    if ( count <= 40 ) {
        
        return (string);

    } else {
        const card = '...';
        const deleteCard = count - 40;
        console.log(deleteCard);
        words.pop(deleteCard);
        words.push('...');
        
        const sentence = words.join('');
        return (sentence);

    }
    

};


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка