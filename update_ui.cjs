const fs = require('fs');

try {
  let content = fs.readFileSync('src/i18n/ui.ts', 'utf8');

  // 1. Update wa.template
  content = content.replace(
    /'order\.step6\.desc': 'We handle all export logistics and documents until it reaches you\.',/g,
    `'order.step6.desc': 'We handle all export logistics and documents until it reaches you.',\n\n    'wa.template': 'Hello King Coco, I am interested in your products and would like to request a quotation.',`
  );
  content = content.replace(
    /'order\.step6\.desc': 'Kami menangani semua logistik ekspor dan dokumen hingga sampai ke Anda\.',/g,
    `'order.step6.desc': 'Kami menangani semua logistik ekspor dan dokumen hingga sampai ke Anda.',\n\n    'wa.template': 'Halo King Coco, saya tertarik dengan produk Anda dan ingin meminta penawaran harga.',`
  );
  content = content.replace(
    /'order\.step6\.desc': 'نتعامل مع جميع لوجستيات التصدير والمستندات حتى تصل إليك\.',/g,
    `'order.step6.desc': 'نتعامل مع جميع لوجستيات التصدير والمستندات حتى تصل إليك.',\n\n    'wa.template': 'مرحباً كينغ كوكو، أنا مهتم بمنتجاتكم وأود طلب تسعيرة.',`
  );

  // 2. Replace languages object
  const newLanguages = `export const languages = {
  en: { prefix: 'GB', name: 'English' },
  id: { prefix: 'ID', name: 'Bahasa Indonesia' },
  ar: { prefix: 'SA', name: 'العربية' },
  'zh-cn': { prefix: 'CN', name: '简体中文' },
  'zh-tw': { prefix: 'TW', name: '繁體中文' },
  ja: { prefix: 'JP', name: '日本語' },
  ko: { prefix: 'KR', name: '한국어' },
  de: { prefix: 'DE', name: 'Deutsch' },
  fr: { prefix: 'FR', name: 'Français' },
  es: { prefix: 'ES', name: 'Español' },
};`;

  content = content.replace(/export const languages = \{[\s\S]*?\};/, newLanguages);

  // 3. Add other languages to ui by copying 'en'
  const enMatch = content.match(/en: \{([\s\S]*?)\},\n\s*id:/);
  if (enMatch) {
    const enDict = enMatch[1];
    const newUiEntries = `
  'zh-cn': { ${enDict} },
  'zh-tw': { ${enDict} },
  ja: { ${enDict} },
  ko: { ${enDict} },
  de: { ${enDict} },
  fr: { ${enDict} },
  es: { ${enDict} },
} as const;`;
    content = content.replace(/\} as const;/, newUiEntries);
  } else {
    console.log("enMatch not found");
  }

  fs.writeFileSync('src/i18n/ui.ts', content, 'utf8');
  console.log("Success");
} catch (e) {
  console.error(e);
}
