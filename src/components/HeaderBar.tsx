import { ArrowLeft, HelpCircle, Languages } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

interface HeaderBarProps {
  showBack?: boolean;
  showHelp?: boolean;
}

const HeaderBar = ({ showBack = false, showHelp = true }: HeaderBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const onBack = () => {
    if (location.pathname === "/") return;
    navigate(-1);
  };

  return (
    <header className="w-full sticky top-0 z-20 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showBack ? (
            <button
              aria-label={t("back")}
              onClick={onBack}
              className="h-10 w-10 rounded-full grid place-items-center bg-secondary text-secondary-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : (
            <div className="h-10 w-10" />
          )}
        </div>

        <div className="flex items-center gap-2" aria-label={t("language")}> 
          <Languages className="h-5 w-5 text-muted-foreground" />
          <div className="inline-flex p-1 rounded-full bg-secondary">
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground"
              }`}
            >
              {t("english")}
            </button>
            <button
              onClick={() => setLang("hi")}
              aria-pressed={lang === "hi"}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                lang === "hi" ? "bg-primary text-primary-foreground" : "text-foreground"
              }`}
            >
              {t("hindi")}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {showHelp ? (
            <button
              aria-label={t("help")}
              onClick={() => navigate("/methods")}
              className="h-10 w-10 rounded-full grid place-items-center bg-secondary text-secondary-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <HelpCircle className="h-5 w-5" />
            </button>
          ) : (
            <div className="h-10 w-10" />
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;
