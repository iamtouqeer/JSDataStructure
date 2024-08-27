const countOccurrences = require('./count-occurrences');

test('Count Occurrences of a Character', () => {
  expect(countOccurrences('hello world', 'l')).toBe(3);
  expect(countOccurrences('programming', 'm')).toBe(2);
  expect(countOccurrences('banana', 'a')).toBe(3);
});
