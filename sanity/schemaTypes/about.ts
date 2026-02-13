import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'hakkimizda',
  title: 'Hakkımızda Bölümü',
  type: 'object',
  fields: [
    defineField({
        name: 'etiket',
        title: 'Üst Etiket (Örn: BİZ KİMİZ)',
        type: 'string',
      }),
    defineField({
      name: 'baslik',
      title: 'Başlık',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'altBaslik',
        title: 'Alt Başlık (İtalik Kısım)',
        type: 'string',
      }),
    defineField({
      name: 'icerik',
      title: 'İçerik Metinleri',
      type: 'array',
      of: [{type: 'block'}], 
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gorsel',
      title: 'Hakkımızda Görseli',
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
      ]
    }),
  ],
})
