import { getLang, setLanguage, initializeLanguageButton } from "./scripts/translation.js";
import { setupProjectTabs } from "./scripts/animation.js";

// Translation
await setLanguage(getLang());
initializeLanguageButton();
setupProjectTabs();