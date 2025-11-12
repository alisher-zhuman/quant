import { useTranslations } from "next-intl";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const NameInput = ({ value, onChange }: Props) => {
  const t = useTranslations();

  return (
    <input
      type="text"
      name="user_name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={t("Как к вам обращаться?")}
      className="p-3 md:py-4 md:px-5 w-full mb-4 bg-[#F2F4F7] rounded-xl"
      required
    />
  );
};
