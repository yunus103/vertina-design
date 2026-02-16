"use server";

import { Resend } from "resend";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";
import { client } from "@/sanity/lib/client";

export async function sendContactEmail(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing from environment variables.");
    return { error: "Sunucu Yapılandırma Hatası: API Anahtarı eksik." };
  }

  const resend = new Resend(apiKey);

  // 1. Validate data on server side
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      error: "Geçersiz form verileri.",
      details: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, surname, email, message } = validatedFields.data;

  try {
    // 2. Fetch the recipient email from Sanity settings
    const landingPage = await client.fetch(
      `*[_type == "landingPage"][0]{ iletisim { eposta } }`,
    );
    const recipientEmail =
      landingPage?.iletisim?.eposta || "info@vertinadesign.com";

    // 3. Send the email via Resend
    const { data: resendData, error } = await resend.emails.send({
      from: "Vertina Design <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: `Yeni İletişim Formu Mesajı: ${name} ${surname}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #5a189a; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${name} ${surname}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #5a189a;">
            <p><strong>Mesaj:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            Bu e-posta Vertina Design web sitesindeki iletişim formu aracılığıyla gönderilmiştir.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error details:", error);
      // Simplify error message for Turkish users, but keep debug info if helpful
      if (error.message.includes("You can only send testing emails")) {
        return {
          error: `Resend Hatası: Deneme modunda sadece kendi e-posta adresinize (${recipientEmail}) gönderim yapabilirsiniz.`,
        };
      }
      return { error: `E-posta gönderilemedi: ${error.message}` };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Full Server Action Error:", err);
    return {
      error:
        err.message || "Beklenmedik bir hata oluştu. Lütfen tekrar deneyin.",
    };
  }
}
