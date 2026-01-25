import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "rick@rickimai.com";
    const from =
      process.env.CONTACT_FROM_EMAIL || "Rick Imai <contact@rickimai.com>";

    const { data, error } = await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `[rickimai.com] ${subject}`,
      text: `Subject: ${subject}\nName: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form exception:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
