import { getLang, setLanguage, initializeLanguageButton } from "../scripts/translation.js";

// Translation
await setLanguage(getLang());
initializeLanguageButton();