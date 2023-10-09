import { chars, numbers, specialChars } from "../constants/generatePassword";

export const generatePassword = (addNumbers, addSpecialChars, length) => {
  let passwordChars = chars;

  if (addSpecialChars) passwordChars += specialChars;

  if (addNumbers) passwordChars += numbers;

  let password = "";

  for (let i = 0; i < length; i++) {
    password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }

  return password;
};
