import { cn } from "@/utils/helpers";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...props }: Props) => (
  <button
    {...props}
    className={cn(
      "py-1.5 px-3.5 md:py-2 md:px-4 text-white bg-[#1570EF] hover:bg-[#1056c2] transition cursor-pointer rounded-xl",
      className
    )}
  >
    {children}
  </button>
);
