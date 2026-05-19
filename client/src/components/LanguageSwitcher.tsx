import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  currentLanguage: "pt" | "en";
  onLanguageChange: (language: "pt" | "en") => void;
}

export default function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onLanguageChange("pt")}
        className={`text-sm font-mono transition-all ${
          currentLanguage === "pt"
            ? "text-white"
            : "text-gray-400 hover:text-gray-300"
        }`}
      >
        PT
      </Button>
      <span className="text-gray-400">/</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onLanguageChange("en")}
        className={`text-sm font-mono transition-all ${
          currentLanguage === "en"
            ? "text-white"
            : "text-gray-400 hover:text-gray-300"
        }`}
      >
        EN
      </Button>
    </div>
  );
}
