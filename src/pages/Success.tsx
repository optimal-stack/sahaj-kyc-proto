import HeaderBar from "@/components/HeaderBar";
import FooterNav from "@/components/FooterNav";
import SEO from "@/components/SEO";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEO title="KYC Completed" description="KYC completed successfully. Trust Verified." />
      <div className="confetti absolute inset-0 pointer-events-none" aria-hidden="true" />
      <HeaderBar />

      <main className="max-w-md mx-auto px-4 pt-10 pb-24 relative">
        <div className="grid place-items-center text-center animate-scale-in">
          <CheckCircle2 className="h-24 w-24 text-primary" aria-hidden />
          <h1 className="text-3xl font-bold mt-4">{t("kycCompleted")}</h1>
          <p className="text-lg text-muted-foreground">KYC पूर्ण हुआ</p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium">
            <ShieldCheck className="h-4 w-4" />
            <span>{t("trustVerified")}</span>
          </div>

          <button
            onClick={() => navigate("/methods")}
            className="mt-10 w-full max-w-sm rounded-full px-6 py-4 bg-accent text-accent-foreground text-lg font-semibold shadow-card hover-scale focus:outline-none focus:ring-2 focus:ring-ring"
          >
            {t("returnHome")}
          </button>
        </div>
      </main>

      <FooterNav />
    </div>
  );
};

export default Success;
