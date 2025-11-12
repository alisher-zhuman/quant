import { cn } from "@/utils/helpers";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: Props) => (
  <button
    onClick={onClick}
    className={cn(
      "py-1.5 px-3.5 md:py-2 md:px-4 text-white bg-[#1570EF] hover:bg-[#1056c2] transition cursor-pointer rounded-xl",
      className
    )}
  >
    {children}
  </button>
);
