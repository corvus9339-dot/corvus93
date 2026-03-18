import Image from "next/image";
import fs from "fs";
import path from "path";
import AddToCartButton from "../components/AddToCartButton";

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
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getFiles(folderPath: string, publicPath: string): ProductItem[] {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
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
        ? [{ name: "Chevron", image: "/products/chevron.jpg" }]
        : [],
    },
    {
      title: "Брелки",
      items: getFiles(path.join(productsPath, "keychains"), "/products/keychains"),
    },
    {
      title: "Стікерпаки",
      items: getFiles(path.join(productsPath, "stickerpacks"), "/products/stickerpacks"),
    },
    {
      title: "Прапори",
      items: getFiles(flagsPath, "/flags"),
    },
    {
      title: "Футболки",
      items: getFiles(path.join(productsPath, "tshirts"), "/products/tshirts"),
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
                  gridTemplateColumns: "repeat(auto-fill, 140px)",
                  gap: "16px",
                }}
              >
                {category.items.map((item) => (
                  <div
                    key={item.image}
                    style={{
                      width: "140px",
                      background: "#111",
                      borderRadius: "12px",
                      padding: "8px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "124px",
                        height: "124px",
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

                    <div style={{ paddingTop: "8px" }}>
                      <div
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          textAlign: "center",
                          minHeight: "32px",
                        }}
                      >
                        {item.name}
                      </div>

                      <AddToCartButton
                        id={item.image}
                        name={item.name}
                        image={item.image}
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