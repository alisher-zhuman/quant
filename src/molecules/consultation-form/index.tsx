"use client";
import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { Button } from "@/atoms/button";
import { NameInput } from "@/atoms/name-input";
import { PhoneInput } from "@/atoms/phone-input";
import { checkFormValid, cn } from "@/shared/helpers";
import { sendEmail } from "@/shared/api";

interface Props {
  toggleModal?: () => void;
  titleIsVisible?: boolean;
}

export const ConsultationForm = ({ toggleModal, titleIsVisible }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+996");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const t = useTranslations();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await sendEmail(formRef.current);
      toast.success("Заявка отправлена! 🚀");
      toggleModal?.();
      formRef.current.reset();
      setName("");
      setPhone("+996");
    } catch (err) {
      const error = err as { text?: string };
      setErrorMessage(error.text ?? "Неизвестная ошибка");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {titleIsVisible && (
        <p className="text-center font-medium text-base md:text-xl">
          {t("Заполните заявку и мы свяжемся с вами")}
        </p>
      )}

      <form
        ref={formRef}
        className={cn(titleIsVisible && "mt-8")}
        onSubmit={handleSubmit}
      >
        <NameInput value={name} onChange={setName} />
        <PhoneInput value={phone} onChange={setPhone} />

        <Button
          type="submit"
          disabled={loading || !checkFormValid(phone, name)}
          className="w-full py-3.5 md:py-4.5 font-medium disabled:bg-[#F2F4F7] disabled:text-[#10182880] disabled:cursor-not-allowed"
        >
          {loading ? t("Отправляем") + "..." : t("Отправить заявку")}
        </Button>

        {errorMessage && (
          <p className="my-2.5 text-red-500">
            {t("Ошибка")}: {errorMessage}
          </p>
        )}
      </form>

      <p className="text-sm mt-3 text-center text-[#101828B2]">
        {t(
          "Нажимая “Отправить заявку” вы соглашаетесь с обработкой личных данных"
        )}
      </p>
    </div>
  );
};
