const fs = require('fs');

try {
  let content = fs.readFileSync('src/i18n/ui.ts', 'utf8');

  const enUiMatch = content.match(/export const ui = \{\n  en: \{([\s\S]*?)\},\n  id:/);
  if (enUiMatch) {
    const enDict = enUiMatch[1];
    
    // Replace the bad bottom lines using string replacement directly
    const badEnd = `  'zh-cn': {  prefix: 'GB', name: 'English'  },
  'zh-tw': {  prefix: 'GB', name: 'English'  },
  ja: {  prefix: 'GB', name: 'English'  },
  ko: {  prefix: 'GB', name: 'English'  },
  de: {  prefix: 'GB', name: 'English'  },
  fr: {  prefix: 'GB', name: 'English'  },
  es: {  prefix: 'GB', name: 'English'  },
} as const;`;

    const newEnd = `  'zh-cn': { ${enDict} },
  'zh-tw': { ${enDict} },
  ja: { ${enDict} },
  ko: { ${enDict} },
  de: { ${enDict} },
  fr: { ${enDict} },
  es: { ${enDict} },
} as const;`;

    content = content.replace(badEnd, newEnd);
    fs.writeFileSync('src/i18n/ui.ts', content, 'utf8');
    console.log('Fixed');
  } else {
    console.log('Match not found');
  }
} catch (e) {
  console.error(e);
}
