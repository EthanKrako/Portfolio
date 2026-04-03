import { getLang, setLanguage, initializeLanguageButton } from "./scripts/translation.js";
import { setupRadioEventListeners } from "./scripts/animation.js";

// Translation
setLanguage(getLang());
initializeLanguageButton();
setupRadioEventListeners();