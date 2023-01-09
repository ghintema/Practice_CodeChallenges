function wordReverser(phrase) {
    // Assumes a phrase with only words seperated by a singly blank.
    let wordsInOrder = phrase.split(' ');
    let wordsReversed = [];
    wordsInOrder.forEach(word => wordsReversed.unshift(word));
    return wordsReversed.join(' ');
  }
  
  console.log(wordReverser("Codecademy rules are not very strict"));
  
  // Leave this so we can test your code:
  module.exports = wordReverser;