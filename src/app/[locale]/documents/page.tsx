"use client";
import { useRouter } from "next/navigation";
import { DOCUMENTS } from "@/utils/constants";
import Image from "next/image";

const Documents = () => {
  const router = useRouter();

  return (
    <section className="pl-3.5 pr-2 mt-2 md:mt-5 lgx:pr-10 lgx:pl-12">
      <button onClick={() => router.back()} className="cursor-pointer mb-3">
        ← Назад
      </button>

      <h1 className="text-xl md:text-3xl font-semibold mb-6">Документы</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {DOCUMENTS.map(({ file, title, pages, size }, index) => (
          <a
            key={index}
            href={file}
            download
            className="cursor-pointer flex md:flex-col border border-[#E4E7EC] rounded-3xl p-3 md:p-6 gap-2 items-center md:items-start hover:shadow-lg transition-shadow"
          >
            <Image
              src="/icons/pdf.svg"
              alt="PDF"
              className="md:mb-3"
              width={24}
              height={24}
            />

            <div>
              <h2 className="font-semibold md:text-lg mb-1">{title}</h2>

              <p className="text-sm text-gray-600">
                {pages} страницы - {size}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Documents;
