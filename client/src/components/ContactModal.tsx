import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    offerAmount: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via backend API
      const response = await fetch("/api/email/proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          offerAmount: formData.offerAmount,
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast.success("Proposta enviada com sucesso!");
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          offerAmount: "",
          message: "",
        });
        onClose();
      } else {
        toast.error(data.error || "Erro ao enviar proposta. Tente novamente.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar proposta. Verifique sua conexão e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-2 border-white/20 shadow-lg shadow-black/50">
        <DialogHeader>
          <DialogTitle className="text-white font-mono">Enviar Proposta</DialogTitle>
          <DialogDescription className="text-gray-400">
            Preencha o formulário abaixo para fazer uma proposta ou entrar em contato
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Nome
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
              className="bg-gray-800 border-white/20 text-white focus:border-white focus:shadow-lg focus:shadow-white/20"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
              className="bg-gray-800 border-white/20 text-white focus:border-white focus:shadow-lg focus:shadow-white/20"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company" className="text-white">
              Empresa (opcional)
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nome da sua empresa"
              className="bg-gray-800 border-white/20 text-white focus:border-white focus:shadow-lg focus:shadow-white/20"
            />
          </div>

          {/* Offer Amount */}
          <div className="space-y-2">
            <Label htmlFor="offerAmount" className="text-white">
              Valor da Proposta (R$)
            </Label>
            <Input
              id="offerAmount"
              name="offerAmount"
              type="number"
              value={formData.offerAmount}
              onChange={handleChange}
              placeholder="Ex: 100000"
              className="bg-gray-800 border-white/20 text-white focus:border-white focus:shadow-lg focus:shadow-white/20"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Mensagem
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte-nos mais sobre sua proposta..."
              rows={4}
              className="bg-gray-800 border-white/20 text-white focus:border-white focus:shadow-lg focus:shadow-white/20 resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-white/50 text-white hover:bg-white/10"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-white hover:bg-gray-100 text-black font-bold"
            >
              {isSubmitting ? "Enviando..." : "Enviar Proposta"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
