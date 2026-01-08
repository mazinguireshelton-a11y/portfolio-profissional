// js/intergation.js
console.log('🔧 SISTEMA DE TRADUÇÃO UNIFICADO INICIANDO...');

(function() {
    'use strict';
    
    class UnifiedTranslationSystem {
        constructor() {
            this.currentLang = 'pt';
            this.isReady = false;
            this.initialized = false;
            this.retryCount = 0;
            this.maxRetries = 10;
            
            this.init();
        }
        
        async init() {
            console.log('🚀 Inicializando sistema unificado...');
            
            // Espera todos os componentes
            await this.waitForComponents();
            
            // Configura o sistema
            this.setup();
            
            // Aplica traduções iniciais
            this.applyAllTranslations();
            
            // Configura observadores
            this.setupObservers();
            
            // Configura botões
            this.setupButtons();
            
            this.initialized = true;
            console.log('✅ Sistema unificado inicializado!');
            console.log(`🌍 Idioma: ${this.currentLang.toUpperCase()}`);
            
            // Teste automático
            this.runDiagnostic();
        }
        
        async waitForComponents() {
            return new Promise((resolve) => {
                const check = () => {
                    this.retryCount++;
                    
                    // Verifica componentes essenciais
                    const hasStatic = !!window.translationManager;
                    const hasDynamic = !!window.DynamicTranslator;
                    const hasLangManager = !!window.LangManager;
                    
                    if ((hasStatic || hasDynamic || hasLangManager) || this.retryCount >= this.maxRetries) {
                        console.log('📦 Componentes carregados:');
                        console.log(`   - translationManager: ${hasStatic ? '✅' : '❌'}`);
                        console.log(`   - DynamicTranslator: ${hasDynamic ? '✅' : '❌'}`);
                        console.log(`   - LangManager: ${hasLangManager ? '✅' : '❌'}`);
                        resolve();
                    } else {
                        setTimeout(check, 500);
                    }
                };
                
                check();
            });
        }
        
        setup() {
            // 1. Determina idioma atual
            this.determineCurrentLanguage();
            
            // 2. Cria ponte entre sistemas
            this.createBridge();
            
            // 3. Define função global
            window.unifiedTranslate = this;
            
            console.log('🔗 Ponte entre sistemas criada');
        }
        
        determineCurrentLanguage() {
            // Prioridade 1: translationManager
            if (window.translationManager?.currentLang) {
                this.currentLang = window.translationManager.currentLang;
            }
            // Prioridade 2: DynamicTranslator
            else if (window.DynamicTranslator?.getLanguage) {
                this.currentLang = window.DynamicTranslator.getLanguage();
            }
            // Prioridade 3: localStorage
            else if (localStorage.getItem('preferredLang')) {
                this.currentLang = localStorage.getItem('preferredLang');
            }
            // Prioridade 4: localStorage do translationManager
            else if (localStorage.getItem('site-lang')) {
                this.currentLang = localStorage.getItem('site-lang');
            }
            // Prioridade 5: HTML lang attribute
            else {
                this.currentLang = document.documentElement.lang || 'pt';
            }
            
            console.log(`🔍 Idioma determinado: ${this.currentLang}`);
        }
        
        createBridge() {
            // Se temos translationManager, sobrescreve changeLanguage
            if (window.translationManager) {
                const originalChangeLanguage = window.translationManager.changeLanguage;
                
                window.translationManager.changeLanguage = (lang, persist = true) => {
                    console.log(`🔄 translationManager: Mudando para ${lang}`);
                    
                    // Executa original
                    originalChangeLanguage.call(window.translationManager, lang, persist);
                    
                    // Atualiza estado interno
                    this.currentLang = lang;
                    
                    // Sincroniza outros sistemas
                    this.syncWithOtherSystems(lang);
                    
                    // Aplica todas as traduções
                    this.applyAllTranslations();
                    
                    // Atualiza botão
                    this.updateLanguageButton(lang);
                    
                    console.log(`✅ Traduções aplicadas para ${lang}`);
                };
            }
            
            // Se temos DynamicTranslator, sobrescreve setLanguage
            if (window.DynamicTranslator) {
                const originalSetLanguage = window.DynamicTranslator.setLanguage;
                
                window.DynamicTranslator.setLanguage = (lang) => {
                    console.log(`🔄 DynamicTranslator: Mudando para ${lang}`);
                    
                    // Executa original
                    originalSetLanguage.call(window.DynamicTranslator, lang);
                    
                    // Atualiza estado interno
                    this.currentLang = lang;
                    
                    // Sincroniza outros sistemas
                    this.syncWithOtherSystems(lang);
                    
                    // Força reaplicação de traduções dinâmicas
                    setTimeout(() => this.applyDynamicTranslations(), 100);
                    
                    console.log(`✅ Traduções dinâmicas aplicadas para ${lang}`);
                };
            }
        }
        
        syncWithOtherSystems(lang) {
            // Sincroniza translationManager → DynamicTranslator
            if (window.translationManager && window.DynamicTranslator) {
                if (window.DynamicTranslator.getLanguage() !== lang) {
                    window.DynamicTranslator.setLanguage(lang);
                }
            }
            
            // Sincroniza DynamicTranslator → translationManager
            if (window.DynamicTranslator && window.translationManager) {
                if (window.translationManager.currentLang !== lang) {
                    window.translationManager.changeLanguage(lang, false);
                }
            }
            
            // Atualiza localStorage
            localStorage.setItem('preferredLang', lang);
            localStorage.setItem('site-lang', lang);
            
            // Atualiza HTML
            document.documentElement.lang = lang;
        }
        
        applyAllTranslations() {
            console.log('🎯 Aplicando TODAS as traduções...');
            
            // 1. Traduções estáticas (data-key)
            this.applyStaticTranslations();
            
            // 2. Traduções dinâmicas (data-lang)
            setTimeout(() => this.applyDynamicTranslations(), 50);
            
            // 3. Traduções em projetos dinâmicos
            setTimeout(() => this.updateDynamicContent(), 100);
            
            console.log('✅ Todas as traduções aplicadas');
        }
        
        applyStaticTranslations() {
            if (!window.translationManager) return;
            
            const elements = document.querySelectorAll('[data-key]');
            console.log(`📊 Elementos estáticos encontrados: ${elements.length}`);
            
            // translationManager já cuida disso automaticamente
            // Esta função é apenas para logging
        }
        
        applyDynamicTranslations() {
            if (!window.DynamicTranslator) return;
            
            const elements = document.querySelectorAll('[data-lang]');
            console.log(`📊 Elementos dinâmicos encontrados: ${elements.length}`);
            
            // DynamicTranslator já cuida disso via MutationObserver
            // Esta função é apenas para forçar atualização
        }
        
        updateDynamicContent() {
            // Atualiza projetos dinâmicos se existirem
            if (window.githubIntegration) {
                console.log('🔄 Atualizando conteúdo dinâmico...');
                // Você pode adicionar lógica específica aqui
            }
            
            // Atualiza galeria se existir
            if (window.youngLifeGallery) {
                // Lógica para galeria
            }
        }
        
        setupObservers() {
            // Observa mudanças no DOM para elementos novos
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.addedNodes.length > 0) {
                        // Pequeno delay para garantir renderização
                        setTimeout(() => {
                            // Reaplica traduções para novos elementos
                            if (window.DynamicTranslator) {
                                const newElements = document.querySelectorAll('[data-lang]');
                                if (newElements.length > 0) {
                                    console.log(`🆕 ${newElements.length} novos elementos para tradução`);
                                }
                            }
                        }, 200);
                    }
                });
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            console.log('👀 Observador de DOM configurado');
        }
        
        setupButtons() {
            // Configura botões de idioma
            document.addEventListener('click', (e) => {
                const langBtn = e.target.closest('[data-set-lang]');
                const langOption = e.target.closest('[data-lang]');
                
                if (langBtn) {
                    e.preventDefault();
                    const lang = langBtn.getAttribute('data-set-lang');
                    this.changeLanguage(lang);
                }
                
                if (langOption && langOption.hasAttribute('data-lang') && 
                    ['pt', 'en', 'es', 'fr', 'ru', 'zh'].includes(langOption.getAttribute('data-lang'))) {
                    e.preventDefault();
                    const lang = langOption.getAttribute('data-lang');
                    this.changeLanguage(lang);
                }
                
                // Fecha dropdown se aberto
                const dropdown = document.querySelector('.lang-dropdown');
                if (dropdown && dropdown.classList.contains('active')) {
                    if (!e.target.closest('.language-selector')) {
                        dropdown.classList.remove('active');
                    }
                }
            });
            
            // Botão toggle dropdown
            const mainBtn = document.querySelector('.lang-btn');
            if (mainBtn) {
                mainBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const dropdown = document.querySelector('.lang-dropdown');
                    if (dropdown) {
                        dropdown.classList.toggle('active');
                    }
                });
            }
            
            // Fecha dropdown ao clicar fora
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.language-selector')) {
                    const dropdown = document.querySelector('.lang-dropdown');
                    if (dropdown) {
                        dropdown.classList.remove('active');
                    }
                }
            });
            
            console.log('🖱️ Botões configurados');
        }
        
        updateLanguageButton(lang) {
            const button = document.querySelector('.lang-btn');
            if (!button) return;
            
            const flagMap = {
                'pt': '🇵🇹', 'en': '🇺🇸', 'es': '🇪🇸',
                'fr': '🇫🇷', 'ru': '🇷🇺', 'zh': '🇨🇳'
            };
            
            const codeMap = {
                'pt': 'PT', 'en': 'EN', 'es': 'ES',
                'fr': 'FR', 'ru': 'RU', 'zh': 'ZH'
            };
            
            // Atualiza conteúdo do botão
            button.innerHTML = `
                <span class="flag">${flagMap[lang] || '🌐'}</span>
                <span class="lang-code">${codeMap[lang] || lang.toUpperCase()}</span>
                <i class="fas fa-chevron-down" style="margin-left: 5px; font-size: 12px;"></i>
            `;
            
            // Atualiza dropdown ativo
            const dropdownOptions = document.querySelectorAll('.lang-option');
            dropdownOptions.forEach(option => {
                const optionLang = option.getAttribute('data-set-lang');
                if (optionLang === lang) {
                    option.style.backgroundColor = '#f0f0f0';
                    option.style.fontWeight = 'bold';
                } else {
                    option.style.backgroundColor = '';
                    option.style.fontWeight = '';
                }
            });
        }
        
        changeLanguage(lang) {
            console.log(`🌐 Mudando idioma para: ${lang}`);
            
            // Adiciona classe de transição
            document.body.classList.add('language-changing');
            
            // Usa o sistema disponível
            if (window.translationManager) {
                window.translationManager.changeLanguage(lang);
            } else if (window.DynamicTranslator) {
                window.DynamicTranslator.setLanguage(lang);
            } else if (window.setLang) {
                window.setLang(lang);
            } else {
                console.error('❌ Nenhum sistema de tradução disponível');
            }
            
            // Remove classe de transição após 500ms
            setTimeout(() => {
                document.body.classList.remove('language-changing');
            }, 500);
            
            // Fecha dropdown
            const dropdown = document.querySelector('.lang-dropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
        }
        
        runDiagnostic() {
            setTimeout(() => {
                console.log('🧪 EXECUTANDO DIAGNÓSTICO COMPLETO...');
                console.log('='.repeat(60));
                
                // Conta elementos
                const staticElements = document.querySelectorAll('[data-key]').length;
                const dynamicElements = document.querySelectorAll('[data-lang]').length;
                
                console.log(`📊 ELEMENTOS ENCONTRADOS:`);
                console.log(`   - Estáticos (data-key): ${staticElements}`);
                console.log(`   - Dinâmicos (data-lang): ${dynamicElements}`);
                console.log(`   - Total: ${staticElements + dynamicElements}`);
                
                // Verifica traduções
                console.log(`🔍 VERIFICAÇÃO DE TRADUÇÕES:`);
                
                // Verifica alguns elementos chave
                const keyElements = [
                    { selector: '[data-key="hero.title"]', name: 'Título Hero' },
                    { selector: '[data-lang="followers"]', name: 'Seguidores' },
                    { selector: '[data-lang="view_code"]', name: 'Ver Código' },
                    { selector: '[data-key="nav.about"]', name: 'Menu Sobre' }
                ];
                
                keyElements.forEach(item => {
                    const el = document.querySelector(item.selector);
                    if (el) {
                        const text = el.textContent.trim();
                        const isTranslated = !text.includes('[') && !text.includes('...') && text.length > 1;
                        console.log(`   ${isTranslated ? '✅' : '❌'} ${item.name}: "${text.substring(0, 30)}${text.length > 30 ? '...' : ''}"`);
                    } else {
                        console.log(`   ❌ ${item.name}: Elemento não encontrado`);
                    }
                });
                
                // Status do sistema
                console.log(`📈 STATUS DO SISTEMA:`);
                console.log(`   - Idioma atual: ${this.currentLang.toUpperCase()}`);
                console.log(`   - Sistemas ativos: ${Object.keys(this.systems).filter(k => this.systems[k]).length}/3`);
                console.log(`   - Integração: ${this.initialized ? '✅ OK' : '❌ FALHOU'}`);
                
                console.log('='.repeat(60));
                console.log('🎯 DIAGNÓSTICO CONCLUÍDO');
                
                // Mostra popup de diagnóstico
                this.showDiagnosticPopup(staticElements, dynamicElements);
                
            }, 2000);
        }
        
        showDiagnosticPopup(staticCount, dynamicCount) {
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 12px;
                z-index: 9999;
                font-family: 'Inter', sans-serif;
                max-width: 300px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                border-left: 5px solid #4CAF50;
                animation: slideIn 0.5s ease;
            `;
            
            // Adiciona CSS de animação
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
            
            popup.innerHTML = `
                <h3 style="margin: 0 0 15px 0; display: flex; align-items: center; gap: 10px;">
                    <span>🔧</span> SISTEMA DE TRADUÇÃO
                </h3>
                <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>Elementos estáticos:</span>
                        <strong>${staticCount}</strong>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>Elementos dinâmicos:</span>
                        <strong>${dynamicCount}</strong>
                    </div>
                </div>
                <div style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>Idioma atual:</span>
                        <strong style="background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px;">
                            ${this.currentLang.toUpperCase()}
                        </strong>
                    </div>
                </div>
                <div style="font-size: 12px; opacity: 0.8; text-align: center;">
                    Sistema unificado ativo ✅
                    <br>
                    <small>Clique para fechar</small>
                </div>
            `;
            
            document.body.appendChild(popup);
            
            // Fecha ao clicar
            popup.addEventListener('click', () => popup.remove());
            
            // Fecha automaticamente após 10 segundos
            setTimeout(() => {
                if (document.body.contains(popup)) {
                    popup.style.opacity = '0';
                    popup.style.transform = 'translateX(100%)';
                    setTimeout(() => popup.remove(), 500);
                }
            }, 10000);
        }
        
        // API pública
        forceRefresh() {
            console.log('🔄 Forçando atualização de traduções...');
            this.applyAllTranslations();
        }
        
        getStatus() {
            return {
                initialized: this.initialized,
                currentLang: this.currentLang,
                staticElements: document.querySelectorAll('[data-key]').length,
                dynamicElements: document.querySelectorAll('[data-lang]').length,
                timestamp: new Date().toISOString()
            };
        }
    }
    
    // Inicialização
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.UnifiedTranslation = new UnifiedTranslationSystem();
        });
    } else {
        window.UnifiedTranslation = new UnifiedTranslationSystem();
    }
})();
