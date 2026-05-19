import nodemailer from "nodemailer";

// Create transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

interface ProposalEmailData {
  senderName: string;
  senderEmail: string;
  company?: string;
  offerAmount?: string;
  message: string;
}

interface ContactEmailData {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
}

export async function sendProposalEmail(data: ProposalEmailData): Promise<boolean> {
  try {
    const htmlContent = `
      <h2>Nova Proposta para vibing.ia.br</h2>
      <p><strong>Nome:</strong> ${data.senderName}</p>
      <p><strong>Email:</strong> ${data.senderEmail}</p>
      ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ""}
      ${data.offerAmount ? `<p><strong>Valor da Proposta:</strong> R$ ${data.offerAmount}</p>` : ""}
      <p><strong>Mensagem:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: "rodrigomvsrodrigo@gmail.com",
      replyTo: data.senderEmail,
      subject: `Nova Proposta para vibing.ia.br - ${data.senderName}`,
      html: htmlContent,
    });

    return true;
  } catch (error) {
    console.error("Error sending proposal email:", error);
    return false;
  }
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    const htmlContent = `
      <h2>${data.subject}</h2>
      <p><strong>Nome:</strong> ${data.senderName}</p>
      <p><strong>Email:</strong> ${data.senderEmail}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: "rodrigomvsrodrigo@gmail.com",
      replyTo: data.senderEmail,
      subject: `${data.subject} - ${data.senderName}`,
      html: htmlContent,
    });

    return true;
  } catch (error) {
    console.error("Error sending contact email:", error);
    return false;
  }
}
