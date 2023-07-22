// Reuseable functions for client side components goes here

export function validateName(name: string) {
  // Allow only uppercase, lowercase, spaces, and certain special characters for name
  const pattern = /^[a-zA-Z\s@/'-]+$/;

  return pattern.test(name);
}

export function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

export function validateBirthdate(birthdate: string) {
  // Convert birthdate to a Date object
  const birthdateObj = new Date(birthdate);
  
  // Calculate the current date
  const currentDate = new Date();
  
  // Calculate the minimum and maximum birthdate based on age range
  const minBirthdate = new Date();
  minBirthdate.setFullYear(currentDate.getFullYear() - 99);
  
  const maxBirthdate = new Date();
  maxBirthdate.setFullYear(currentDate.getFullYear() - 16);
  
  // Check if the birthdate is within the valid range
  if (birthdateObj >= minBirthdate && birthdateObj <= maxBirthdate) {
    return true; // Birthdate is valid
  } else {
    return false; // Birthdate is not valid
  }
}
