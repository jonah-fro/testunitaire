const isAnagram = require('../src/anagram');

/*

* Anagram Testing file

*/

test('isAnagram function exists', () => {
expect(isAnagram).toBeDefined();
});

test('"cinema" is an anagram of "iceman"', () => {
  const c = "cinema";
  const i = "iceman";
  expect (c + i) .toBe(isAnagram);
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
  const d = "Dormitory";
  const dd = "dirty room##";
  expect(d + dd).toBe(isAnagram);
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
  const h = "Hello";
  const a = "Aloha";
  expect (h + a).not.toBe(isAnagram);
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
  expect(2 + 2).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(2 + 2).not.toBe(5);
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
  const n = null;
  expect(n).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  const f = false;
  expect(f).toBeFalsy();
});

// toEqual
test('User should be Marc Antoine object', () => {
  const user = {user1: "Marc"};
  user['user2'] = "Antoine";
  expect(user).toEqual({user1: "Marc", user2: "Antoine"});
});

// Less than and greater than
test('Should be under or equal 1000', () => {
  const load1 = 500;
  const load2 = 500;
  expect(load1 + load2).toBeLessThanOrEqual(1000);
});

// Regex
test('There is no I in the word team', () => {
  expect('team').not.toMatch(/I/);
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
  expect(data).toBe('Leanne Graham');
});

/*

* ReverseString Testing file

*/

const reverseString = require('../src/reversestr');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () done => {
  function reverseString(Jonah) {
    try {

    }
  }
  expect("Jonah").toBe(reverseString);
});

test('String reverses with uppercase', () => {
  expect("JONAH").toBe(reverseString);
});
