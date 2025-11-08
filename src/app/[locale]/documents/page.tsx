"use client";
import { useRouter } from "next/navigation";
import { DOCUMENTS } from "@/utils/constants";
import Image from "next/image";

const Documents = () => {
  const router = useRouter();

  const handleDownload = (file: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  };

  return (
    <section className="pl-3.5 pr-2 mt-2 md:mt-5 lgx:pr-10 lgx:pl-12">
      <button onClick={() => router.back()} className="cursor-pointer mb-3">
        ← Назад
      </button>

      <h1 className="text-xl md:text-3xl font-semibold mb-6">Документы</h1>

      <div className="flex items-center flex-wrap gap-5">
        {DOCUMENTS.map(({ file, title, pages, size }, index) => (
          <div
            key={index}
            onClick={() => handleDownload(file)}
            className="cursor-pointer border border-[#E4E7EC] rounded-3xl p-6"
          >
            <Image
              src="/icons/pdf.svg"
              alt="Пдф"
              className="mb-3"
              width={24}
              height={24}
            />

            <h2 className="font-semibold text-lg mb-1">{title}</h2>

            <p className="text-sm text-gray-600">
              {pages} страницы - {size}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Documents;
