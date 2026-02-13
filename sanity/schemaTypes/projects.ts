import { defineField, defineType } from 'sanity'

export const projectsType = defineType({
  name: 'projeler',
  title: 'Projeler Bölümü',
  type: 'object',
  fields: [
    defineField({
        name: 'etiket',
        title: 'Üst Etiket',
        type: 'string',
        initialValue: 'Selected Works'
    }),
    defineField({
      name: 'baslik',
      title: 'Bölüm Başlığı',
      type: 'string',
      initialValue: 'Projeler',
    }),
    defineField({
      name: 'liste',
      title: 'Proje Listesi',
      type: 'array',
      of: [
        defineField({
          name: 'proje',
          title: 'Proje',
          type: 'object',
          fields: [
            defineField({
              name: 'ad',
              title: 'Proje Adı',
              type: 'string',
            }),
            defineField({
                name: 'kategori',
                title: 'Kategori (Örn: Living Room)',
                type: 'string',
            }),
            defineField({
              name: 'gorsel',
              title: 'Proje Görseli',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                    name: 'altMetin',
                    title: 'Alternatif Metin',
                    type: 'string',
                  })
              ]
            }),
          ]
        })
      ]
    }),
  ],
})
