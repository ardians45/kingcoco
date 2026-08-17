const fs = require('fs');
let content = fs.readFileSync('src/pages/[lang]/index.astro', 'utf8');

const getSection = (startMarker, endMarker) => {
  const start = content.indexOf(startMarker);
  const end = content.indexOf(endMarker, start) + endMarker.length;
  return content.slice(start, end);
};

const hero = getSection('<!-- HERO SECTION -->', '</section>');
const about = getSection('<!-- ABOUT SECTION -->', '</section>');
const vision = getSection('<!-- VISION & MISSION -->', '</section>');
const why = getSection('<!-- WHY CHOOSE US -->', '</section>');
const products = getSection('<!-- PRODUCT SHOWCASE -->', '</section>');
const order = getSection('<!-- HOW TO ORDER -->', '</section>');
const gallery = getSection('<!-- GALLERY & VIDEOS -->', '</section>');
const contact = getSection('<!-- CONTACT & RFQ -->', '</section>');

if (!hero || !about || !vision || !why || !products || !order || !gallery || !contact) {
  console.log('Failed to extract some sections');
  process.exit(1);
}

const top = content.slice(0, content.indexOf('<!-- HERO SECTION -->'));
const bottom = content.slice(content.indexOf('</section>', content.indexOf('<!-- CONTACT & RFQ -->')) + 10);

// New order: Hero -> About -> Why -> Products -> Vision -> Order -> Gallery -> Contact
const newContent = top + [hero, about, why, products, vision, order, gallery, contact].join('\n\n') + bottom;
fs.writeFileSync('src/pages/[lang]/index.astro', newContent, 'utf8');
console.log('Reordered index.astro');
