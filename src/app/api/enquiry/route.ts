import { NextResponse } from "next/server";
import { BRAND } from "@/lib/constants";

type EnquiryBody = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: EnquiryBody;

  try {
    body = (await request.json()) as EnquiryBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !phone || !projectType || !message) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const payload = {
    name,
    email,
    phone,
    projectType,
    message,
    submittedAt: new Date().toISOString(),
    to: BRAND.email,
  };

  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!webhookRes.ok) {
        console.error("Enquiry webhook failed:", webhookRes.status, await webhookRes.text());
        return NextResponse.json(
          { ok: false, error: "Unable to deliver enquiry. Please call us directly." },
          { status: 502 }
        );
      }
    } catch (err) {
      console.error("Enquiry webhook error:", err);
      return NextResponse.json(
        { ok: false, error: "Unable to deliver enquiry. Please call us directly." },
        { status: 502 }
      );
    }
  } else if (process.env.NODE_ENV === "development") {
    console.info("[enquiry]", payload);
  } else {
    console.warn("[enquiry] ENQUIRY_WEBHOOK_URL not set — submission accepted but not forwarded");
  }

  return NextResponse.json({ ok: true });
}
