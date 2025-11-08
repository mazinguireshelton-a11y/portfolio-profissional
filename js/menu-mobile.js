// js/menu-mobile.js - Menu Mobile Funcional
console.log('📱 Menu Mobile carregado! Aguardando DOM...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM Carregado - Iniciando menu mobile...');
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navContainer = document.querySelector('.nav-container');
    
    console.log('🍔 Hamburger encontrado:', !!hamburger);
    console.log('📋 Nav Links encontrado:', !!navLinks);
    console.log('📦 Container encontrado:', !!navContainer);

    if (!hamburger || !navLinks) {
        console.error('❌ Elementos do menu não encontrados!');
        return;
    }

    function toggleMenu() {
        console.log('🍔 Hamburger clicado!');
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            console.log('📋 Menu ABERTO');
        } else {
            document.body.style.overflow = '';
            console.log('📋 Menu FECHADO');
        }
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
        console.log('🚪 Menu FECHADO');
    }

    // Configura eventos
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Fechar menu ao clicar nos links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (navContainer && !navContainer.contains(e.target) && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    // Fechar menu ao redimensionar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

    console.log('✅ Menu mobile configurado com sucesso!');
});

// Debug: verifica se script carregou
console.log('✅ menu-mobile.js carregado completamente');
