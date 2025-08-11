import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeaderBar from "@/components/HeaderBar";
import FooterNav from "@/components/FooterNav";
import SEO from "@/components/SEO";
import { useLanguage } from "@/context/LanguageContext";

const Capture = () => {
  const { mode = "document" } = useParams();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const start = async () => {
      try {
        const facingMode = mode === "face" ? "user" : "environment";
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode },
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (e) {
        console.error(e);
        setError("Camera unavailable. This is a prototype; proceeding without live preview.");
      }
    };
    start();
    return () => {
      const tracks = (videoRef.current?.srcObject as MediaStream | null)?.getTracks();
      tracks?.forEach((t) => t.stop());
    };
  }, [mode]);

  const instruction = mode === "face" ? `${t("alignFace")} / ${t("alignFace")}` : `${t("placeId")} / ${t("placeId")}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO title="Capture" description="Capture document or face for KYC verification." />
      <HeaderBar showBack showHelp />

      <main className="max-w-md mx-auto px-0 pt-2 pb-28">
        <h1 className="sr-only">Capture - KYC</h1>
        <div className="px-4 mb-2 text-center text-sm text-muted-foreground">
          {instruction}
        </div>

        <section className="relative w-full aspect-[9/16] bg-black overflow-hidden">
          {error ? (
            <div className="absolute inset-0 grid place-items-center text-center text-card-foreground bg-card p-6">
              <p className="text-sm">{error}</p>
            </div>
          ) : (
            <video ref={videoRef} playsInline muted className="absolute inset-0 w-full h-full object-cover" />
          )}

          {/* Overlay Frame */}
          {mode === "face" ? (
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="h-64 w-64 rounded-full border-4 border-primary/80 shadow-[0_0_0_9999px_rgba(0,0,0,0.45)]" />
            </div>
          ) : (
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="h-64 w-72 rounded-xl border-4 border-primary/80 shadow-[0_0_0_9999px_rgba(0,0,0,0.45)]" />
            </div>
          )}
        </section>

        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setTimeout(() => navigate("/success"), 350)}
            className="h-20 w-20 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-cta hover-scale focus:outline-none focus:ring-4 focus:ring-ring"
            aria-label="Capture"
          >
            <span className="h-10 w-10 rounded-full bg-primary-foreground/20 block" />
          </button>
        </div>
      </main>

      <FooterNav />
    </div>
  );
};

export default Capture;
