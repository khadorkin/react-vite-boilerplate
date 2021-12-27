import i18n, { use } from "i18next"
import { initReactI18next } from "react-i18next"
import en from "../locales/en.json"

const resources = {
  en: {
    translation: en,
  },
}

use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: "v3",
})

export default i18n
