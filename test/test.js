const isAnagram = require('../src/anagram');

/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
expect(isAnagram).toBeDefined();
});

test('"cinema" is an anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
/*

* Various functions Testing file

*/

const functions = require('../src/variousfunctions');

const nameCheck = () => console.log('Checking Name.');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    //Check if the user is Jeff
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    //Check if the user is Karen
    expect(user).toBe('Karen');
  });
});

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
/*

* Informations

*/

// CHECK FOR true & false VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.isNull()).toBeFalsy();
});
// toEqual
test('User should be Marc Antoine object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Marc', 
    lastName: 'Antoine'
  })
});

// Less than and greater than
test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 500;
  expect(load1 + load2).toBeLessThanOrEqual(1000);
});

// Regex
test('There is no I in the word team', () => {
  expect(functions.checkValue('team')).not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// Working with async data

// Async Await since ES7
test('User fetched name should be Leanne Graham', async () => {
  const data = await functions.fetchUser();
  expect(data.name).toBe('Leanne Graham');
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('Jonah')).toBe('hanoj');
});

test('String reverses with uppercase', () => {
  expect(reverseString('JONAH')).toBe('hanoj');
});
