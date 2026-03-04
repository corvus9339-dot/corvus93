"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl tracking-widest font-semibold text-blue-400">
            CORVUS
          </h1>
          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">Про нас</a>
            <a href="#catalog" className="hover:text-pink-400 transition">Каталог</a>
            <a href="#contact" className="hover:text-blue-400 transition">Контакти</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-6xl font-bold tracking-wide">
          CORVUS
        </h2>
        <p className="mt-6 max-w-2xl text-gray-400">
          Підрозділ пілотів у складі 93 ОМБр "Холодний Яр".
          Технологічна сила. Єдність. Відповідальність.
        </p>
        <a
          href="#catalog"
          className="mt-10 px-8 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-black transition"
        >
          Перейти до каталогу
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-white text-black text-center">
        <h3 className="text-4xl font-semibold mb-8 text-black">
          Про нас
        </h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Ми — підрозділ пілотів у складі 93 ОМБр «Холодний Яр».
          Ми ті, хто захищає спокій, незалежність та суверенітет.
          Але понад усе — ми сім'я.
          Наша сила в дисципліні, технологіях та взаємній підтримці.
        </p>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-24 px-6 bg-black text-white text-center">
        <h3 className="text-4xl font-semibold mb-16 text-blue-400">
          Каталог
        </h3><div className="flex justify-center mb-12">
  <img
    src="/shevron.jpg"
    alt="Шеврон CORVUS"
    className="w-64 rounded-xl shadow-lg"
  />
</div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {["Футболки", "Брелки", "Шеврони", "Стікери", "Прапори"].map((item, index) => (
  <div
    key={index}
    className="border border-gray-800 p-8 rounded-lg hover:border-pink-500 transition"
  >
    {item === "Шеврони" && (
      <img
        src="/shevron.jpg"
        alt="Шеврон CORVUS"
        className="mx-auto mb-6 w-40 rounded-lg"
      />
    )}

    <h4 className="text-xl mb-4">{item}</h4>

    <p className="text-gray-400 text-sm">
      Лімітована продукція підрозділу CORVUS.
    </p>
  </div>
))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white text-black text-center">
        <h3 className="text-4xl font-semibold mb-10">
          Зв’язок з нами
        </h3>

        <div className="space-y-4 text-lg">
          <p>
            Email:{" "}
            <a
              href="mailto:corvus9339@gmail.com"
              className="text-blue-600 hover:text-pink-500 transition"
            >
              corvus9339@gmail.com
            </a>
          </p>

          <p>
            Instagram:{" "}
            <a
              href="https://instagram.com/corvus_93ombr"
              target="_blank"
              className="text-pink-500 hover:text-blue-600 transition"
            >
              @corvus_93ombr
            </a>
          </p>

          <p>
            Telegram:{" "}
            <span className="text-blue-600">
              073-758-48-30
            </span>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-600 border-t border-gray-800 text-sm">
        © {new Date().getFullYear()} CORVUS | 93 ОМБр "Холодний Яр"
      </footer>

    </main>
  );
}