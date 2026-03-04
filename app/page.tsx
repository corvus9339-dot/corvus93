export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0f0f0f] z-0" />

        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest neon-text">
            CORVUS FPV
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Перевага в повітрі. Технологія. Контроль.
          </p>

          <a
            href="/catalog"
            className="mt-10 inline-block px-8 py-4 border-2 border-pink-500 text-pink-500 font-bold tracking-wider transition-all duration-300 hover:bg-pink-500 hover:text-black hover:shadow-[0_0_25px_#ff2e88]"
          >
            ПЕРЕЙТИ ДО КАТАЛОГУ
          </a>
        </div>
      </section>

    </main>
  );
}<section className="py-24 bg-[#0a0a0a] px-6">
  <h2 className="text-4xl font-bold text-center mb-16">
    UNIT IDENTITY
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div className="identity-card">CORVUS</div>
    <div className="identity-card">FPV UNIT</div>
    <div className="identity-card">AIR DOMINANCE</div>
  </div>
</section>