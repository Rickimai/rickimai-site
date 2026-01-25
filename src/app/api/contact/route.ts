import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    if (!SENDGRID_API_KEY) {
      return NextResponse.json({ error: "Missing SendGrid API key" }, { status: 500 });
    }

    const payload = {
      personalizations: [
        {
          to: [{ email: "rick.imai@gmail.com" }],
          subject: subject,
        },
      ],
      from: { email: "no-reply@rickimai.com", name: "rickimai.com" },
      reply_to: { email },
      content: [
        {
          type: "text/plain",
          value: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        },
      ],
    };

    const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text }, { status: res.status });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
