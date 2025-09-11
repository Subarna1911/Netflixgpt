export const checkValidateData = (email, password) => {

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password);

  if (!isEmailValid) return "Invalid email format";
  if (!isPasswordValid) return "Password must be 8–16 characters with uppercase, lowercase, number, and special character";

  return null; // means valid
};
