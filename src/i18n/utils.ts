import { ui, defaultLang, languages } from './ui';
export { languages };

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui || lang in languages) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // If the language dictionary is missing, gracefully fallback to defaultLang
    const dict = ui[lang as keyof typeof ui] || ui[defaultLang];
    return dict[key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path === '/' ? '' : path}`;
  }
}
