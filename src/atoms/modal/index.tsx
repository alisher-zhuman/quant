import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/utils/helpers";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isOpen, onClose }: ModalProps) => (
  <div
    className={cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300",
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    )}
    onClick={onClose}
  >
    <div
      className={cn(
        "bg-white rounded-3xl shadow-lg max-w-2xl w-[90%] py-5 px-10 md:py-10 md:px-20 relative transform transition-all duration-300",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <Image
        className="cursor-pointer absolute top-2 right-2"
        onClick={onClose}
        src="/icons/close.svg"
        alt="Закрыть"
        width={24}
        height={24}
      />

      {children}
    </div>
  </div>
);
