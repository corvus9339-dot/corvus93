import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function CorvusWebsite() {
  const [cartCount, setCartCount] = useState(0);
  const [lang, setLang] = useState("EN");

  const t = {
    EN: {
      nav: { about: "About", shop: "Shop", join: "Join", support: "Support" },
      heroTitle: "CORVUS",
      heroText:
        "Drone pilot unit. Precision. Technology. Advantage. Official merchandise & recruitment platform.",
      apply: "Apply Now",
      shopBtn: "Shop Merch",
      aboutTitle: "About CORVUS",
      aboutText:
        "CORVUS is an autonomous drone pilot brand operating as a structural unit within the 93rd Separate Mechanized Brigade of the Armed Forces of Ukraine. We provide aerial reconnaissance, operational intelligence and technological superiority on the battlefield while building an independent technological identity.",
      merchTitle: "Official Merchandise",
      joinTitle: "Join CORVUS",
      supportTitle: "Partner With CORVUS",
      donate: "Contact for Partnership",
      submit: "Submit Application",
      name: "Full Name",
      email: "Email",
      message: "Tell us about your experience",
      add: "Add to cart",
    },
    UA: {
      nav: { about: "Про нас", shop: "Мерч", join: "Рекрутинг", support: "Підтримати" },
      heroTitle: "CORVUS",
      heroText:
        "Підрозділ пілотів БПЛА. Точність. Технології. Перевага. Офіційний мерч та рекрутинг.",
      apply: "Подати заявку",
      shopBtn: "Купити мерч",
      aboutTitle: "Про CORVUS",
      aboutText:
        "CORVUS — автономний бренд підрозділу пілотів безпілотних систем у структурі 93 ОМБр ЗСУ. Ми забезпечуємо аеророзвідку, аналітику та технологічну перевагу на полі бою, формуючи власну технологічну ідентичність.",
      merchTitle: "Офіційний мерч",
      joinTitle: "Приєднатися до CORVUS",
      supportTitle: "Співпраця з CORVUS",
      donate: "Зв'язатися щодо співпраці",
      submit: "Надіслати заявку",
      name: "ПІБ",
      email: "Email",
      message: "Опишіть ваш досвід",
      add: "Додати в кошик",
    },
  };

  const products = [
    { id: 1, name: "T‑Shirt CORVUS", price: "€35 / 1200 грн" },
    { id: 2, name: "Hoodie CORVUS", price: "€75 / 2500 грн" },
    { id: 3, name: "Patch CORVUS", price: "€10 / 350 грн" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold tracking-widest">CORVUS93.COM</div>
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">{t[lang].nav.about}</a>
            <a href="#shop" className="hover:text-white">{t[lang].nav.shop}</a>
            <a href="#join" className="hover:text-white">{t[lang].nav.join}</a>
            <a href="#support" className="hover:text-white">{t[lang].nav.support}</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "EN" ? "UA" : "EN")}
              className="text-xs border px-3 py-1 rounded-full"
            >
              {lang}
            </button>
            <div className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <span className="text-sm">{cartCount}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 bg-gradient-to-b from-black to-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-wider"
        >
          {t[lang].heroTitle}
        </motion.h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          {t[lang].heroText}
        </p>
        <div className="mt-10 flex gap-4">
          <Button className="rounded-2xl px-8" asChild>
            <a href="#join">{t[lang].apply}</a>
          </Button>
          <Button variant="outline" className="rounded-2xl px-8" asChild>
            <a href="#shop">{t[lang].shopBtn}</a>
          </Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t[lang].aboutTitle}</h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {t[lang].aboutText}
        </p>
      </section>

      {/* Shop */}
      <section id="shop" className="bg-gray-950 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">{t[lang].merchTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-gray-900 border-gray-800 rounded-2xl">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="font-bold mb-4">{product.price}</p>
                  </div>
                  <Button
                    className="rounded-2xl"
                    onClick={() => setCartCount(cartCount + 1)}
                  >
                    {t[lang].add}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment */}
      <section id="join" className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">{t[lang].joinTitle}</h2>
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder={t[lang].name}
            required
            className="w-full p-4 rounded-2xl bg-gray-900 border border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder={t[lang].email}
            required
            className="w-full p-4 rounded-2xl bg-gray-900 border border-gray-700"
          />
          <textarea
            name="message"
            placeholder={t[lang].message}
            rows="5"
            className="w-full p-4 rounded-2xl bg-gray-900 border border-gray-700"
          ></textarea>
          <Button type="submit" className="w-full rounded-2xl py-4 text-lg">
            {t[lang].submit}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Applications are securely processed. We will contact selected candidates directly.
          </p>
        </form>
      </section>

      {/* Support */}
      <section id="support" className="bg-gray-950 px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">{t[lang].supportTitle}</h2>
        <Button className="rounded-2xl px-10 py-3 text-lg" asChild>
          <a href="mailto:contact@corvus93.com">{t[lang].donate}</a>
        </Button>
      </section>

      <footer className="bg-black border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CORVUS | corvus93.com
      </footer>
    </div>
  );
}
