import Image from "next/image";
import fs from "fs";
import path from "path";
import AddToCartButton from "../components/AddToCartButton";

type ProductItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
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

function fileExists(filePath: string) {
  return fs.existsSync(filePath);
}

function getStickerpackItems(productsPath: string): ProductItem[] {
  const stickerpacksPath = path.join(productsPath, "stickerpacks");

  const stickerpacks: ProductItem[] = [
    {
      id: "stickerpacks-corvus-red",
      name: "CORVUS FPV Red — Червоний удар",
      image: "/products/stickerpacks/corvus-red.jpg",
      price: 400,
      description: "Червоно-чорний стікерпак із бойовим характером та агресивним стилем.",
    },
    {
      id: "stickerpacks-corvus-pink",
      name: "CORVUS FPV Pink — Рожевий штурм",
      image: "/products/stickerpacks/corvus-pink.jpg",
      price: 400,
      description: "Яскравий FPV-набір із рожевими акцентами, силою та стильним вайбом.",
    },
    {
      id: "stickerpacks-corvus-blue",
      name: "CORVUS FPV Blue — Синя домінація",
      image: "/products/stickerpacks/corvus-blue.jpg",
      price: 400,
      description: "Холодний синій дизайн у технологічному стилі для фанів CORVUS.",
    },
    {
      id: "stickerpacks-nrk-unit",
      name: "NRK UNIT — Наземний контроль",
      image: "/products/stickerpacks/nrk-unit.jpg",
      price: 400,
      description: "Потужний стікерпак у стилі ground control, техніки та жорсткого характеру.",
    },
  ];

  return stickerpacks.filter((item) =>
    fileExists(path.join(process.cwd(), "public", item.image.replace(/^\//, "")))
  );
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

  const stickerpackItems = getStickerpackItems(productsPath);

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
      items: stickerpackItems,
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
                  gridTemplateColumns: "repeat(auto-fill, 220px)",
                  gap: "18px",
                }}
              >
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      width: "220px",
                      background: "#111",
                      borderRadius: "14px",
                      padding: "12px",
                      border: "1px solid #1f1f1f",
                    }}
                  >
                    <a
                      href={item.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        textDecoration: "none",
                      }}
                      title="Відкрити фото"
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "196px",
                          height: "196px",
                          borderRadius: "10px",
                          overflow: "hidden",
                          margin: "0 auto",
                          cursor: "zoom-in",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </a>

                    <div style={{ paddingTop: "12px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          textAlign: "center",
                          minHeight: "40px",
                          lineHeight: 1.3,
                        }}
                      >
                        {item.name}
                      </div>

                      {item.description && (
                        <div
                          style={{
                            textAlign: "center",
                            color: "#aaa",
                            fontSize: "12px",
                            lineHeight: 1.4,
                            minHeight: "52px",
                            marginTop: "8px",
                          }}
                        >
                          {item.description}
                        </div>
                      )}

                      <div
                        style={{
                          textAlign: "center",
                          color: "#ff4da6",
                          fontWeight: 700,
                          fontSize: "15px",
                          marginTop: "8px",
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