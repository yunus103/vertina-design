import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: "İsim en az 2 karakter olmalıdır" }),
  surname: z.string().min(2, { message: "Soyisim en az 2 karakter olmalıdır" }),
  email: z
    .string()
    .email({ message: "Lütfen geçerli bir e-posta adresi giriniz" }),
  message: z
    .string()
    .min(10, { message: "Mesajınız en az 10 karakter olmalıdır" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
