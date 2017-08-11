// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var cardNumber = cardNumber.toString();
  // Diner's Club
  if (cardNumber.startsWith('38') || cardNumber.startsWith('39')) {
    if (cardNumber.length === 14) {
      return 'Diner\'s Club';
    }
  }

  // American Express
  if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
    if (cardNumber.length === 15) {
      return 'American Express';
    }
  }

  // Switch
  if (/^4903|^4905|^4911|^4936|^564182|^633110|^6333|^6759/.test(cardNumber)) {
    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
      return 'Switch';
    }
  }

  // Visa
  if (cardNumber.startsWith('4')) {
    var cardLength = cardNumber.length;

    switch (cardLength) {
      case 13:
      case 16:
      case 19:
        return 'Visa';
        break;
      default:
    }
  }

  // MasterCard
  if (cardNumber.charAt(0) === '5') {
    if (cardNumber.charCodeAt(1) < 54  && // ASCII dec 54 === '6';
        cardNumber.charCodeAt(1) > 48 &&  // ASCII dec 48 === '0';
        cardNumber.length === 16) {
      return 'MasterCard';
    }
  }

  // Discover
  if (/^6011|^64[4-9]|^65/.test(cardNumber)) {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';
    }
  }

  // Maestro
  if (/^5018|^5020|^5038|^6304/.test(cardNumber)) {
    if (cardNumber.length < 20 && cardNumber.length > 11) {
      return 'Maestro';
    }
  }

  // China UnionPay
  var ChinaUnionPrefix = parseInt(cardNumber.slice(0, 6), 10);
  // console.log("China: " + ChinaUnionPrefix);
  if (ChinaUnionPrefix >= 622126 && ChinaUnionPrefix <= 622925) {
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      return 'China UnionPay';
    }
  } else if (/^62[4-6]|^628[2-8]/.test(cardNumber)) {
    if (cardNumber.length >= 16 && cardNumber.length <= 19) {
      return 'China UnionPay';
    }
  }
};
