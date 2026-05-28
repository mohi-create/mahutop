export const languages = {
  en: 'English',
  ar: 'العربية',
  es: 'Español'
};

export const defaultLang = 'en';

export const ui: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'The Grand Bazaar',
    'nav.admin': 'Sovereign Vault',
    'hero.title': 'MahuTop',
    'hero.subtitle': 'The Unclonable Modern Beast. Intricate PCB hardware, gold immersion circuits, and timeless electronic relics.',
    'product.view': 'Inspect Asset',
    'product.deal': 'Acquire Affiliate Asset',
    'product.specs': 'Architectural Parameters'
  },
  ar: {
    'nav.home': 'البازار الكبير',
    'nav.admin': 'قبو السيادة',
    'hero.title': 'MahuTop',
    'hero.subtitle': 'الوحش الحديث غير القابل للاستنساخ. عتاد لوحات الدوائر الإلكترونية المعقدة، مسارات مغمورة بالذهب، وقطع تكتيكية خالدة.',
    'product.view': 'فحص العتاد',
    'product.deal': 'امتلاك أصول الأفلييت',
    'product.specs': 'المعايير الفنية البنيوية'
  }
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof languages) {
  return function t(key: string): string {
    return ui[lang]?.[key] || ui[defaultLang]?.[key] || key;
  };
}
