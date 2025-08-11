import HeaderBar from "@/components/HeaderBar";
import FooterNav from "@/components/FooterNav";
import SEO from "@/components/SEO";
import { useLanguage } from "@/context/LanguageContext";
import illustration from "@/assets/welcome-illustration.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const { t, lang, setLang } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Welcome / स्वागत है" description="Welcome screen for lightweight KYC app prototype with bilingual support." />
      <HeaderBar />

      <main className="max-w-md mx-auto px-4 pt-6 pb-24 animate-fade-in">
        <h1 className="text-3xl font-bold text-center mb-2">
          {t("welcome")} / स्वागत है
        </h1>
        <p className="text-center text-muted-foreground mb-6">{t("appName")}</p>

        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1 rounded-full bg-secondary shadow-sm">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-2 rounded-full font-medium ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-4 py-2 rounded-full font-medium ${
                lang === "hi" ? "bg-primary text-primary-foreground" : "text-foreground"
              }`}
            >
              हिंदी
            </button>
          </div>
        </div>

        <section className="w-full aspect-square rounded-2xl overflow-hidden bg-secondary/60 flex items-center justify-center shadow-elevate mb-8">
          <img
            src={illustration}
            alt="Friendly illustration of people using a smartphone in rural India"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </section>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/methods")}
            className="w-full max-w-sm rounded-full px-6 py-4 bg-primary text-primary-foreground text-lg font-semibold shadow-cta hover-scale focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {t("continue")}
          </button>
        </div>
      </main>

      <FooterNav />
    </div>
  );
};

export default Welcome;
