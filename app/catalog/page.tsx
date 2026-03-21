import Image from "next/image";
import fs from "fs";
import path from "path";
import AddToCartButton from "../components/AddToCartButton";

type ProductItem = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type Category = {
  title: string;
  items: ProductItem[];
};

function formatFileName(fileName: string) {
  const clean = fileName
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[_-]/g, " ")
    .toLowerCase();

  const translations: Record<string, string> = {
    blue: "Брелок синій",
    green: "Брелок зелений",
    pink: "Брелок рожевий",
    red: "Брелок червоний",
    white: "Брелок білий",
    black: "Брелок чорний",
    chevron: "Шеврон",
  };

  return translations[clean] || clean.charAt(0).toUpperCase() + clean.slice(1);
}

function getPrice(category: string) {
  const prices: Record<string, number> = {
    chevrons: 300,
    keychain: 250,
    keychains: 250,
    stickerpacks: 400,
    flags: 950,
    tshirts: 1500,
  };

  return prices[category] ?? 0;
}

function getFiles(
  folderPath: string,
  publicPath: string,
  categoryKey: string
): ProductItem[] {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => ({
      id: `${categoryKey}-${file}`,
      name: formatFileName(file),
      image: `${publicPath}/${file}`,
      price: getPrice(categoryKey),
    }));
}

export default function CatalogPage() {
  const productsPath = path.join(process.cwd(), "public", "products");
  const flagsPath = path.join(process.cwd(), "public", "flags");

  const keychainItems = getFiles(
    path.join(productsPath, "keychain"),
    "/products/keychain",
    "keychain"
  );

  const keychainsItems = getFiles(
    path.join(productsPath, "keychains"),
    "/products/keychains",
    "keychains"
  );

  const categories: Category[] = [
    {
      title: "Шеврони",
      items: fs.existsSync(path.join(productsPath, "chevron.jpg"))
        ? [
            {
              id: "chevrons-chevron.jpg",
              name: "Шеврон",
              image: "/products/chevron.jpg",
              price: 300,
            },
          ]
        : fs.existsSync(path.join(productsPath, "chevron.png"))
        ? [
            {
              id: "chevrons-chevron.png",
              name: "Шеврон",
              image: "/products/chevron.png",
              price: 300,
            },
          ]
        : [],
    },
    {
      title: "Брелки",
      items: keychainItems.length > 0 ? keychainItems : keychainsItems,
    },
    {
      title: "Стікерпаки",
      items: getFiles(
        path.join(productsPath, "stickerpacks"),
        "/products/stickerpacks",
        "stickerpacks"
      ),
    },
    {
      title: "Прапори",
      items: getFiles(flagsPath, "/flags", "flags"),
    },
    {
      title: "Футболки",
      items: getFiles(
        path.join(productsPath, "tshirts"),
        "/products/tshirts",
        "tshirts"
      ),
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "10px" }}>
          Каталог Corvus
        </h1>

        <p style={{ color: "#aaa", marginBottom: "40px" }}>
          Наш мерч та символіка
        </p>

        {categories.map((category) => (
          <section key={category.title} style={{ marginBottom: "50px" }}>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: 700,
                marginBottom: "20px",
                borderLeft: "4px solid #ff4da6",
                paddingLeft: "10px",
              }}
            >
              {category.title}
            </h2>

            {category.items.length === 0 ? (
              <p style={{ color: "#777" }}>Поки немає товарів</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, 170px)",
                  gap: "16px",
                }}
              >
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      width: "170px",
                      background: "#111",
                      borderRadius: "12px",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "150px",
                        height: "150px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        margin: "0 auto",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div style={{ paddingTop: "10px" }}>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          textAlign: "center",
                          minHeight: "34px",
                        }}
                      >
                        {item.name}
                      </div>

                      <div
                        style={{
                          textAlign: "center",
                          color: "#ff4da6",
                          fontWeight: 700,
                          fontSize: "14px",
                          marginTop: "4px",
                        }}
                      >
                        {item.price} грн
                      </div>

                      <AddToCartButton
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}