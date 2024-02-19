/*
  Pretty sure I got this from some SO post 
 
  ^ asserts the start of the string.
  (?=.*[A-Za-z]) positive lookahead to ensure the presence of at least one letter (uppercase or lowercase).
  (?=.*\d) positive lookahead to ensure the presence of at least one digit.
  (?=.*[!@#$%^&*(),.?":{}|<>]) positive lookahead to ensure the presence of at least one special character.
  [A-Za-z\d!@#$%^&*(),.?":{}|<>]{10,} matches the password itself with at least 10 characters. It allows letters (uppercase and lowercase), digits, and the specified special characters.
  $ asserts the end of the string.
*/
const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{10,}$/;

export const isStrongPassword: Validation = x => 
  strongPasswordRegex.test(x)