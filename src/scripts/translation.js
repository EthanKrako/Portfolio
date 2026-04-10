const existingLanguages = ["en", "fr"];
let currentLanguageIndex = 0;
const languageButton = document.querySelector('#language-button');

async function loadLanguage(lang) {
    try {
        const translationDictionary = await import(`../translations/${lang}.js`);
        return translationDictionary.default;
    } catch (error) {
        console.error(`Error loading language file for ${lang}:`, error);
        
        const fallbackDictionary = await import(`../translations/en.js`);
        return fallbackDictionary.default;
    }
}

export async function setLanguage(lang) {
    const translationDictionary = await loadLanguage(lang);

    document.querySelectorAll("[data-text]").forEach(textElement => {
        const key = textElement.dataset.text;
        textElement.innerHTML = translationDictionary[key];
    });

    document.querySelectorAll("[data-alt]").forEach(altElement => {
        const key = altElement.dataset.alt;
        altElement.alt = translationDictionary[key];
    });

    document.querySelectorAll("[data-title]").forEach(titleElement => {
        const key = titleElement.dataset.title;
        titleElement.title = translationDictionary[key];
    });

    document.querySelectorAll("[data-duration]").forEach(durationElement => {
        const key = durationElement.dataset.duration;
        durationElement.dataset.durationText = translationDictionary[key];
    });

    localStorage.setItem("lang", lang);
    currentLanguageIndex = existingLanguages.indexOf(lang) !== -1 ? existingLanguages.indexOf(lang) : 0;
}

function cycleLanguage() {
    currentLanguageIndex = (currentLanguageIndex + 1) % existingLanguages.length;
    setLanguage(existingLanguages[currentLanguageIndex]);
}

export function getLang() {
    if (localStorage.getItem("lang")) {
        return localStorage.getItem("lang");
    }

    if (navigator.languages !== undefined) {
        return navigator.languages[0].split('-')[0];
    }
    
    return navigator.language.split('-')[0];
}

export function initializeLanguageButton() {
    languageButton.addEventListener('click', cycleLanguage);
}