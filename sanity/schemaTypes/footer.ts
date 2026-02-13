import { defineField, defineType } from 'sanity'

export const footerType = defineType({
  name: 'footer',
  title: 'Footer (Alt Bilgi) Ayarları',
  type: 'object',
  fields: [
    defineField({
      name: 'logo',
      title: 'Footer Logosu',
      type: 'image',
      description: 'Footer kısmında görünecek logo (Opsiyonel)',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aciklama',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
      description: 'Logonun altında yer alacak kısa şirket açıklaması.',
    }),
    defineField({
      name: 'sosyalMedya',
      title: 'Sosyal Medya Linkleri',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform Adı', type: 'string' }),
            defineField({ name: 'url', title: 'Link (URL)', type: 'url' }),
          ]
        }
      ]
    }),
    defineField({
        name: 'copyright',
        title: 'Copyright Metni',
        type: 'string',
        initialValue: '© 2026 Vertina Design. Tüm hakları saklıdır.'
    })
  ],
})
