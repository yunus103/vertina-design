import { defineField, defineType } from "sanity";

export const testimonialsType = defineType({
  name: "referanslar",
  title: "Referanslar Bölümü",
  type: "object",
  fields: [
    defineField({
      name: "baslik",
      title: "Bölüm Başlığı",
      type: "string",
      initialValue: "Referanslar",
    }),
    defineField({
      name: "liste",
      title: "Referans Listesi (Marquee)",
      type: "array",
      of: [
        defineField({
          name: "referans",
          title: "Referans",
          type: "object",
          fields: [
            defineField({
              name: "ad",
              title: "Marka/Kişi Adı",
              type: "string",
            }),
            defineField({
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),
  ],
});
