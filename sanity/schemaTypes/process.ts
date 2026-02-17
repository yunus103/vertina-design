import { defineField, defineType } from "sanity";

export const processType = defineType({
  name: "surec",
  title: "Tasarım Süreci Bölümü",
  type: "object",
  fields: [
    defineField({
      name: "baslik",
      title: "Bölüm Başlığı",
      type: "string",
      initialValue: "Tasarım Yolculuğumuz",
    }),
    defineField({
      name: "altBaslik",
      title: "Alt Başlık",
      type: "string",
      initialValue: "Fikir aşamasından mükemmel sonuca giden yol.",
    }),
    defineField({
      name: "adimlar",
      title: "Süreç Adımları",
      type: "array",
      of: [
        defineField({
          name: "adim",
          title: "Adım",
          type: "object",
          fields: [
            defineField({
              name: "numara",
              title: "Adım Numarası (Örn: 01)",
              type: "string",
            }),
            defineField({
              name: "baslik",
              title: "Adım Başlığı",
              type: "string",
            }),
            defineField({
              name: "ikon",
              title: "İkon (Material Symbol Adı - Örn: search, edit, palette)",
              type: "string",
            }),
            defineField({
              name: "aciklama",
              title: "Açıklama",
              type: "text",
            }),
            defineField({
              name: "gorsel",
              title: "Taslak / Moodboard Görseli",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),
  ],
});
