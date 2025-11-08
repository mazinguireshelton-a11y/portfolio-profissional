// js/main.js - VERSÃO CORRIGIDA E TRADUZÍVEL
console.log('🚀 Inicializando main.js (Projetos e Cursos)...');

// Função helper para esperar o translationSystem
        });
    }

    // Load projects data (agora com chaves)
    loadProjects() {
        this.projects = [
            {
                id: 1,
                key: 'proj1', // Chave de tradução
                technologies: ['Arduino', 'C++', 'Tinkercad'],
                githubUrl: 'https://github.com/mazinguireshelton-a11y/automacao-residencial',
                demoUrl: null,
                status: 'completed',
                category: 'robotics'
            },
            {
                id: 2,
                key: 'proj2', // Chave de tradução
                technologies: ['HTML5', 'CSS3', 'JavaScript'],
                githubUrl: 'https://github.com/mazinguireshelton-a11y/portfolio',
                demoUrl: 'https://mazinguireshelton-a11y.github.io/portfolio',
                status: 'in-progress',
                category: 'web'
            },
            {
                id: 3,
                key: 'proj3', // Chave de tradução
                technologies: ['Python', 'Tkinter', 'NumPy'],
                githubUrl: 'https://github.com/mazinguireshelton-a11y/simulador-circuitos',
                demoUrl: null,
                status: 'planned',
                category: 'programming'
            }
        ];
        // Atualiza o contador de projetos
        const el = document.getElementById('projetos-count');
        if (el) el.textContent = this.projects.length;
    }

    async loadGitHubData() {
        try {
            const response = await fetch('https://api.github.com/users/mazinguireshelton-a11y');
            if (response.ok) {
                const data = await response.json();
                this.githubData = {
                    repos: data.public_repos || 0,
                    followers: data.followers || 0,
                    profileUrl: data.html_url || 'https://github.com/mazinguireshelton-a11y'
                };
            } else {
                throw new Error('Falha ao buscar dados do GitHub');
            }
        } catch (error) {
            console.warn('Não foi possível carregar dados do GitHub:', error);
            // Fallback data
            this.githubData = {
                repos: 3, // Fallback manual
                followers: 0,
                profileUrl: 'https://github.com/mazinguireshelton-a11y'
            };
        }
    }

    // Render projects to the DOM (agora busca traduções)
    renderProjects() {
        const container = document.getElementById('projetosGitHub');
        if (!container) return;
        
        if (!window.translationSystem) {
             console.warn('⚠️ Tentativa de renderizar projetos antes do sistema de tradução.');
             return;
        }

