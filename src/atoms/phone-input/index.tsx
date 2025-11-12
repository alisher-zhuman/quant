interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const PhoneInput = ({ value, onChange }: Props) => (
  <input
    type="tel"
    name="user_phone"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="+996 556 899 065"
    className="p-3 md:py-4 md:px-5 w-full mb-6 bg-[#F2F4F7] rounded-xl"
    required
  />
);
