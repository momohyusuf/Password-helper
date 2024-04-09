import {
  password_contain_digit,
  password_contain_lowercase,
  password_contain_special_character,
  password_contain_uppercase,
  password_minimum_length,
  password_strength,
} from "./utils.js";

const strongPassword = (password, config) => {
  // trim out trailing white spaces from password to avoid wrong length checking
  password = password.trim();

  const PASSWORD_RESULT = {
    password_missing: [],
    score: 100,
    strength: "",
  };

  // for lowercase
  if (
    config?.lowercase !== false &&
    password_contain_lowercase(password) === false
  ) {
    PASSWORD_RESULT.password_missing.push(
      "Password must contain a lowercase character [a - z]"
    );
    PASSWORD_RESULT.score -= 20;
  }
  // for uppercase
  if (
    config?.uppercase !== false &&
    password_contain_uppercase(password) === false
  ) {
    PASSWORD_RESULT.password_missing?.push(
      "Password must contain an uppercase character [A - Z]"
    );
    PASSWORD_RESULT.score -= 20;
  }
  //  for digit
  if (config?.digit !== false && password_contain_digit(password) === false) {
    PASSWORD_RESULT.password_missing?.push(
      "Password must contain at least one digit [1 - 10]"
    );
    PASSWORD_RESULT.score -= 20;
  }
  // for special characters
  if (
    config?.special_character !== false &&
    password_contain_special_character(password) === false
  ) {
    PASSWORD_RESULT.password_missing?.push(
      "Password must contain at least one special character [ @*^%$# ]"
    );
    PASSWORD_RESULT.score -= 20;
  }

  // for password minimum length Default 6
  if (password_minimum_length(password, config?.minimum_length) === false) {
    PASSWORD_RESULT.password_missing?.push(
      `Password length must be longer than ${
        config?.minimum_length || 6
      } characters`
    );
    PASSWORD_RESULT.score -= 20;
  }

  // for password strength text
  PASSWORD_RESULT.strength = password_strength(password);

  return PASSWORD_RESULT;
};

export { strongPassword };
