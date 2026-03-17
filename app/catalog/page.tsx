import Image from "next/image";
import fs from "fs";
import path from "path";

type ProductItem = {
  name: string;
  image: string;
};

type Category = {
  title: string;
  items: ProductItem[];
};

function formatFileName(fileName: string) {
  return fileName
    .replace(/\.(jpg|jpeg|png|webp|svg)$/i, "")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function getFilesFromFolder(folderPath: string, publicPath: string): ProductItem[] {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp|svg)$/i.test(file))
    .map((file) => ({
      name: formatFileName(file),
      image: `${publicPath}/${file}`,
    }));
}

export default function CatalogPage() {
  const productsPath = path.join(process.cwd(), "public", "products");
  const flagsPath = path.join(process.cwd(), "public", "flags");

  const categories: Category[] = [
    {
      title: "Шеврони",
      items: fs.existsSync(path.join(productsPath, "chevron.jpg"))
        ? [
            {
              name: "Chevron",
              image: "/products/chevron.jpg",
            },
          ]
        : fs.existsSync(path.join(productsPath, "chevron.png"))
        ? [
            {
              name: "Chevron",
              image: "/products/chevron.png",
            },
          ]
        : [],
    },
    {
      title: "Брелки",
      items: getFilesFromFolder(path.join(productsPath, "keychain"), "/products/keychain"),
    },
    {
      title: "Стікерпаки",
      items: getFilesFromFolder(path.join(productsPath, "stickerpacks"), "/products/stickerpacks"),
    },
    {
      title: "Прапори",
      items: getFilesFromFolder(flagsPath, "/flags"),
    },
    {
      title: "Футболки",
      items: getFilesFromFolder(path.join(productsPath, "tshirts"), "/products/tshirts"),
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "#ffffff",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 800,
            marginBottom: "16px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Каталог Corvus
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#b3b3b3",
            marginBottom: "48px",
          }}
        >
          Наш мерч та символіка
        </p>

        {categories.map((category) => (
          <section key={category.title} style={{ marginBottom: "64px" }}>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 700,
                marginBottom: "24px",
                borderLeft: "4px solid #ff4da6",
                paddingLeft: "12px",
              }}
            >
              {category.title}
            </h2>

            {category.items.length === 0 ? (
              <p
                style={{
                  color: "#7a7a7a",
                  fontSize: "15px",
                }}
              >
                У цій категорії поки немає товарів.
              </p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "24px",
                }}
              >
                {category.items.map((item) => (
                  <div
                    key={item.image}
                    className="catalog-card"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "18px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backgroundColor: "#111111",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "1 / 1",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />

                      <div
                        className="catalog-overlay"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.02) 100%)",
                          display: "flex",
                          alignItems: "flex-end",
                          justifyContent: "flex-start",
                          padding: "16px",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 700,
                            lineHeight: 1.3,
                            textTransform: "capitalize",
                          }}
                        >
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <style>{`
        .catalog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
          border-color: rgba(255, 77, 166, 0.35);
        }

        .catalog-card img {
          transition: transform 0.35s ease;
        }

        .catalog-card:hover img {
          transform: scale(1.06);
        }

        .catalog-card:hover .catalog-overlay {
          opacity: 1;
        }
      `}</style>
    </main>
  );
}