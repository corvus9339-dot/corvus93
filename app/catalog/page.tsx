import fs from "fs";
import path from "path";
import CatalogClient, {
  CatalogCategory,
  CatalogProduct,
  CatalogVariant,
} from "./CatalogClient";

function formatFileName(fileName: string) {
  const clean = fileName
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[_-]/g, " ")
    .trim();

  const lower = clean.toLowerCase();

  const translations: Record<string, string> = {
    blue: "Брелок синій",
    green: "Брелок зелений",
    pink: "Брелок рожевий",
    red: "Брелок червоний",
    white: "Брелок білий",
    black: "Брелок чорний",
    chevron: "Шеврон",
  };

  return translations[lower] || clean.charAt(0).toUpperCase() + clean.slice(1);
}

function formatVariantLabel(fileName: string, group: string) {
  const clean = fileName
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[_-]/g, " ")
    .trim();

  const lower = clean.toLowerCase();

  if (group === "patches") {
    const patchMap: Record<string, string> = {
      chevron1: "Дизайн 1",
      chevron2: "Дизайн 2",
      chevron3: "Дизайн 3",
      chevron4: "Дизайн 4",
    };

    return patchMap[lower] || clean;
  }

  if (group === "keychains" || group === "keychain") {
    const keychainMap: Record<string, string> = {
      blue: "Синій",
      green: "Зелений",
      pink: "Рожевий",
      red: "Червоний",
      white: "Білий",
      black: "Чорний",
    };

    return keychainMap[lower] || clean;
  }

  if (group === "flags") {
    const flagMap: Record<string, string> = {
      "corvus holo": "Corvus Holo",
      corvus_holo: "Corvus Holo",
      "kryla pomsty": "Крила помсти",
      kryla_pomsty: "Крила помсти",
      "nebesna kara": "Небесна кара",
      nebesna_kara: "Небесна кара",
      "незламний донбас": "Незламний Донбас",
      "стрілецький батальйон": "Стрілецький батальйон",
    };

    return flagMap[lower] || clean;
  }

  if (group === "stickerpacks") {
    const stickerMap: Record<string, string> = {
      "corvus red": "Corvus Red",
      "corvus pink": "Corvus Pink",
      "corvus blue": "Corvus Blue",
      "nrk unit": "NRK Unit",
      "corvus fpv red": "Corvus FPV Red",
      "corvus fpv pink": "Corvus FPV Pink",
      "corvus fpv blue": "Corvus FPV Blue",
    };

    return stickerMap[lower] || clean;
  }

  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function getPrice(category: string) {
  const prices: Record<string, number> = {
    patches: 300,
    chevrons: 400,
    keychain: 250,
    keychains: 250,
    stickerpacks: 450,
    flags: 1500,
    tshirts: 1500,
  };

  return prices[category] ?? 0;
}

function getFiles(
  folderPath: string,
  publicPath: string,
  categoryKey: string
): CatalogProduct[] {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => ({
      id: `${categoryKey}-${file}`,
      name: formatFileName(file),
      image: `${publicPath}/${file}`,
      price: getPrice(categoryKey),
      type: "single" as const,
    }));
}

function getVariants(
  folderPath: string,
  publicPath: string,
  group: string
): CatalogVariant[] {
  if (!fs.existsSync(folderPath)) return [];

  return fs
    .readdirSync(folderPath)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => ({
      id: file.replace(/\.(jpg|jpeg|png|webp)$/i, ""),
      label: formatVariantLabel(file, group),
      image: `${publicPath}/${file}`,
    }));
}

export default function CatalogPage() {
  const productsPath = path.join(process.cwd(), "public", "products");

  const patchVariants = getVariants(
    path.join(productsPath, "patches"),
    "/products/patches",
    "patches"
  );

  const keychainVariantsA = getVariants(
    path.join(productsPath, "keychain"),
    "/products/keychain",
    "keychain"
  );

  const keychainVariantsB = getVariants(
    path.join(productsPath, "keychains"),
    "/products/keychains",
    "keychains"
  );

  const keychainVariants =
    keychainVariantsA.length > 0 ? keychainVariantsA : keychainVariantsB;

  const flagVariants = getVariants(
    path.join(productsPath, "flags"),
    "/products/flags",
    "flags"
  );

  const stickerpackVariants = getVariants(
    path.join(productsPath, "stickerpacks"),
    "/products/stickerpacks",
    "stickerpacks"
  );

  const tshirtItems = getFiles(
    path.join(productsPath, "tshirts"),
    "/products/tshirts",
    "tshirts"
  );

  const categories: CatalogCategory[] = [
    {
      title: "Шеврони",
      items:
        patchVariants.length > 0
          ? [
              {
                id: "patches-main",
                name: "Шеврон",
                image: patchVariants[0].image,
                price: getPrice("patches"),
                description: "Оберіть дизайн кнопками нижче.",
                type: "grouped",
                variants: patchVariants,
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
                id: "keychains-main",
                name: "Брелок",
                image: keychainVariants[0].image,
                price: getPrice("keychains"),
                description: "Оберіть колір кнопками нижче.",
                type: "grouped",
                variants: keychainVariants,
              },
            ]
          : [],
    },
    {
      title: "Стікерпаки",
      items:
        stickerpackVariants.length > 0
          ? [
              {
                id: "stickerpacks-main",
                name: "Стікерпак",
                image: stickerpackVariants[0].image,
                price: getPrice("stickerpacks"),
                description: "Оберіть дизайн кнопками нижче.",
                type: "grouped",
                variants: stickerpackVariants,
              },
            ]
          : [],
    },
    {
      title: "Прапори",
      items:
        flagVariants.length > 0
          ? [
              {
                id: "flags-main",
                name: "Прапор",
                image: flagVariants[0].image,
                price: getPrice("flags"),
                description: "Оберіть дизайн кнопками нижче.",
                type: "grouped",
                variants: flagVariants,
              },
            ]
          : [],
    },
    {
      title: "Футболки",
      items: tshirtItems,
    },
  ];

  return <CatalogClient categories={categories} />;
}