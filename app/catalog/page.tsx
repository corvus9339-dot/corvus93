export default function Catalog() {
  const products = [
    {
      id: 1,
      name: "Футболка CORVUS FPV",
      category: "Одяг",
      description: "Тактичний крій. Щільна бавовна. Принт шеврона.",
      price: "1100 грн",
    },
{
      id: 2,
      name: "Шеврон CORVUS",
      category: "Аксесуари",
      description: "Вишивка високої деталізації. Липучка Velcro.",
      price: "400 грн",
    },
    {
      id: 3,
      name: "Стікерапак CORVUS",
      category: "Стікери",
      description: "Набір з 5 неонових стікерів. Вологостійкі.",
      price: "350 грн",
    },
    {
      id: 4,
      name: "Прапор CORVUS",
      category: "Прапори",
      description: "Розмір 90x150. Щільна тканина. Яскравий принт.",
      price: "1200 грн",
    },
    {
      id: 5,
      name: "Брелок шеврон",
      category: "Аксесуари",
      description: "3D-друк або ПВХ. Металеве кільце.",
      price: "400 грн",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen px-6 py-24">
      <h1 className="text-5xl font-extrabold text-center mb-6 neon-text">
        MERCH CORVUS
      </h1>

      <p className="text-center text-gray-400 mb-16">
        Офіційний мерч підрозділу
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#111] p-8 border border-[#222] transition-all duration-300 hover:border-pink-500 hover:shadow-[0_0_30px_#ff2e88] hover:-translate-y-2"
          >
            <div className="text-xs text-pink-500 mb-2 tracking-widest">
              {product.category}
            </div>

            <h2 className="text-2xl font-bold mb-4">
              {product.name}
            </h2>

            <p className="text-gray-400 mb-6">
              {product.description}
            </p>

            <div className="text-xl text-pink-500 font-bold mb-6">
              {product.price}
            </div>

            <button className="w-full border border-pink-500 text-pink-500 py-3 transition-all duration-300 hover:bg-pink-500 hover:text-black">
              Замовити
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}