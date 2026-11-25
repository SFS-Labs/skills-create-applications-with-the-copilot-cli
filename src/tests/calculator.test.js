const assert = require('node:assert/strict');
const test = require('node:test');
const { addition, subtraction, multiplication, division, modulo, power, squareRoot } = require('../calculator.js');

test('addition adds values', () => assert.equal(addition(2, 3), 5));
test('subtraction subtracts values', () => assert.equal(subtraction(7, 4), 3));
test('multiplication multiplies values', () => assert.equal(multiplication(3, 4), 12));
test('division divides values', () => assert.equal(division(10, 2), 5));
test('division rejects a zero divisor', () => assert.throws(() => division(10, 0), /divide by zero/));
test('modulo returns the remainder', () => assert.equal(modulo(10, 3), 1));
test('modulo rejects a zero divisor', () => assert.throws(() => modulo(10, 0), /divide by zero/));
test('power raises a base to an exponent', () => assert.equal(power(2, 5), 32));
test('square root returns the root', () => assert.equal(squareRoot(81), 9));
test('square root rejects negative values', () => assert.throws(() => squareRoot(-1), /negative number/));
