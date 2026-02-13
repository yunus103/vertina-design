import { defineField, defineType } from 'sanity'

export const contactType = defineType({
  name: 'iletisim',
  title: 'İletişim Bölümü',
  type: 'object',
  fields: [
    defineField({
      name: 'baslik',
      title: 'Bölüm Başlığı',
      type: 'string',
      initialValue: 'İletişim',
    }),
    defineField({
        name: 'etiket',
        title: 'Üst Etiket',
        type: 'string',
        initialValue: 'Connect With Us'
    }),
    defineField({
      name: 'gorsel',
      title: 'Sol Taraf Görseli',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'adres',
      title: 'Adres',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'eposta',
      title: 'E-posta Adresi',
      type: 'string',
    }),
    defineField({
      name: 'telefon',
      title: 'Telefon Numarası',
      type: 'string',
    }),
  ],
})
