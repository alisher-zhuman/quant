import Image from "next/image";
import Link from "next/link";

const NotFound = () => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4">
    <div className="w-full max-w-md p-10 rounded-2xl text-center bg-[#1570EF1A] shadow-lg">
      <div className="flex justify-center mb-6">
        <Image
          src="/icons/logo.svg"
          alt="Логотип"
          loading="eager"
          width={64}
          height={64}
        />
      </div>

      <h1 className="text-6xl font-bold text-[#1570EF] mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-4">Страница не найдена</h2>

      <p className="text-gray-700 mb-6">
        Автоматический сбор показаний для вашего дома и бизнеса
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-[#1570EF] text-white font-medium rounded-lg shadow hover:bg-[#1056c2] transition"
      >
        Вернуться на главную
      </Link>
    </div>
  </main>
);

export default NotFound;
