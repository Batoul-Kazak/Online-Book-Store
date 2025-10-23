module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru', 'ar'],
  },
  localePath: 'public/locales', // where translation files live
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}