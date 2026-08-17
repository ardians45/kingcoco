const fs = require('fs');

try {
  let uiContent = fs.readFileSync('src/i18n/ui.ts', 'utf8');

  // Update H1 in ui.ts
  uiContent = uiContent.replace(
    /'hero.title.1': 'Premium Coconut Products Supplier for Global Markets',/,
    `'hero.title.1': 'Premium Coconut Products Supplier from Indonesia for Global Markets',`
  );

  // Update ui.ts with new distinct products and headings
  const newUiEntries = `
    // SEO Headings & Products
    'about.h2': 'About King Coco',
    'about.h3': 'Premium Coconut Products for Global B2B Markets',
    'why.h2': 'Why Choose King Coco?',
    'why.h3.quality': 'Consistent Product Quality',
    'why.h3.capacity': 'Large Production Capacity',
    'why.h3.oem': 'Custom OEM Solutions',
    'why.h3.export': 'Export-Ready Supply',
    'products.h2': 'Premium Coconut Products',
    'products.h3.charcoal': 'Coconut Charcoal & Briquettes',
    'products.h3.cocopeat': 'Cocopeat Products',
    'products.h3.fiber': 'Coconut Fiber Products',
    'charcoal.h4.1': 'Shisha Charcoal Grade 1',
    'charcoal.h4.2': 'Shisha Charcoal Grade 2',
    'charcoal.h4.3': 'Shisha Charcoal Grade 3',
    'charcoal.h4.4': 'Shisha Charcoal Grade 4',
    'cocopeat.h4.1': 'Cocopeat Block Low EC Grade A',
    'cocopeat.h4.2': 'Cocopeat Block Low EC Grade B',
    'cocopeat.h4.3': 'Cocopeat Block High EC',
    'cocopeat.h4.polybag': 'Cocopeat Polybag Low EC',
    'fiber.h4.baby': 'Baby Fiber High EC',
    'fiber.h4.coconut': 'Coconut Fiber',
    'values.h2': 'Our Core Values',
    'values.h3.vision': 'Our Vision',
    'values.h3.mission': 'Our Mission',
    'order.h2': 'How to Order',
    'order.h3.1': 'Consultation',
    'order.h3.2': 'Request a Quotation',
    'order.h3.3': 'Sample & Approval',
    'order.h3.4': 'Agreement & Contract',
    'order.h3.5': 'Production & Quality Control',
    'order.h3.6': 'Shipping & Logistics',
    'gallery.h2': 'Production & Quality Control',
    'gallery.h3.facilities': 'Our Production Facilities',
    'gallery.h3.inspection': 'Quality Inspection Process',
    'contact.h2': 'Ready to Source Premium Coconut Products?',
    'contact.h3.wa': 'Contact Us via WhatsApp',
    'contact.h3.rfq': 'Send an RFQ',
`;
  
  uiContent = uiContent.replace(/\/\/\s*Stats/, newUiEntries + '\n    // Stats');

  fs.writeFileSync('src/i18n/ui.ts', uiContent, 'utf8');

  // Now replace things in index.astro
  let indexContent = fs.readFileSync('src/pages/[lang]/index.astro', 'utf8');

  // We have a lot of heading tags to replace in index.astro.
  // Instead of replacing tags manually, I will use targeted regex or precise string matches.

  // 1. Hero H1
  // Currently:
  // <h1 class="...">
  //    <span class="block">{t('hero.title.1')}</span>
  // </h1>
  
  // 2. About section
  indexContent = indexContent.replace(/<h2 class="text-3xl md:text-5xl[^>]*>\{t\('about\.title'\)\}<\/h2>/, 
    `<h2 class="text-3xl md:text-5xl font-heading font-bold text-primary-charcoal mb-6">{t('about.h2')}</h2>\n\t\t\t\t\t\t<h3 class="text-xl md:text-2xl font-bold text-primary-green mb-4">{t('about.h3')}</h3>`);

  // 3. Why Choose Us
  indexContent = indexContent.replace(/<h2 class="text-3xl md:text-5xl[^>]*>\{t\('why\.title'\)\}<\/h2>/,
    `<h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-4">{t('why.h2')}</h2>`);
  
  // Replace the h3s inside Why Choose Us
  // Quality
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-white mb-2">\{t\('why\.quality\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-white mb-2">{t('why.h3.quality')}</h3>`);
  // Capacity
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-white mb-2">\{t\('why\.capacity\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-white mb-2">{t('why.h3.capacity')}</h3>`);
  // OEM
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-white mb-2">\{t\('why\.oem\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-white mb-2">{t('why.h3.oem')}</h3>`);
  // Export
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-white mb-2">\{t\('why\.export\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-white mb-2">{t('why.h3.export')}</h3>`);

  // 4. Products
  indexContent = indexContent.replace(/<h2 class="text-3xl md:text-5xl[^>]*>\{t\('products\.title'\)\}<\/h2>/,
    `<h2 class="text-3xl md:text-5xl font-heading font-bold text-primary-charcoal mb-4">{t('products.h2')}</h2>`);
  
  // Update category headings to H3
  indexContent = indexContent.replace(/<h3 class="text-2xl md:text-3xl font-bold text-primary-charcoal">Cocopeat<\/h3>/g,
    `<h3 class="text-2xl md:text-3xl font-bold text-primary-charcoal">{t('products.h3.cocopeat')}</h3>`);
  indexContent = indexContent.replace(/<h3 class="text-2xl md:text-3xl font-bold text-primary-charcoal">Coconut Fiber<\/h3>/g,
    `<h3 class="text-2xl md:text-3xl font-bold text-primary-charcoal">{t('products.h3.fiber')}</h3>`);
  indexContent = indexContent.replace(/<h3 class="text-2xl md:text-3xl font-bold text-primary-charcoal">Charcoal Briquettes<\/h3>/g,
    `<h3 class="text-2xl md:text-3xl font-bold text-primary-charcoal">{t('products.h3.charcoal')}</h3>`);

  // Update product specific headings to H4 and rename
  // Cocopeat Block Low EC Grade A
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Cocopeat Block Low EC<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('cocopeat.h4.1')}</h4>`);
  // Cocopeat Block Low EC Grade B
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Cocopeat Block Low EC<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('cocopeat.h4.2')}</h4>`);
  // Cocopeat Block High EC
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Cocopeat Block High EC<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('cocopeat.h4.3')}</h4>`);
  // Cocopeat Polybag Low EC
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Cocopeat Polybag Low EC<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('cocopeat.h4.polybag')}</h4>`);

  // Fiber
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Baby Fiber High EC<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('fiber.h4.baby')}</h4>`);
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Coconut Fiber<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('fiber.h4.coconut')}</h4>`);

  // Charcoal
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Shisha Charcoal<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('charcoal.h4.1')}</h4>`);
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Shisha Charcoal<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('charcoal.h4.2')}</h4>`);
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Shisha Charcoal<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('charcoal.h4.3')}</h4>`);
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">Shisha Charcoal<\/h4>/,
    `<h4 class="text-xl font-bold text-primary-charcoal mb-1 leading-tight">{t('charcoal.h4.4')}</h4>`);

  // 5. Vision Mission
  indexContent = indexContent.replace(/<h2 class="text-3xl md:text-4xl font-heading font-bold text-primary-charcoal mb-4">\{t\('vm\.title'\)\}<\/h2>/,
    `<h2 class="text-3xl md:text-4xl font-heading font-bold text-primary-charcoal mb-4">{t('values.h2')}</h2>`);
  indexContent = indexContent.replace(/<h3 class="text-2xl font-bold text-primary-charcoal mb-4 flex items-center gap-3">/,
    `<h3 class="text-2xl font-bold text-primary-charcoal mb-4 flex items-center gap-3">{t('values.h3.vision')} - `);
  indexContent = indexContent.replace(/<h3 class="text-2xl font-bold text-primary-charcoal mb-6 flex items-center gap-3">/,
    `<h3 class="text-2xl font-bold text-primary-charcoal mb-6 flex items-center gap-3">{t('values.h3.mission')} - `);

  // 6. How to Order
  indexContent = indexContent.replace(/<h2 class="text-3xl md:text-5xl font-heading font-bold text-primary-charcoal mb-4">\{t\('order\.title'\)\}<\/h2>/,
    `<h2 class="text-3xl md:text-5xl font-heading font-bold text-primary-charcoal mb-4">{t('order.h2')}</h2>`);
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-primary-charcoal mb-2">\{t\('order\.step1\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-primary-charcoal mb-2">{t('order.h3.1')}</h3>`);
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-primary-charcoal mb-2">\{t\('order\.step2\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-primary-charcoal mb-2">{t('order.h3.2')}</h3>`);
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-primary-charcoal mb-2">\{t\('order\.step3\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-primary-charcoal mb-2">{t('order.h3.3')}</h3>`);
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-primary-charcoal mb-2">\{t\('order\.step4\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-primary-charcoal mb-2">{t('order.h3.4')}</h3>`);
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-primary-charcoal mb-2">\{t\('order\.step5\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-primary-charcoal mb-2">{t('order.h3.5')}</h3>`);
  indexContent = indexContent.replace(/<h3 class="text-xl font-bold text-primary-charcoal mb-2">\{t\('order\.step6\.title'\)\}<\/h3>/,
    `<h3 class="text-xl font-bold text-primary-charcoal mb-2">{t('order.h3.6')}</h3>`);

  // 7. Gallery
  indexContent = indexContent.replace(/<h2 class="text-3xl md:text-4xl font-heading font-bold text-primary-charcoal mb-4">\{t\('gallery\.subtitle'\)\}<\/h2>/,
    `<h2 class="text-3xl md:text-4xl font-heading font-bold text-primary-charcoal mb-4">{t('gallery.h2')}</h2>\n\t\t\t\t\t<h3 class="text-primary-green font-semibold tracking-wider uppercase text-sm mb-3">{t('gallery.h3.facilities')} | {t('gallery.h3.inspection')}</h3>`);
  
  // 8. Contact
  indexContent = indexContent.replace(/<h3 class="text-3xl md:text-5xl font-heading font-bold text-white mb-6">\{t\('contact\.title'\)\}<\/h3>/,
    `<h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-6">{t('contact.h2')}</h2>`);
  indexContent = indexContent.replace(/<h4 class="text-xl font-bold text-white">\{t\('contact\.wa'\)\}<\/h4>/,
    `<h3 class="text-xl font-bold text-white">{t('contact.h3.wa')}</h3>`);
  indexContent = indexContent.replace(/<h4 class="text-2xl font-bold text-white mb-2">\{t\('contact\.form\.title'\)\}<\/h4>/,
    `<h3 class="text-2xl font-bold text-white mb-2">{t('contact.h3.rfq')}</h3>`);

  fs.writeFileSync('src/pages/[lang]/index.astro', indexContent, 'utf8');
  console.log('Successfully updated index.astro');
} catch (e) {
  console.error(e);
}
