import { sendMail } from "@/lib/mail";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(request: Request) {
  try {
    const { name, subject, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const notifyTo = process.env.NOTIFY_EMAIL || "nirmal247live@gmail.com";
    const text = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "—"}\n\n${message}`;

    await sendMail({
      to: notifyTo,
      subject: `Contact Form: ${subject || "Message"}`,
      text,
      replyTo: email,
    });

    await sendMail({
      to: email,
      subject: "Thank you for contacting us",
      text: "Thank you for contacting us. We will get back to you soon.",
    });

    await sendTelegramMessage(
      [
        "<b>✉️ New contact form</b>",
        "",
        `<b>Name:</b> ${String(name).replace(/</g, "&lt;")}`,
        `<b>Email:</b> ${String(email).replace(/</g, "&lt;")}`,
        subject
          ? `<b>Subject:</b> ${String(subject).replace(/</g, "&lt;")}`
          : null,
        "",
        String(message).replace(/</g, "&lt;"),
      ]
        .filter(Boolean)
        .join("\n")
    );

    return Response.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return Response.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
