// Script de diagnóstico para traduções
console.log('🔍 DIAGNÓSTICO DO SISTEMA DE TRADUÇÃO');

setTimeout(() => {
    console.log('=== STATUS DO SISTEMA ===');
    console.log('🌍 translationSystem:', window.translationSystem ? '✅ ENCONTRADO' : '❌ NÃO ENCONTRADO');
    console.log('🔧 translationSystemInstance:', translationSystemInstance ? '✅ ENCONTRADO' : '❌ NÃO ENCONTRADO');
    
    if (window.translationSystem) {
        console.log('📊 Idioma atual:', window.translationSystem.currentLang);
        console.log('🔄 Inicializado:', window.translationSystem.isInitialized);
        console.log('📝 Elementos com data-key:', document.querySelectorAll('[data-key]').length);
    }
    
    // Teste rápido de funcionalidade
    const testBtn = document.querySelector('.lang-btn');
    console.log('🎯 Botão de idioma:', testBtn ? '✅ ENCONTRADO' : '❌ NÃO ENCONTRADO');
    
}, 2000);

// Função helper para forçar tradução se necessário
window.forceRetranslate = function() {
    if (window.translationSystem && window.translationSystem.applyTranslations) {
        console.log('🔄 Forçando retradução...');
        window.translationSystem.applyTranslations();
    } else {
        console.log('❌ Sistema de tradução não disponível');
    }
};
