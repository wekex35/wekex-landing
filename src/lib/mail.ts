import nodemailer from "nodemailer";

export function createMailTransport() {
  const host = process.env.ZEPTO_MAIL_HOST || "smtp.zeptomail.in";
  const port = Number(process.env.ZEPTO_MAIL_PORT || 587);
  const secure = process.env.ZEPTO_MAIL_SECURE === "true";
  const user = process.env.ZEPTO_MAIL_USER || process.env.MAIL_USER;
  const pass = process.env.ZEPTO_MAIL_PASSWORD || process.env.MAIL_PASS;

  if (!user || !pass) {
    throw new Error("Missing mail credentials (ZEPTO_MAIL_* or MAIL_USER/MAIL_PASS)");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function sendMail(opts: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const transporter = createMailTransport();
  const fromAddr = process.env.ZEPTO_MAIL_FROM || process.env.MAIL_USER;
  const fromName = process.env.ZEPTO_MAIL_FROM_NAME || "Wekex";

  await transporter.sendMail({
    from: fromName ? `"${fromName}" <${fromAddr}>` : fromAddr,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    replyTo: opts.replyTo,
  });
}
