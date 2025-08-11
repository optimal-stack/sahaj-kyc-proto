import type { ReactNode } from "react";
import { HelpCircle, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FooterNav = ({ children }: { children?: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <footer className="w-full sticky bottom-0 z-20 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-t">
      <div className="max-w-md mx-auto px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] flex items-center justify-between">
        <button
          onClick={() => navigate("/methods")}
          className="flex items-center gap-2 text-sm text-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring rounded-full px-3 py-2 bg-secondary"
        >
          <Home className="h-5 w-5" />
          <span className="font-medium">Home</span>
        </button>

        {children}

        <button
          onClick={() => navigate("/methods")}
          className="flex items-center gap-2 text-sm text-foreground hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring rounded-full px-3 py-2 bg-secondary"
        >
          <HelpCircle className="h-5 w-5" />
          <span className="font-medium">Help</span>
        </button>
      </div>
    </footer>
  );
};

export default FooterNav;
