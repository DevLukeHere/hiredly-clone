// Reuseable functions for client side components goes here

export function validateName(name: string) {
  const pattern = /^[a-zA-Z\s@/'-]+$/; // Allow only uppercase, lowercase, spaces, and certain special characters for name

  return pattern.test(name);
}

export function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}
