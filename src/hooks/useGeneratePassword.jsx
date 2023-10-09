import { useState } from "react";
import { generatePassword } from "../utils";

export const useGeneratePassword = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState();

  const handleGeneratePassword = (addNumbers, addSpecialChars) =>
    setPassword(generatePassword(addNumbers, addSpecialChars, length));

  return {
    length,
    password,
    setLength,
    handleGeneratePassword,
  };
};
