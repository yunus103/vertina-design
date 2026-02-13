import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO Ayarları',
  type: 'object',
  fields: [
    defineField({
      name: 'baslik',
      title: 'SEO Başlığı (Meta Title)',
      type: 'string',
      description: 'Google arama sonuçlarında görünen başlık. Önerilen: 50-60 karakter.',
      validation: (Rule) => Rule.max(60).warning('60 karakterden uzun başlıklar Google tarafından kesilebilir.'),
    }),
    defineField({
      name: 'aciklama',
      title: 'Meta Açıklaması (Description)',
      type: 'text',
      rows: 3,
      description: 'Google arama sonuçlarında başlığın altında görünen açıklama. Önerilen: 150-160 karakter.',
      validation: (Rule) => Rule.max(160).warning('160 karakterden uzun açıklamalar kesilebilir.'),
    }),
    defineField({
      name: 'anahtarKelimeler',
      title: 'Anahtar Kelimeler',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
        name: 'favicon',
        title: 'Tarayıcı Sekme İkonu (Favicon)',
        type: 'image',
        description: 'Tarayıcı sekmesinde görünen küçük ikon. Kare (1:1) formatında yükleyiniz.',
      }),
    defineField({
      name: 'socialImage',
      title: 'Sosyal Medya Paylaşım Görseli (OG Image)',
      type: 'image',
      description: 'Facebook, Twitter, LinkedIn vb. paylaşım yapıldığında görünen görsel. Önerilen: 1200x630px.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Arama Motorlarına Kapat (NoIndex)',
      type: 'boolean',
      initialValue: false,
      description: 'Bu sayfayı Google arama sonuçlarından gizlemek için işaretleyin.',
    }),
  ],
})
