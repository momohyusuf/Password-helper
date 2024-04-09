# Strong Password

## Description

This lightweight npm package provides a utility for checking the strength of passwords based on various criteria such as presence of uppercase and lowercase characters, digits, special characters, and minimum length. It returns a detailed result object containing information about the password strength and any missing criteria.

### Installation

To install the package, you can use npm:

```bash
npm install strong-password-checker
```

### Usage

```javascript
import { strongPassword } from "strong-password-checker";
```

```javascript
const password = "YourPassword123!";
const config = {
  lowercase: true, // Default is true
  uppercase: true, // Default is true
  digit: true, // Default is true
  special_character: true, // Default is true
  minimum_length: 6, // Default is 6
};

const result = strongPassword(password, config);
console.log(result);
```

### Parameters

- password: The password string to be checked.
- config: An optional configuration object allowing customization of password criteria. The available configuration options are:
- lowercase: Boolean value indicating whether the password must contain lowercase characters. Default is true.
- uppercase: Boolean value indicating whether the password must contain uppercase characters. Default is true.
- digit: Boolean value indicating whether the password must contain digits. Default is true.
- special_character: Boolean value indicating whether the password must contain special characters. Default is true.
- minimum_length: Integer value indicating the minimum length of the password. Default is 6.

#### Return Value

The function strongPassword returns an object with the following properties:

- password_missing: An array containing messages indicating which criteria the password is missing.
- score: An integer representing the strength score of the password. The maximum score is 100.
- strength: A string indicating the strength level of the password (e.g., "weak", "medium", "strong").

### Example Output

```javascript
{
password_missing: ["Password must contain an uppercase character [A - Z]"],
score: 80,
strength: "medium"
}
```

### Credits

This npm package is maintained by Momoh yusuf.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
