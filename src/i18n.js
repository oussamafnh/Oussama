import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      eng: {
        translation: require('./locales/en/translation.json'),
      },
      fr: {
        translation: require('./locales/fr/translation.json'),
      },
    },
    lng: 'eng',
    fallbackLng: 'eng',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;