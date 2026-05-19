import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/api/email/proposal", async (req, res) => {
  try {
    const { name, email, company, offerAmount, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, email, message",
      });
    }

    const htmlContent = `
      <h2>Nova Proposta para vibing.ia.br</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
      ${offerAmount ? `<p><strong>Valor da Proposta:</strong> R$ ${offerAmount}</p>` : ""}
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: "rodrigomvsrodrigo@gmail.com",
      replyTo: email,
      subject: `Nova Proposta para vibing.ia.br - ${name}`,
      html: htmlContent,
    });

    return res.json({ success: true, message: "Proposta enviada com sucesso!" });
  } catch (error) {
    console.error("Error in /api/email/proposal:", error);
    return res.status(500).json({ success: false, error: "Erro ao processar sua solicitação" });
  }
});

app.post("/api/email/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, email, subject, message",
      });
    }

    const htmlContent = `
      <h2>${subject}</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: "rodrigomvsrodrigo@gmail.com",
      replyTo: email,
      subject: `${subject} - ${name}`,
      html: htmlContent,
    });

    return res.json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Error in /api/email/contact:", error);
    return res.status(500).json({ success: false, error: "Erro ao processar sua solicitação" });
  }
});

export default app;
