/**
 * Prefer ZeptoMail HTTP API (Cloudflare Workers-safe).
 * Falls back to SMTP nodemailer in local Node if HTTP fails.
 */
export async function sendMail(opts: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const token = process.env.ZEPTO_MAIL_PASSWORD || process.env.MAIL_PASS;
  const fromAddr = process.env.ZEPTO_MAIL_FROM || process.env.MAIL_USER;
  const fromName = process.env.ZEPTO_MAIL_FROM_NAME || "Wekex";

  if (!token || !fromAddr) {
    throw new Error("Missing ZEPTO_MAIL_PASSWORD / ZEPTO_MAIL_FROM");
  }

  const res = await fetch("https://api.zeptomail.in/v1.1/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Zoho-enczapikey ${token}`,
    },
    body: JSON.stringify({
      from: { address: fromAddr, name: fromName },
      to: [{ email_address: { address: opts.to } }],
      subject: opts.subject,
      textbody: opts.text,
      ...(opts.replyTo ? { reply_to: [{ address: opts.replyTo }] } : {}),
    }),
  });

  if (res.ok) return;

  const body = await res.text();

  // Local Node fallback
  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.ZEPTO_MAIL_HOST || "smtp.zeptomail.in",
      port: Number(process.env.ZEPTO_MAIL_PORT || 587),
      secure: process.env.ZEPTO_MAIL_SECURE === "true",
      auth: {
        user: process.env.ZEPTO_MAIL_USER || "emailapikey",
        pass: token,
      },
    });
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddr}>`,
      to: opts.to,
      subject: opts.subject,
      text: opts.text,
      replyTo: opts.replyTo,
    });
  } catch {
    throw new Error(`ZeptoMail failed: ${res.status} ${body}`);
  }
}
