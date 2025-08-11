import HeaderBar from "@/components/HeaderBar";
import FooterNav from "@/components/FooterNav";
import SEO from "@/components/SEO";
import { useLanguage } from "@/context/LanguageContext";
import { FolderOpenDot, IdCard, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Methods = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const items = [
    {
      key: "digilocker",
      title: t("digilocker"),
      desc: t("digilockerDesc"),
      icon: <FolderOpenDot className="h-7 w-7" />,
    },
    {
      key: "document",
      title: t("documentUpload"),
      desc: t("documentUploadDesc"),
      icon: <IdCard className="h-7 w-7" />,
    },
    {
      key: "face",
      title: t("faceVerify"),
      desc: t("faceVerifyDesc"),
      icon: <UserRound className="h-7 w-7" />,
    },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="KYC Method Selection" description="Select Digilocker, Document Upload, or Face Verification." />
      <HeaderBar />

      <main className="max-w-md mx-auto px-4 pt-6 pb-24 animate-fade-in">
        <h1 className="text-2xl font-bold mb-4">{t("kycMethod")}</h1>

        <section className="space-y-4">
          {items.map((it) => (
            <button
              key={it.key}
              onClick={() => navigate(`/capture/${it.key}`)}
              className="w-full text-left p-4 rounded-2xl bg-card shadow-card border hover-scale focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl grid place-items-center bg-accent text-accent-foreground">
                  {it.icon}
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold">{it.title}</div>
                  <div className="text-sm text-muted-foreground">{it.desc}</div>
                </div>
              </div>
            </button>
          ))}
        </section>
      </main>

      <FooterNav />
    </div>
  );
};

export default Methods;
