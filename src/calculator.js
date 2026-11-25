function addition(a, b) { return a + b; }
function subtraction(a, b) { return a - b; }
function multiplication(a, b) { return a * b; }
function division(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}
function modulo(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a % b;
}
function power(base, exponent) { return base ** exponent; }
function squareRoot(value) {
  if (value < 0) throw new Error('Cannot take the square root of a negative number');
  return Math.sqrt(value);
}

module.exports = { addition, subtraction, multiplication, division, modulo, power, squareRoot };
