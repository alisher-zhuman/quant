import { Button } from "@/atoms/button";

export const FormModal = () => {
  return (
    <div>
      <p className="text-center font-medium text-base md:text-xl">
        Заполните заявку и мы свяжемся с вами
      </p>

      <form className="mt-8">
        <input
          type="text"
          placeholder="Как к вам обращаться?"
          className="p-3 md:py-4 md:px-5 w-full mb-4 bg-[#F2F4F7] rounded-xl"
        />

        <input
          type="phone"
          placeholder="+996555000111"
          className="p-3 md:py-4 md:px-5 w-full mb-6 bg-[#F2F4F7] rounded-xl"
        />

        <Button
          type="submit"
          disabled
          className="w-full py-3.5 md:py-4.5 font-medium disabled:bg-[#F2F4F7] disabled:text-[#10182880] disabled:cursor-not-allowed"
        >
          Отправить заявку
        </Button>
      </form>

      <p className="text-sm mt-3 text-center text-[#101828B2]">
        Нажимая “Отправить заявку” вы соглашаетесь с обработкой личных данных
      </p>
    </div>
  );
};
