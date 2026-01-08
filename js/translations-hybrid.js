// translations-hybrid.js - VERSÃO CORRIGIDA PARA MENU MOBILE
console.log('🚀 Iniciando sistema de tradução...');

class TranslationManager {
    constructor() {
        this.currentLang = 'pt';
        this.translations = {};
        this.init();
    }

    init() {
        console.log('🔄 Inicializando traduções...');
        
        this.loadTranslations();
        this.setupEventListeners();
        this.loadSavedLanguage();
        
        console.log('✅ Sistema de tradução pronto!');
    }

    loadTranslations() {
        if (typeof translations !== 'undefined' && translations) {
            this.translations = translations;
            console.log('📚 Traduções carregadas:', Object.keys(this.translations));
        } else {
            console.error('❌ translations não encontrado!');
        }
    }

    setupEventListeners() {
        console.log('🔧 Configurando event listeners...');
        
        // Botões de idioma - PREVENIR PROPAGAÇÃO
        document.querySelectorAll('.lang-option').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // IMPEDE que o evento chegue no menu mobile
                e.stopImmediatePropagation();
                
                const lang = e.currentTarget.getAttribute('data-lang');
                console.log('🎯 Selecionando idioma:', lang);
                this.changeLanguage(lang);
                this.closeDropdown();
            });
        });

        // Botão principal do seletor
        const langBtn = document.querySelector('.lang-btn');
        if (langBtn) {
            langBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // IMPEDE que o evento chegue no menu mobile
                e.stopImmediatePropagation();
                
                this.toggleDropdown();
            });
        }

        // Fechar dropdown ao clicar fora - MAS não interfere com menu
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.language-selector')) {
                this.closeDropdown();
            }
        });

        // Tecla Escape para fechar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeDropdown();
            }
        });

        console.log('✅ Event listeners configurados');
    }

    toggleDropdown() {
        const dropdown = document.querySelector('.lang-dropdown');
        const selector = document.querySelector('.language-selector');
        
        if (dropdown) {
            const isActive = dropdown.classList.contains('active');
            dropdown.classList.toggle('active');
            if (selector) selector.classList.toggle('active');
            console.log('📂 Dropdown:', isActive ? 'fechado' : 'aberto');
        }
    }

    closeDropdown() {
        const dropdown = document.querySelector('.lang-dropdown');
        const selector = document.querySelector('.language-selector');
        
        if (dropdown) {
            dropdown.classList.remove('active');
            if (selector) selector.classList.remove('active');
        }
    }

    loadSavedLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
        console.log('💾 Idioma salvo:', savedLang);
        this.changeLanguage(savedLang, false);
    }

    changeLanguage(lang, savePreference = true) {
        console.log('🌍 Mudando para idioma:', lang);
        
        if (!this.translations[lang]) {
            console.error('❌ Idioma não suportado:', lang);
            return false;
        }

        this.currentLang = lang;
        
        // Atualiza interface
        this.updateLanguageButton(lang);
        this.applyTranslations(lang);
        
        // Salva preferência
        if (savePreference) {
            localStorage.setItem('preferredLanguage', lang);
        }

        console.log('✅ Idioma alterado com sucesso:', lang);
        return true;
    }

    updateLanguageButton(lang) {
        const langBtn = document.querySelector('.lang-btn');
        if (!langBtn) return;

        const flag = langBtn.querySelector('.flag');
        const langCode = langBtn.querySelector('.lang-code');

        const flags = {
            'pt': '🇵🇹', 'en': '🇺🇸', 'es': '🇪🇸',
            'fr': '🇫🇷', 'ru': '🇷🇺', 'zh': '🇨🇳'
        };

        const codes = {
            'pt': 'PT', 'en': 'EN', 'es': 'ES',
            'fr': 'FR', 'ru': 'RU', 'zh': '中文'
        };

        if (flag) flag.textContent = flags[lang] || '🌐';
        if (langCode) langCode.textContent = codes[lang] || lang.toUpperCase();
    }

    applyTranslations(lang) {
        const langData = this.translations[lang];
        if (!langData) return;

        let translatedCount = 0;
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = this.getTranslation(langData, key);
            
            if (translation) {
                element.textContent = translation;
                translatedCount++;
            }
        });

        // Atualiza título
        if (langData['site.title']) {
            document.title = langData['site.title'];
        }

        console.log(`📝 ${translatedCount} elementos traduzidos para ${lang}`);
    }

    getTranslation(langData, key) {
        if (!langData || !key) return null;
        
        const keys = key.split('.');
        let value = langData;
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return null;
            }
        }
        
        return value;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('🏠 DOM pronto - inicializando tradução...');
    
    setTimeout(() => {
        if (!window.translationManager) {
            window.translationManager = new TranslationManager();
            
            // Debug helper
            window.debugLang = function() {
                console.group('🌍 DEBUG IDIOMAS');
                console.log('Manager:', window.translationManager ? '✅' : '❌');
                console.log('Idioma atual:', window.translationManager?.currentLang);
                console.log('Idiomas:', Object.keys(window.translationManager?.translations || {}));
                console.log('Elementos data-key:', document.querySelectorAll('[data-key]').length);
                
                // Testa cliques manualmente
                console.log('Botões de idioma:', document.querySelectorAll('.lang-option').length);
                console.groupEnd();
            };
        }
    }, 100);
});

// Função global
function changeLanguage(lang) {
    if (window.translationManager) {
        return window.translationManager.changeLanguage(lang);
    }
    return false;
}

console.log('📦 translations-hybrid.js carregado');
