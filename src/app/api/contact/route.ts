import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL!;
    const subj = subject ? `[rickimai.com] ${subject}` : `New contact form message from ${name}`;

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: subj,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json({ error: "Resend failed", details: error }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form exception:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
