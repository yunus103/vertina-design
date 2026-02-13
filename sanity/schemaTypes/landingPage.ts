import { defineField, defineType } from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Ana Sayfa (Landing Page)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sayfa Başlığı (SEO için)',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      title: 'Hero Bölümü',
      type: 'hero',
    }),
    defineField({
      name: 'hakkimizda',
      title: 'Hakkımızda Bölümü',
      type: 'hakkimizda',
    }),
    defineField({
      name: 'hizmetlerimiz',
      title: 'Hizmetlerimiz Bölümü',
      type: 'hizmetlerimiz',
    }),
    defineField({
      name: 'projeler',
      title: 'Projeler Bölümü',
      type: 'projeler',
    }),
    defineField({
        name: 'referanslar',
        title: 'Referanslar Bölümü',
        type: 'referanslar',
      }),
    defineField({
      name: 'iletisim',
      title: 'İletişim Bölümü',
      type: 'iletisim',
    }),
  ],
})
