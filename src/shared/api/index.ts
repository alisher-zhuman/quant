import emailjs from "@emailjs/browser";

export const sendEmail = async (form: HTMLFormElement) => {
  return emailjs.sendForm(
    "service_zasgh6f",
    "template_lqs6xq8",
    form,
    "eVkKPSsD9VsMjqf6D"
  );
};
