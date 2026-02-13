import { defineField, defineType } from 'sanity'

export const servicesType = defineType({
  name: 'hizmetlerimiz',
  title: 'Hizmetlerimiz Bölümü',
  type: 'object',
  fields: [
    defineField({
      name: 'baslik',
      title: 'Bölüm Başlığı',
      type: 'string',
      initialValue: 'Hizmetlerimiz',
    }),
    defineField({
      name: 'liste',
      title: 'Hizmet Listesi',
      type: 'array',
      of: [
        defineField({
          name: 'hizmet',
          title: 'Hizmet',
          type: 'object',
          fields: [
            defineField({
              name: 'baslik',
              title: 'Hizmet Başlığı',
              type: 'string',
            }),
            defineField({
              name: 'gorsel',
              title: 'Hizmet Görseli',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'aciklama',
              title: 'Kısa Açıklama',
              type: 'text',
            }),
          ]
        })
      ]
    }),
  ],
})
