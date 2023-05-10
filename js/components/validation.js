export function checkLength(value, len) {
  return value.trim().length > len;
}

export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const emailPatternMatches = regEx.test(email);
  return emailPatternMatches;
}
