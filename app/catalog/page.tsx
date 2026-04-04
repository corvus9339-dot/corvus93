import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import AddToCartButton from "../components/AddToCartButton";

type ProductVariant = {
  value: string;
  label: string;
  image: string;
};

type ProductItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  description?: string;
  variants?: ProductVariant[];
  variantParamKey?: string;
  selectedVariantValue?: string;
};

type Category = {
  title: string;
  items: ProductItem[];
};

type CatalogPageProps = {
  searchParams?: {
    chevron?: string;
    keychain?: string;
  };
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

function formatVariantLabel(fileName: string, categoryKey: string) {
  const clean = fileName
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[_-]/g, " ")
    .toLowerCase()
    .trim();

  if (categoryKey === "patches") {
    if (clean === "chevron1") return "Дизайн 1";
    if (clean === "chevron2") return "Дизайн 2";
    if (clean === "chevron3") return "Дизайн 3";
    return clean.charAt(0).toUpperCase() + clean.slice(1);
  }

  const translations: Record<string, string> = {
    blue: "Синій",
    green: "Зелений",
    pink: "Рожевий",
    red: "Червоний",
    white: "Білий",
    black: "Чорний",
    chevron1: "Дизайн 1",
    chevron2: "Дизайн 2",
  };

  return translations[clean] || clean.charAt(0).toUpperCase() + clean.slice(1);
}

function getPrice(category: string) {
  const prices: Record<string, number> = {
    chevrons: 300,
    patches: 300,
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

function getVariants(
  folderPath: string,
  publicPath: string,
  categoryKey: string
): ProductVariant[] {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => {
      const value = file.replace(/\.(jpg|jpeg|png|webp)$/i, "");

      return {
        value,
        label: formatVariantLabel(file, categoryKey),
        image: `${publicPath}/${file}`,
      };
    });
}

function fileExists(filePath: string) {
  return fs.existsSync(filePath);
}

function getStickerpackItems(productsPath: string): ProductItem[] {
  const stickerpacks: ProductItem[] = [
    {
      id: "stickerpacks-corvus-red",
      name: "CORVUS FPV Red — Червоний удар",
      image: "/products/stickerpacks/corvus-red.jpg",
      price: 400,
      description:
        "Червоно-чорний стікерпак із бойовим характером та агресивним стилем.",
    },
    {
      id: "stickerpacks-corvus-pink",
      name: "CORVUS FPV Pink — Рожевий штурм",
      image: "/products/stickerpacks/corvus-pink.jpg",
      price: 400,
      description:
        "Яскравий FPV-набір із рожевими акцентами, силою та стильним вайбом.",
    },
    {
      id: "stickerpacks-corvus-blue",
      name: "CORVUS FPV Blue — Синя домінація",
      image: "/products/stickerpacks/corvus-blue.jpg",
      price: 400,
      description:
        "Холодний синій дизайн у технологічному стилі для фанів CORVUS.",
    },
    {
      id: "stickerpacks-nrk-unit",
      name: "NRK UNIT — Наземний контроль",
      image: "/products/stickerpacks/nrk-unit.jpg",
      price: 400,
      description:
        "Потужний стікерпак у стилі ground control, техніки та жорсткого характеру.",
    },
  ];

  return stickerpacks.filter((item) =>
    fileExists(path.join(process.cwd(), "public", item.image.replace(/^\//, "")))
  );
}

function buildVariantHref(
  currentSearchParams: CatalogPageProps["searchParams"],
  key: "chevron" | "keychain",
  value: string
) {
  const params = new URLSearchParams();

  if (currentSearchParams?.chevron) {
    params.set("chevron", currentSearchParams.chevron);
  }

  if (currentSearchParams?.keychain) {
    params.set("keychain", currentSearchParams.keychain);
  }

  params.set(key, value);

  const query = params.toString();
  return query ? `/catalog?${query}` : "/catalog";
}

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  const productsPath = path.join(process.cwd(), "public", "products");
  const flagsPath = path.join(process.cwd(), "public", "flags");

  const patchVariants = getVariants(
    path.join(productsPath, "patches"),
    "/products/patches",
    "patches"
  );

  const keychainFolderA = getVariants(
    path.join(productsPath, "keychain"),
    "/products/keychain",
    "keychain"
  );

  const keychainFolderB = getVariants(
    path.join(productsPath, "keychains"),
    "/products/keychains",
    "keychains"
  );

  const keychainVariants =
    keychainFolderA.length > 0 ? keychainFolderA : keychainFolderB;

  const selectedChevronValue =
    searchParams?.chevron && patchVariants.some((v) => v.value === searchParams.chevron)
      ? searchParams.chevron
      : patchVariants[0]?.value;

  const selectedKeychainValue =
    searchParams?.keychain && keychainVariants.some((v) => v.value === searchParams.keychain)
      ? searchParams.keychain
      : keychainVariants[0]?.value;

  const selectedChevronVariant = patchVariants.find(
    (v) => v.value === selectedChevronValue
  );

  const selectedKeychainVariant = keychainVariants.find(
    (v) => v.value === selectedKeychainValue
  );

  const stickerpackItems = getStickerpackItems(productsPath);

  const categories: Category[] = [
    {
      title: "Шеврони",
      items:
        patchVariants.length > 0
          ? [
              {
                id: "chevrons-main",
                name: "Шеврон",
                image: selectedChevronVariant?.image || patchVariants[0].image,
                price: 300,
                description: "Оберіть дизайн або колір кнопками нижче.",
                variants: patchVariants,
                variantParamKey: "chevron",
                selectedVariantValue: selectedChevronValue,
              },
            ]
          : fs.existsSync(path.join(productsPath, "chevron.jpg"))
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
      items:
        keychainVariants.length > 0
          ? [
              {
                id: "keychain-main",
                name: "Брелок",
                image: selectedKeychainVariant?.image || keychainVariants[0].image,
                price: keychainVariants[0]
                  ? getPrice("keychains")
                  : 250,
                description: "Оберіть колір кнопками нижче.",
                variants: keychainVariants,
                variantParamKey: "keychain",
                selectedVariantValue: selectedKeychainValue,
              },
            ]
          : [],
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
                {category.items.map((item) => {
                  const selectedVariant = item.variants?.find(
                    (variant) => variant.value === item.selectedVariantValue
                  );

                  const cartName =
                    item.variants && selectedVariant
                      ? `${item.name} — ${selectedVariant.label}`
                      : item.name;

                  return (
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
                              minHeight: item.variants ? "34px" : "52px",
                              marginTop: "8px",
                            }}
                          >
                            {item.description}
                          </div>
                        )}

                        {item.variants && item.variantParamKey && (
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px",
                              justifyContent: "center",
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            {item.variants.map((variant) => {
                              const isActive =
                                item.selectedVariantValue === variant.value;

                              return (
                                <Link
                                  key={variant.value}
                                  href={buildVariantHref(
                                    searchParams,
                                    item.variantParamKey as "chevron" | "keychain",
                                    variant.value
                                  )}
                                  style={{
                                    padding: "6px 10px",
                                    borderRadius: "999px",
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    textDecoration: "none",
                                    color: "#fff",
                                    border: isActive
                                      ? "1px solid #ff4da6"
                                      : "1px solid #2b2b2b",
                                    background: isActive ? "#2a1020" : "#181818",
                                  }}
                                >
                                  {variant.label}
                                </Link>
                              );
                            })}
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
                          id={
                            item.variants && selectedVariant
                              ? `${item.id}-${selectedVariant.value}`
                              : item.id
                          }
                          name={cartName}
                          image={item.image}
                          price={item.price}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}