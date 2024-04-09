// Check if password contain lowercase character
const password_contain_lowercase = (password) => {
  const lowercase_regex = /(?=.*[a-z])/;
  return lowercase_regex.test(password);
};

// Check if password contain uppercase character
const password_contain_uppercase = (password) => {
  const uppercase_regex = /(?=.*[A-Z])/;
  return uppercase_regex.test(password);
};

// Check if password contain digit
const password_contain_digit = (password) => {
  const digit_regex = /(?=.*[0-9])/;
  return digit_regex.test(password);
};

// Check if password contain a special character
const password_contain_special_character = (password) => {
  const special_character_regex = /[^a-zA-Z0-9 ]+/g;
  return special_character_regex.test(password);
};

// Check if password minimum length
const password_minimum_length = (password, min_length) => {
  const minimum_length_ten_regex = new RegExp(`(?=.{${min_length || 6},})`);
  return minimum_length_ten_regex.test(password);
};

// Check if password strength to return "Weak" | "Strong" | "Medium"
const password_strength = (password) => {
  const medium_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/;

  const strong_regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{10,})/;

  if (strong_regex.test(password)) {
    return "Strong";
  }
  if (medium_regex.test(password)) {
    return "Medium";
  }

  return "Weak";
};

export {
  password_contain_lowercase,
  password_contain_uppercase,
  password_contain_special_character,
  password_contain_digit,
  password_minimum_length,
  password_strength,
};
