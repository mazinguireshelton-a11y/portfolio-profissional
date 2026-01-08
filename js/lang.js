// js/lang.js - SISTEMA ÚNICO E DEFINITIVO
console.log('🚀 SISTEMA DE TRADUÇÃO ÚNICO INICIANDO...');

(function() {
    'use strict';
    
    const LANGUAGES = {
        pt: {
            // UI Geral
            loading: "Carregando...",
            view_code: "Ver Código",
            view_certificate: "Ver Certificado",
            
            // GitHub/Projetos
            repositories: "Repositórios",
            followers: "Seguidores",
            stars: "estrelas",
            
            // Status
            completed: "Concluído",
            in_progress: "Em Andamento",
            planned: "Planejado",
            
            // Certificados
            certificates: "Certificados",
            issued_by: "Emitido por",
            issued_on: "Emitido em",
            
            // Young Life
            club: "Clube",
            camp: "Acampamento",
            graduation: "Graduação",
            group_activities: "Atividades em Grupo",
            teamwork: "Trabalho em Equipe",
            celebration: "Momento de Celebração"
        },
        
        en: {
            loading: "Loading...",
            view_code: "View Code",
            repositories: "Repositories",
            followers: "Followers",
            stars: "stars",
            completed: "Completed",
            in_progress: "In Progress",
            planned: "Planned",
            certificates: "Certificates",
            view_certificate: "View Certificate",
            issued_by: "Issued by",
            issued_on: "Issued on",
            club: "Club",
            camp: "Camp",
            graduation: "Graduation",
            group_activities: "Group Activities",
            teamwork: "Teamwork",
            celebration: "Celebration Moment"
        },
        
        es: {
            loading: "Cargando...",
            view_code: "Ver código",
            repositories: "Repositorios",
            followers: "Seguidores",
            stars: "estrellas",
            completed: "Completado",
            in_progress: "En Progreso",
            planned: "Planificado",
            certificates: "Certificados",
            view_certificate: "Ver certificado",
            issued_by: "Emitido por",
            issued_on: "Emitido el",
            club: "Club",
            camp: "Campamento",
            graduation: "Graduación",
            group_activities: "Actividades en grupo",
            teamwork: "Trabalho en equipo",
            celebration: "Momento de celebración"
        },
        
        fr: {
            loading: "Chargement...",
            view_code: "Voir le code",
            repositories: "Dépôts",
            followers: "Abonnés",
            stars: "étoiles",
            completed: "Terminé",
            in_progress: "En Cours",
            planned: "Planifié",
            certificates: "Certificats",
            view_certificate: "Voir le certificat",
            issued_by: "Émis par",
            issued_on: "Émis le",
            club: "Club",
            camp: "Camp",
            graduation: "Remise de diplôme",
            group_activities: "Activités de groupe",
            teamwork: "Travail d'équipe",
            celebration: "Moment de célébration"
        },
        
        ru: {
            loading: "Загрузка...",
            view_code: "Посмотреть код",
            repositories: "Репозитории",
            followers: "Подписчики",
            stars: "звезды",
            completed: "Завершено",
            in_progress: "В процессе",
            planned: "Запланировано",
            certificates: "Сертификаты",
            view_certificate: "Посмотреть сертификат",
            issued_by: "Выдан",
            issued_on: "Выдан",
            club: "Клуб",
            camp: "Лагерь",
            graduation: "Выпускной",
            group_activities: "Групповые занятия",
            teamwork: "Командная работа",
            celebration: "Момент празднования"
        },
        
        zh: {
            loading: "加载中...",
            view_code: "查看代码",
            repositories: "仓库",
            followers: "关注者",
            stars: "星星",
            completed: "已完成",
            in_progress: "进行中",
            planned: "计划中",
            certificates: "证书",
            view_certificate: "查看证书",
            issued_by: "颁发机构",
            issued_on: "颁发日期",
            club: "俱乐部",
            camp: "营地",
            graduation: "毕业",
            group_activities: "小组活动",
            teamwork: "团队合作",
            celebration: "庆祝时刻"
        }
    };
    
    let currentLang = localStorage.getItem('preferredLang') || 'pt';
    
    // 🔧 FUNÇÃO PRINCIPAL: Aplica traduções SEM DESTRUIR HTML
    function applyTranslations() {
        const elements = document.querySelectorAll('[data-lang]');
        const langData = LANGUAGES[currentLang] || LANGUAGES.pt;
        let translatedCount = 0;
        let skippedCount = 0;
        
        elements.forEach(el => {
            const key = el.getAttribute('data-lang');
            const translation = langData[key];
            
            if (!translation) {
                skippedCount++;
                return;
            }
            
            // 🔒 PROTEÇÃO: Não traduz elementos com filhos HTML
            // (como <span data-lang="followers">: <strong>0</strong>)
            if (el.children.length > 0) {
                // Verifica se o primeiro child é um nó de texto que precisa tradução
                const firstChild = el.firstChild;
                if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
                    // Traduz APENAS o texto do primeiro child
                    firstChild.textContent = translation + ' ';
                    translatedCount++;
                }
                skippedCount++;
                return;
            }
            
            // 🔒 Evita duplicação
            if (el.textContent.trim() === translation) {
                skippedCount++;
                return;
            }
            
            el.textContent = translation;
            translatedCount++;
        });
        
        if (translatedCount > 0) {
            console.log(`✅ ${translatedCount} elementos traduzidos (${currentLang})`);
            if (skippedCount > 0) {
                console.log(`⚠️ ${skippedCount} elementos protegidos (com HTML interno)`);
            }
        }
    }
    
    // 🌐 FUNÇÃO: Muda idioma com segurança
    function changeLanguage(lang) {
        if (!LANGUAGES[lang]) {
            console.error(`❌ Idioma não suportado: ${lang}`);
            return false;
        }
        
        console.log(`🌐 Mudando para: ${lang}`);
        
        // Adiciona indicador visual
        document.body.classList.add('language-changing');
        
        // Atualiza estado
        currentLang = lang;
        localStorage.setItem('preferredLang', lang);
        
        // Atualiza HTML lang attribute
        document.documentElement.lang = lang;
        
        // Aplica traduções
        applyTranslations();
        
        // Atualiza botão de idioma
        updateLanguageButton(lang);
        
        // Remove indicador visual
        setTimeout(() => {
            document.body.classList.remove('language-changing');
        }, 300);
        
        console.log(`✅ Idioma alterado para: ${lang}`);
        return true;
    }
    
    // 🖱️ FUNÇÃO: Atualiza botão de idioma
    function updateLanguageButton(lang) {
        const buttons = document.querySelectorAll('.lang-btn, [data-lang-toggle]');
        
        const flagMap = {
            'pt': '🇵🇹', 'en': '🇺🇸', 'es': '🇪🇸',
            'fr': '🇫🇷', 'ru': '🇷🇺', 'zh': '🇨🇳'
        };
        
        const codeMap = {
            'pt': 'PT', 'en': 'EN', 'es': 'ES',
            'fr': 'FR', 'ru': 'RU', 'zh': 'ZH'
        };
        
        buttons.forEach(button => {
            // Atualiza conteúdo do botão principal
            if (button.classList.contains('lang-btn')) {
                button.innerHTML = `
                    <span class="flag">${flagMap[lang] || '🌐'}</span>
                    <span class="lang-code">${codeMap[lang] || lang.toUpperCase()}</span>
                    <i class="fas fa-chevron-down" style="margin-left: 5px; font-size: 12px;"></i>
                `;
            }
        });
        
        // Atualiza dropdown ativo
        document.querySelectorAll('.lang-option').forEach(option => {
            const optionLang = option.getAttribute('data-lang');
            if (optionLang === lang) {
                option.style.backgroundColor = '#f0f0f0';
                option.style.fontWeight = 'bold';
            } else {
                option.style.backgroundColor = '';
                option.style.fontWeight = '';
            }
        });
    }
    
    // 👀 Observador para elementos dinâmicos (PROJETOS, GALERIA, etc)
    const observer = new MutationObserver((mutations) => {
        let shouldTranslate = false;
        
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.hasAttribute('data-lang') || 
                            node.querySelector('[data-lang]')) {
                            shouldTranslate = true;
                        }
                    }
                });
            }
        });
        
        if (shouldTranslate) {
            setTimeout(applyTranslations, 100);
        }
    });
    
    // 🎛️ Configuração dos botões de idioma
    function setupLanguageButtons() {
        // Toggle dropdown
        document.addEventListener('click', (e) => {
            const langBtn = e.target.closest('.lang-btn');
            const langOption = e.target.closest('.lang-option');
            const dropdown = document.querySelector('.lang-dropdown');
            
            // Abre/fecha dropdown
            if (langBtn && dropdown) {
                e.stopPropagation();
                dropdown.classList.toggle('active');
                return;
            }
            
            // Seleciona idioma
            if (langOption && langOption.hasAttribute('data-lang')) {
                e.preventDefault();
                const lang = langOption.getAttribute('data-lang');
                
                if (changeLanguage(lang)) {
                    // Fecha dropdown
                    if (dropdown) dropdown.classList.remove('active');
                    
                    // Scroll suave para topo (opcional)
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                return;
            }
            
            // Fecha dropdown ao clicar fora
            if (dropdown && !e.target.closest('.language-selector')) {
                dropdown.classList.remove('active');
            }
        });
        
        // Fecha dropdown com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelector('.lang-dropdown')?.classList.remove('active');
            }
        });
    }
    
    // 🚀 INICIALIZAÇÃO
    function initialize() {
        console.log('🔧 Inicializando sistema único de tradução...');
        
        // 1. Configura botões
        setupLanguageButtons();
        
        // 2. Configura observador
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        
        // 3. Aplica traduções iniciais
        setTimeout(applyTranslations, 100);
        
        // 4. Atualiza botão
        updateLanguageButton(currentLang);
        
        console.log(`✅ Sistema pronto! Idioma: ${currentLang.toUpperCase()}`);
        
        // 5. Debug info
        setTimeout(() => {
            const elements = document.querySelectorAll('[data-lang]').length;
            console.log(`📊 ${elements} elementos traduzíveis encontrados`);
        }, 500);
    }
    
    // 🌍 API PÚBLICA (simples e direta)
    window.TranslationSystem = {
        changeLanguage: changeLanguage,
        getLanguage: () => currentLang,
        translate: (key) => LANGUAGES[currentLang]?.[key] || key,
        refresh: applyTranslations,
        getStatus: () => ({
            language: currentLang,
            elements: document.querySelectorAll('[data-lang]').length,
            supported: Object.keys(LANGUAGES)
        })
    };
    
    // 📱 Inicialização
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
})();
