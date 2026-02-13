import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Bölümü',
  type: 'object',
  fields: [
    defineField({
      name: 'baslik',
      title: 'Ana Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altBaslik',
      title: 'Alt Başlık Metni',
      type: 'string', 
    }),
    defineField({
        name: 'etiket',
        title: 'Üst Etiket (Örn: DOCTORS CHOICE)',
        type: 'string',
      }),
    defineField({
      name: 'gorsel',
      title: 'Arkaplan Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'altMetin',
          title: 'Alternatif Metin',
          type: 'string',
        })
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
