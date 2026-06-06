// ====================================================================
// Master i18n module — full EN/AR translations for every page key.
// Imported by Layout.astro for SSR rendering, and inlined as a string
// for client-side switching (since the build does not share modules
// with the browser bundle directly for inline <script> blocks).
// ====================================================================

export const languages = {
  en: 'English',
  ar: 'العربية'
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const supportedLangs = Object.keys(languages) as Lang[];

// Every key used in the codebase via `data-i18n-key` or
// `data-i18n-placeholder` lives here. Adding a new translation = adding
// it to BOTH the `en` and `ar` objects.
export const ui: Record<Lang, Record<string, string>> = {
  en: {
    // Navigation
    brand: 'MAHUTOP',
    home: 'HOME_BASE',
    vault: 'SOVEREIGN VAULT',
    bazaar: 'GRAND BAZAAR',
    logs: 'SYSTEM LOGS',

    // Home
    homeTitle: 'SOVEREIGN SYSTEM CORE // MAIN_MENU',
    systemStatus: 'SYSTEM OPERATIONAL // LATENCY 0ms // MODULES FULLY DEPLOYED',
    launchVaultBtn: 'LAUNCH VAULT ENGINE',
    launchVaultDesc: 'Execute Arabic character normalization, text diacritic stripping, and bulk text, PDF, or Word document processing rules.',
    accessReviewsBtn: 'ACCESS REVIEWS DATABASE',
    accessReviewsDesc: 'Browse encrypted local file logs, development audits, and markdown system documentation.',

    // Bazaar / Storefront
    bazaarTitle: 'AFFILIATE MATRIX',
    bazaarSub: 'Curated premium storefront — time-limited offers auto-expire.',
    comparerTitle: 'Compare Top Products',
    comparerDesc: 'Select up to three products to compare pricing, categories, and feature details in a single side-by-side view.',
    electronicsTitle: '01 // ELECTRONICS & TECHNOLOGY [PERFORMANCE BENCHMARKS]',
    homeSectionTitle: '02 // HOME & KITCHEN [BUYING GUIDES & SETUPS]',
    fashionTitle: '03 // FASHION & ACCESSORIES [STYLE RECOMMENDATIONS]',
    healthTitle: '04 // HEALTH & PERSONAL CARE [EXPERT ROUTINES]',
    visitAffiliate: 'Visit Affiliate',

    // AI Assistant
    aiAssistantTitle: 'AI Article Assistant',
    aiAssistantDesc: 'Draft a product summary or promotional article instantly using a prompt that fits your affiliate storefront.',
    aiPromptLabel: 'Describe the content you want',
    aiPromptPlaceholder: 'Create a product launch article for a premium tech rig',
    aiGenerateBtn: 'Generate AI Article',
    aiEmptyState: 'Type a prompt and click Generate to create a product article summary.',

    // Vault
    vaultTitle: 'SOVEREIGN // VAULT_CORE',
    diagnosticsTitle: 'System Diagnostics',
    vaultSub: 'Secure structural system processing rules, multi-language character configuration files, and system parameters.',
    unlockBtn: 'UNLOCK VAULT',
    lockedMessage: 'Enter the vault password to access the management interface.',
    passwordPlaceholder: 'Enter vault password...',

    // Management
    manageTitle: 'PRODUCT & AFFILIATE MANAGEMENT',
    manageSub: 'Manage products, affiliate links, and pricing from this secure vault interface.',
    manageProducts: 'MANAGE PRODUCTS',
    addProduct: '+ Add Product',
    productName: 'Product Name',
    productCategory: 'Category',
    productPrice: 'Price',
    productOldPrice: 'Old Price',
    productDescription: 'Description',
    productAffiliateLink: 'Affiliate Link',
    saveChanges: 'Save Changes',
    cancel: 'Cancel',

    // Logs / Reviews
    logsTitle: 'SYSTEM LOGS // REVIEWS_DATABASE',
    reviewsSub: 'Encrypted review logs, ready for audit and deeper analysis.',
    logsSearchPlaceholder: 'FILTER LOGS // ENTER SYSTEM KEYWORDS...',

    // Misc
    offerEnds: 'OFFER ENDS:',
    limitedLog: 'LIMITED LOG:'
  },
  ar: {
    // Navigation
    brand: 'ماهوتوب',
    home: 'الصفحة الرئيسية',
    vault: 'خزنة السيادة',
    bazaar: 'البازار الكبير',
    logs: 'سجلات النظام',

    // Home
    homeTitle: 'نواة نظام السيادة // القائمة الرئيسية',
    systemStatus: 'النظام يعمل بنجاح // زمن الاستجابة 0 ملّي ثانية // الوحدات مفعّلة بالكامل',
    launchVaultBtn: 'تشغيل محرك الخزنة',
    launchVaultDesc: 'تنفيذ قواعد معالجة النصوص، وتطبيع الحروف العربية، وإزالة التشكيل، ومعالجة ملفات PDF والـ Word بشكل جماعي.',
    accessReviewsBtn: 'دخول قاعدة بيانات المراجعات',
    accessReviewsDesc: 'تصفح سجلات الملفات المحلية المشفرة، عمليات تدقيق التطوير، وتوثيق النظام المكتوب بصيغة ماركداون.',

    // Bazaar / Storefront
    bazaarTitle: 'مصفوفة التسويق بالعمولة',
    bazaarSub: 'متجر مخصص مميز — العروض المحدودة بوقت تنتهي تلقائيًا.',
    comparerTitle: 'مقارنة أفضل المنتجات',
    comparerDesc: 'اختر ما يصل إلى ثلاثة منتجات لمقارنة الأسعار والتصنيفات وتفاصيل الميزات في عرض جانبي واحد.',
    electronicsTitle: '01 // الإلكترونيات والتكنولوجيا [معايير الأداء المتقدمة]',
    homeSectionTitle: '02 // المنزل والمطبخ [أدلة الشراء وإعدادات التصميم]',
    fashionTitle: '03 // الأزياء والإكسسوارات [توصيات الأناقة العصرية]',
    healthTitle: '04 // الصحة والعناية الشخصية [الروتين اليومي المتقدم]',
    visitAffiliate: 'زيارة رابط الأفلييت',

    // AI Assistant
    aiAssistantTitle: 'مساعد المقالات بالذكاء الاصطناعي',
    aiAssistantDesc: 'أنشئ ملخص منتج أو مقال ترويجي على الفور باستخدام وصف يناسب متجر التسويق بالعمولة الخاص بك.',
    aiPromptLabel: 'صف المحتوى الذي تريده',
    aiPromptPlaceholder: 'أنشئ مقال إطلاق منتج لمنصة تقنية مميزة',
    aiGenerateBtn: 'توليد مقال بالذكاء الاصطناعي',
    aiEmptyState: 'اكتب وصفًا وانقر فوق زر التوليد لإنشاء ملخص مقال تسويقي للمنتج.',

    // Vault
    vaultTitle: 'خزنة السيادة // النواة الرئيسية',
    diagnosticsTitle: 'تشخيصات النظام',
    vaultSub: 'قواعد معالجة هيكلية آمنة للنظام، ملفات تكوين الحروف متعددة اللغات، ومعلمات النظام.',
    unlockBtn: 'فتح الخزنة',
    lockedMessage: 'أدخل كلمة المرور للوصول إلى واجهة الإدارة.',
    passwordPlaceholder: 'أدخل كلمة مرور الخزنة...',

    // Management
    manageTitle: 'إدارة المنتجات والروابط التابعة',
    manageSub: 'إدارة المنتجات والروابط التابعة والأسعار من خلال واجهة الخزنة الآمنة.',
    manageProducts: 'إدارة المنتجات',
    addProduct: '+ إضافة منتج',
    productName: 'اسم المنتج',
    productCategory: 'التصنيف',
    productPrice: 'السعر',
    productOldPrice: 'السعر القديم',
    productDescription: 'الوصف',
    productAffiliateLink: 'رابط التسويق',
    saveChanges: 'حفظ التغييرات',
    cancel: 'إلغاء',

    // Logs / Reviews
    logsTitle: 'سجلات النظام // قاعدة بيانات المراجعات',
    reviewsSub: 'سجلات المراجعة المشفرة، جاهزة للتدقيق والتحليل العميق.',
    logsSearchPlaceholder: 'تصفية السجلات // أدخل كلمات مفتاحية...',

    // Misc
    offerEnds: 'ينتهي العرض خلال:',
    limitedLog: 'سجل محدود:'
  }
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (supportedLangs.includes(lang as Lang)) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: string): string {
  return ui[lang]?.[key] ?? ui[defaultLang]?.[key] ?? key;
}

export function useTranslations(lang: Lang) {
  return function translate(key: string): string {
    return t(lang, key);
  };
}
