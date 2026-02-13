import { defineField, defineType } from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Ana Sayfa (Landing Page)',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO Ayarları',
      type: 'seo',
    }),
    defineField({
      name: 'hero',
      title: 'Hero Bölümü',
      type: 'hero',
    }),
    defineField({
      name: 'ayarlar',
      title: 'Site Ayarları',
      type: 'object',
      fields: [
        defineField({
          name: 'logo',
          title: 'Logo',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'firmaAdi',
          title: 'Firma Adı (Logo Yoksa Görünür)',
          type: 'string',
        }),
      ]
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
    defineField({
      name: 'footer',
      title: 'Footer (Alt Bilgi)',
      type: 'footer',
    }),
  ],
})
