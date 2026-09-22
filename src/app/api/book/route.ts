import { sendMail } from "@/lib/mail";
import { sendTelegramMessage } from "@/lib/telegram";

export type BookNiche = "clinic" | "property";

type BookBody = {
  niche: BookNiche;
  name: string;
  email: string;
  phone?: string;
  orgName: string;
  location: string;
  website?: string;
  teamSize?: string;
  date: string;
  time: string;
  timezone: string;
  goal?: string;
  notes?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookBody;
    const {
      niche,
      name,
      email,
      phone,
      orgName,
      location,
      website,
      teamSize,
      date,
      time,
      timezone,
      goal,
      notes,
    } = body;

    if (!niche || !name || !email || !orgName || !location || !date || !time || !timezone) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (niche !== "clinic" && niche !== "property") {
      return Response.json({ error: "Invalid niche" }, { status: 400 });
    }

    const label = niche === "clinic" ? "Clinic" : "Property";
    const orgLabel = niche === "clinic" ? "Clinic" : "Brokerage";
    const locLabel = niche === "clinic" ? "Country" : "City";

    const lines = [
      `New ${label} fit call request`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `${orgLabel}: ${orgName}`,
      `${locLabel}: ${location}`,
      website ? `Website: ${website}` : null,
      teamSize ? `Team size: ${teamSize}` : null,
      `Preferred date: ${date}`,
      `Preferred time: ${time}`,
      `Timezone: ${timezone}`,
      goal ? `Goal: ${goal}` : null,
      notes ? `Notes: ${notes}` : null,
    ].filter(Boolean) as string[];

    const text = lines.join("\n");

    const telegram = [
      `<b>${niche === "clinic" ? "🩺" : "🏠"} New ${escapeHtml(label)} fit call</b>`,
      ``,
      `<b>Name:</b> ${escapeHtml(name)}`,
      `<b>Email:</b> ${escapeHtml(email)}`,
      phone ? `<b>Phone:</b> ${escapeHtml(phone)}` : null,
      `<b>${escapeHtml(orgLabel)}:</b> ${escapeHtml(orgName)}`,
      `<b>${escapeHtml(locLabel)}:</b> ${escapeHtml(location)}`,
      website ? `<b>Website:</b> ${escapeHtml(website)}` : null,
      teamSize ? `<b>Team size:</b> ${escapeHtml(teamSize)}` : null,
      `<b>When:</b> ${escapeHtml(date)} · ${escapeHtml(time)} (${escapeHtml(timezone)})`,
      goal ? `<b>Goal:</b> ${escapeHtml(goal)}` : null,
      notes ? `<b>Notes:</b> ${escapeHtml(notes)}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const notifyTo = process.env.NOTIFY_EMAIL || "nirmal247live@gmail.com";

    await sendMail({
      to: notifyTo,
      subject: `${label} fit call — ${name} · ${date} ${time}`,
      text,
      replyTo: email,
    });

    await sendMail({
      to: email,
      subject: `Fit call received — Wekex ${label}`,
      text: `Hi ${name},\n\nThanks for booking a 15-min fit call. We received:\n\n${date} at ${time} (${timezone})\n\nWe'll confirm shortly.\n\n— Wekex`,
    });

    const telegramOk = await sendTelegramMessage(telegram);

    return Response.json({ success: true, telegram: telegramOk });
  } catch (error) {
    console.error("Book fit error:", error);
    return Response.json(
      {
        error: "Failed to submit booking",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
