import emailjs from "@emailjs/browser";

export const sendEmail = async (form: HTMLFormElement) => {
  return emailjs.sendForm(
    "service_rlp9icb",
    "template_lqs6xq8",
    form,
    "eVkKPSsD9VsMjqf6D"
  );
};
