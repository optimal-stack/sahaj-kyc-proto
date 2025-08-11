import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Language = "en" | "hi";

type Translations = Record<string, { en: string; hi: string }>;

const translations: Translations = {
  appName: { en: "Lightweight KYC", hi: "लाइटवेट KYC" },
  welcome: { en: "Welcome", hi: "स्वागत है" },
  continue: { en: "Continue", hi: "जारी रखें" },
  language: { en: "Language", hi: "भाषा" },
  english: { en: "English", hi: "English" },
  hindi: { en: "Hindi", hi: "हिंदी" },

  kycMethod: { en: "Choose KYC Method", hi: "KYC विधि चुनें" },
  digilocker: { en: "Digilocker", hi: "डिजिलॉकर" },
  digilockerDesc: { en: "Sign in to fetch documents", hi: "दस्तावेज़ लाने के लिए साइन-इन करें" },
  documentUpload: { en: "Document Upload", hi: "दस्तावेज़ अपलोड" },
  documentUploadDesc: { en: "Scan Aadhaar/PAN/ID", hi: "आधार/पैन/आईडी स्कैन करें" },
  faceVerify: { en: "Face Verification", hi: "चेहरा सत्यापन" },
  faceVerifyDesc: { en: "Align face and capture", hi: "चेहरा मिलाएँ और कैप्चर करें" },

  placeId: { en: "Place your ID in the frame", hi: "अपनी पहचान पत्र को फ्रेम में रखें" },
  alignFace: { en: "Align your face inside the circle", hi: "अपना चेहरा सर्कल के अंदर रखें" },
  back: { en: "Back", hi: "वापस" },
  help: { en: "Help", hi: "सहायता" },

  kycCompleted: { en: "KYC Completed", hi: "KYC पूर्ण हुआ" },
  trustVerified: { en: "Trust Verified", hi: "ट्रस्ट वेरिफाइड" },
  returnHome: { en: "Return to Home", hi: "होम पर लौटें" },
};

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: keyof typeof translations) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: keyof typeof translations) => translations[key][lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
