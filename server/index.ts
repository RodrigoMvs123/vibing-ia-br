import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendProposalEmail, sendContactEmail } from "./email.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Email endpoints
  app.post("/api/email/proposal", async (req, res) => {
    try {
      const { name, email, company, offerAmount, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error: "Missing required fields: name, email, message",
        });
      }

      // Send email
      const success = await sendProposalEmail({
        senderName: name,
        senderEmail: email,
        company: company || undefined,
        offerAmount: offerAmount || undefined,
        message,
      });

      if (success) {
        return res.json({
          success: true,
          message: "Proposta enviada com sucesso!",
        });
      } else {
        return res.status(500).json({
          success: false,
          error: "Erro ao enviar proposta. Tente novamente.",
        });
      }
    } catch (error) {
      console.error("Error in /api/email/proposal:", error);
      return res.status(500).json({
        success: false,
        error: "Erro ao processar sua solicitação",
      });
    }
  });

  app.post("/api/email/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          error: "Missing required fields: name, email, subject, message",
        });
      }

      // Send email
      const success = await sendContactEmail({
        senderName: name,
        senderEmail: email,
        subject,
        message,
      });

      if (success) {
        return res.json({
          success: true,
          message: "Email enviado com sucesso!",
        });
      } else {
        return res.status(500).json({
          success: false,
          error: "Erro ao enviar email. Tente novamente.",
        });
      }
    } catch (error) {
      console.error("Error in /api/email/contact:", error);
      return res.status(500).json({
        success: false,
        error: "Erro ao processar sua solicitação",
      });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
