function illegalWord(sentence, word) {
  word = word.toLowerCase();
  sentence = sentence.toLowerCase();

  console.log(sentence.includes(word));

}

// Tests
console.log(!illegalWord('Hello there', 'fudge'));
console.log(!illegalWord('Hello there', 'there'));
console.log(illegalWord("But I didn't say fudge", 'fudge'));
console.log(illegalWord("But I didn't say fudge", 'Fudge'));
