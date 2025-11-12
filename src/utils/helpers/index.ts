import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const checkFormValid = (phone: string, name: string) => {
  const digitsOnly = phone.replace(/\D/g, "");
  const digitsAfter996 = digitsOnly.slice(3);

  return name.trim() !== "" && digitsAfter996.length >= 6;
};
