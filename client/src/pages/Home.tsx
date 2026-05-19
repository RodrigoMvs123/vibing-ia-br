import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ContactModal from "@/components/ContactModal";
import EmailModal from "@/components/EmailModal";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Shield,
  Zap,
  Lock,
  Copy,
  ExternalLink,
  MessageCircle,
  Mail,
  CreditCard,
} from "lucide-react";

// DESIGN PHILOSOPHY: Minimalist Black & White
// - Pure black background with white text
// - Clean, elegant, premium aesthetic
// - Asymmetric layout: Left hero text, right pricing card
// - IBM Plex Mono for headings, Inter for body text
// - Smooth animations and transitions
// - Page fits in viewport without scrolling

type Language = "pt" | "en";

const translations = {
  pt: {
    domainForSale: "Domínio à Venda",
    subtitle: "Identidade de IA Brasileira / Vibe Coding",
    description:
      "Um domínio premium de IA focado no Brasil, posicionado para o futuro do vibe coding, startups de IA, comunidades de desenvolvedores, ferramentas criativas e experiências de software de próxima geração.",
    benefits: [
      "Branding premium de IA",
      "Posicionamento no mercado brasileiro",
      "Identidade pronta para startups",
      "Nomeação à prova do futuro",
    ],
    buyNow: "Comprar Agora",
    makeOffer: "Fazer Proposta",
    contactOwner: "Contatar Proprietário",
    price: "R$ 100.000",
    buyerProtection: "Proteção do Comprador",
    fastTransfer: "Transferência Rápida",
    securePayments: "Pagamentos Seguros",
    paymentMethods: "Métodos de Pagamento",
    listedByOwner: "Listado diretamente pelo proprietário",
    getThisDomain: "OBTENHA ESTE DOMÍNIO",
    paymentOptions: "Opções de Pagamento",
    pixSupport: "PIX",
    stripeSupport: "Stripe",
    mercadoPagoSupport: "Mercado Pago",
    whatsappContact: "Contatar via WhatsApp",
    emailContact: "Enviar Email",
  },
  en: {
    domainForSale: "Domain for Sale",
    subtitle: "Brazilian AI / Vibe Coding Identity",
    description:
      "A premium Brazilian AI-focused domain positioned for the future of vibe coding, AI startups, developer communities, creator tools, and next-generation software experiences.",
    benefits: [
      "Premium AI branding",
      "Brazilian market positioning",
      "Startup-ready identity",
      "Future-proof naming",
    ],
    buyNow: "Buy Now",
    makeOffer: "Make Offer",
    contactOwner: "Contact Owner",
    price: "R$ 100,000",
    buyerProtection: "Buyer Protection",
    fastTransfer: "Fast Transfer",
    securePayments: "Secure Payments",
    paymentMethods: "Payment Methods",
    listedByOwner: "Listed directly by owner",
    getThisDomain: "GET THIS DOMAIN",
    paymentOptions: "Payment Options",
    pixSupport: "PIX",
    stripeSupport: "Stripe",
    mercadoPagoSupport: "Mercado Pago",
    whatsappContact: "Contact via WhatsApp",
    emailContact: "Send Email",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [copiedDomain, setCopiedDomain] = useState(false);

  const t = translations[language];

  const handleCopyDomain = () => {
    navigator.clipboard.writeText("vibing.ia.br");
    setCopiedDomain(true);
    setTimeout(() => setCopiedDomain(false), 2000);
  };

  const handleWhatsAppContact = () => {
    window.open("https://wa.me/5516996181167", "_blank");
  };

  const handleEmailContact = () => {
    window.location.href = "mailto:rodrigomvsrodrigo@gmail.com?subject=Interesse no domínio vibing.ia.br";
  };

  const handleStripeCheckout = () => {
    window.open("https://mpago.la/2UKSxsN", "_blank");
  };

  const handleMercadoPagoCheckout = () => {
    console.log("Mercado Pago checkout - TODO: Implement");
    alert("Mercado Pago checkout - Em desenvolvimento");
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden">

      {/* Content */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 md:px-8">
          <div className="text-2xl font-bold font-mono text-white">
            vibing.ia.br
          </div>
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center px-6 md:px-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Hero Text */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h2 className="text-sm md:text-base font-mono text-gray-400 mb-4 tracking-wider">
                  {t.domainForSale}
                </h2>
                <h1 className="text-5xl md:text-7xl font-bold font-mono text-white leading-tight break-words">
                  vibing.ia.br
                </h1>
              </div>

              <p className="text-sm md:text-base text-gray-400 font-mono">
                {t.subtitle}
              </p>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
                {t.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {t.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm md:text-base text-foreground"
                  >
                    <span className="text-white text-lg">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  onClick={handleStripeCheckout}
                  className="bg-white hover:bg-gray-100 text-black font-bold transform hover:scale-105 active:scale-95 transition-transform"
                >
                  {t.buyNow}
                </Button>
                <Button
                  onClick={() => setIsContactModalOpen(true)}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold"
                >
                  {t.makeOffer}
                </Button>
              </div>
            </div>

            {/* Right Side - Pricing Card */}
            <div className="flex justify-center md:justify-end">
              <Card className="w-full max-w-md bg-gray-900 backdrop-blur-sm border-2 border-white/20 shadow-2xl shadow-black/50 hover:shadow-black/70 transition-all duration-300 p-8 md:p-10">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-xs md:text-sm font-mono text-white tracking-widest mb-4">
                      {t.getThisDomain}
                    </h3>
                  </div>

                  {/* Domain Display */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-white/20 group cursor-pointer hover:border-white/40 transition-all">
                    <p className="text-xs text-gray-400 mb-2 font-mono">
                      Domain Name
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-lg md:text-xl font-bold font-mono text-white break-all">
                        vibing.ia.br
                      </p>
                      <button
                        onClick={handleCopyDomain}
                        className="p-2 hover:bg-white/10 rounded transition-colors"
                        title="Copy domain"
                      >
                        <Copy className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    {copiedDomain && (
                      <p className="text-xs text-white mt-2 font-mono">Copied!</p>
                    )}
                  </div>

                  {/* Pricing Options */}
                  <div className="space-y-4">
                    {/* Buy Now Option */}
                    <div
                      onClick={handleStripeCheckout}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-white/20 hover:border-white/40 transition-all cursor-pointer"
                    >
                      <div>
                        <p className="text-sm font-mono text-white">{t.buyNow}</p>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-white">
                        {t.price}
                      </p>
                    </div>

                    {/* Make Offer Option */}
                    <div
                      onClick={() => setIsContactModalOpen(true)}
                      className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-white/20 hover:border-white/40 transition-all cursor-pointer"
                    >
                      <div>
                        <p className="text-sm font-mono text-white">
                          {t.makeOffer}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Negotiate price
                        </p>
                      </div>
                      <p className="text-lg font-mono text-white">→</p>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <p className="text-xs font-mono text-gray-400 mb-3 tracking-wider">
                      {t.paymentMethods}
                    </p>
                    <Button
                      onClick={() => window.open('https://mpago.la/2UKSxsN', '_blank')}
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/50 font-mono text-sm"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      {t.mercadoPagoSupport}
                    </Button>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-2 pt-4 border-t border-white/20">
                    <Button
                      onClick={handleWhatsAppContact}
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/50 font-mono text-sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t.whatsappContact}
                    </Button>
                    <Button
                      onClick={() => setIsEmailModalOpen(true)}
                      className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/50 font-mono text-sm"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {t.emailContact}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/20 bg-black/40 backdrop-blur-sm px-6 md:px-8 py-4">
          <div className="text-center">
            <p className="text-xs text-gray-400 font-mono">
              {t.listedByOwner}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      
      {/* Email Modal */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
}

