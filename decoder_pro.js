// A decryption program with shift

// Alphabet
var symbols = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', ' ', '.', ',', '—', '!'];

// Shift
var shift = 10;

// Encoded Message
var encodedMessage = [8, 28, 36, 52, 56, 40, 23, 31, 56, 39, 38, 28, 48, 52, 58, 56, 38, 27, 32, 37, 56, 40, 23, 31, 56, 39, 38, 41, 39, 32, 57];

// DecodedMessage
var decodedMessage = '';

for (var i = 0; i < encodedMessage.length; i++) {
  var symbolIndex = encodedMessage[i];
  var symbol = symbols[symbolIndex + 10]; 
  if (symbolIndex + 10 > symbols.length) {
    symbol = symbols[symbolIndex + 10 - symbols.length];
    }
  
  decodedMessage += symbol;
}


