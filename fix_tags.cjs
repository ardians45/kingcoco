const fs = require('fs');
let content = fs.readFileSync('src/pages/[lang]/index.astro', 'utf8');

// Replace {t('about.title')} -> {t('about.h2')}
content = content.replace(/\{t\('about\.title'\)\}/, `{t('about.h2')}</h2>\n\t\t\t\t\t\t<h3 class="text-xl md:text-2xl font-bold text-primary-green mb-4">{t('about.h3')}`);

// Replace {t('why.title')}
content = content.replace(/\{t\('why\.title'\)\}/, `{t('why.h2')}`);

// Why H3s
content = content.replace(/\{t\('why\.quality\.title'\)\}/, `{t('why.h3.quality')}`);
content = content.replace(/\{t\('why\.capacity\.title'\)\}/, `{t('why.h3.capacity')}`);
content = content.replace(/\{t\('why\.oem\.title'\)\}/, `{t('why.h3.oem')}`);
content = content.replace(/\{t\('why\.export\.title'\)\}/, `{t('why.h3.export')}`);

// Products H2
content = content.replace(/\{t\('products\.title'\)\}/, `{t('products.h2')}`);

// Products H3s (were literal strings)
content = content.replace(/>Cocopeat</g, `>{t('products.h3.cocopeat')}<`);
content = content.replace(/>Coconut Fiber</g, `>{t('products.h3.fiber')}<`);
content = content.replace(/>Charcoal Briquettes</g, `>{t('products.h3.charcoal')}<`);

// Cocopeat H4s
content = content.replace(/>Cocopeat Block Low EC<\/h4>/, `>{t('cocopeat.h4.1')}</h4>`);
content = content.replace(/>Cocopeat Block Low EC<\/h4>/, `>{t('cocopeat.h4.2')}</h4>`);
content = content.replace(/>Cocopeat Block High EC<\/h4>/, `>{t('cocopeat.h4.3')}</h4>`);
content = content.replace(/>Cocopeat Polybag Low EC<\/h4>/, `>{t('cocopeat.h4.polybag')}</h4>`);

// Fiber H4s
content = content.replace(/>Baby Fiber High EC<\/h4>/, `>{t('fiber.h4.baby')}</h4>`);
content = content.replace(/>Coconut Fiber<\/h4>/, `>{t('fiber.h4.coconut')}</h4>`);

// Charcoal H4s
content = content.replace(/>Shisha Charcoal<\/h4>/, `>{t('charcoal.h4.1')}</h4>`);
content = content.replace(/>Shisha Charcoal<\/h4>/, `>{t('charcoal.h4.2')}</h4>`);
content = content.replace(/>Shisha Charcoal<\/h4>/, `>{t('charcoal.h4.3')}</h4>`);
content = content.replace(/>Shisha Charcoal<\/h4>/, `>{t('charcoal.h4.4')}</h4>`);

// Vision/Mission
content = content.replace(/\{t\('vm\.title'\)\}/, `{t('values.h2')}`);
content = content.replace(/>\{t\('vm\.vision\.title'\)\}<\/h3>/, `>{t('values.h3.vision')}</h3>`);
content = content.replace(/>\{t\('vm\.mission\.title'\)\}<\/h3>/, `>{t('values.h3.mission')}</h3>`);
content = content.replace(/\{t\('vm\.vision\.title'\)\}/, `{t('values.h3.vision')}`);
content = content.replace(/\{t\('vm\.mission\.title'\)\}/, `{t('values.h3.mission')}`);

// Order
content = content.replace(/\{t\('order\.title'\)\}/, `{t('order.h2')}`);
content = content.replace(/\{t\('order\.step1\.title'\)\}/, `{t('order.h3.1')}`);
content = content.replace(/\{t\('order\.step2\.title'\)\}/, `{t('order.h3.2')}`);
content = content.replace(/\{t\('order\.step3\.title'\)\}/, `{t('order.h3.3')}`);
content = content.replace(/\{t\('order\.step4\.title'\)\}/, `{t('order.h3.4')}`);
content = content.replace(/\{t\('order\.step5\.title'\)\}/, `{t('order.h3.5')}`);
content = content.replace(/\{t\('order\.step6\.title'\)\}/, `{t('order.h3.6')}`);

fs.writeFileSync('src/pages/[lang]/index.astro', content, 'utf8');
console.log('Fixed tags');
