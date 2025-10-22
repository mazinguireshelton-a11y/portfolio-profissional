// Integração com GitHub - SEU PERFIL REAL
class GitHubIntegration {
    constructor() {
        this.username = 'mazinguireshelton-a11y';
        this.repos = [];
        this.userData = null;
        this.init();
    }

    async init() {
        console.log(`🚀 Iniciando integração com GitHub: ${this.username}`);
        await this.carregarDadosGitHub();
        this.renderizarPerfil();
        this.renderizarProjetos();
        this.atualizarEstatisticas();
    }

    async carregarDadosGitHub() {
        try {
            console.log('📡 Buscando dados do GitHub...');
            
            // Buscar dados do usuário
            const userResponse = await fetch(`https://api.github.com/users/${this.username}`);
            if (!userResponse.ok) throw new Error('Erro ao buscar usuário');
            this.userData = await userResponse.json();
            console.log('✅ Dados do usuário carregados:', this.userData);

            // Buscar repositórios
            const reposResponse = await fetch(`https://api.github.com/users/${this.username}/repos?sort=updated&per_page=10`);
            if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios');
            this.repos = await reposResponse.json();
            console.log(`✅ ${this.repos.length} repositórios carregados`);

        } catch (error) {
            console.error('❌ Erro ao carregar dados do GitHub:', error);
            this.usarDadosMock();
        }
    }

    usarDadosMock() {
        console.log('🔄 Usando dados mock para demonstração...');
        this.userData = {
            public_repos: 8,
            followers: 12,
            following: 5,
            html_url: `https://github.com/${this.username}`,
            name: 'Shelton Manuel',
            bio: 'Estudante | Programador junior | Líder | Atleta',
            avatar_url: 'https://via.placeholder.com/100/1a365d/ffffff?text=SM'
        };

        this.repos = [
            {
                name: 'Sistema de Automação Residencial',
                description: 'Sistema de controle residencial usando Arduino e sensores para automação de luzes e temperatura.',
                html_url: `https://github.com/${this.username}/automacao-residencial`,
                language: 'C++',
                topics: ['arduino', 'automacao', 'iot'],
                updated_at: '2024-10-01'
            },
            {
                name: 'Portfólio Pessoal',
                description: 'Website pessoal desenvolvido com HTML, CSS e JavaScript para showcase de projetos e habilidades.',
                html_url: `https://github.com/${this.username}/portfolio`,
                homepage: 'https://mazinguireshelton-a11y.github.io',
                language: 'HTML',
                topics: ['html', 'css', 'javascript', 'portfolio'],
                updated_at: '2024-10-15'
            },
            {
                name: 'Simulador de Circuitos Eletrônicos',
                description: 'Ferramenta para simulação de circuitos eletrônicos usando Python e interfaces gráficas.',
                html_url: `https://github.com/${this.username}/simulador-circuitos`,
                language: 'Python',
                topics: ['python', 'tkinter', 'circuitos'],
                updated_at: '2024-09-20'
            }
        ];
    }

    renderizarPerfil() {
        const container = document.getElementById('githubProfile');
        if (!container || !this.userData) return;

        container.innerHTML = `
            <div class="github-header">
                <div class="github-avatar">
                    <img src="${this.userData.avatar_url}" alt="${this.userData.name || this.username}" 
                         onerror="this.src='https://via.placeholder.com/100/1a365d/ffffff?text=SM'">
                </div>
                <div class="github-info">
                    <h3>${this.userData.name || this.username}</h3>
                    <p class="github-bio">${this.userData.bio || 'Estudante | Programador junior | Líder | Atleta'}</p>
                    <div class="github-stats">
                        <div class="github-stat">
                            <strong>${this.userData.public_repos || 0}</strong>
                            <span>Repositórios</span>
                        </div>
                        <div class="github-stat">
                            <strong>${this.userData.followers || 0}</strong>
                            <span>Seguidores</span>
                        </div>
                        <div class="github-stat">
                            <strong>${this.userData.following || 0}</strong>
                            <span>Seguindo</span>
                        </div>
                    </div>
                    <a href="${this.userData.html_url}" target="_blank" class="github-link-btn">
                        <i class="fab fa-github"></i>
                        Visitar GitHub
                    </a>
                </div>
            </div>
        `;
    }

    renderizarProjetos() {
        const container = document.getElementById('projetosGitHub');
        if (!container) return;

        if (this.repos.length === 0) {
            container.innerHTML = `
                <div class="empty-projects">
                    <h4>📭 Nenhum repositório encontrado</h4>
                    <p>Os repositórios serão carregados em breve...</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.repos.map(repo => `
            <div class="projeto-card">
                <div class="projeto-header">
                    <h4>${repo.name}</h4>
                    <span class="projeto-status completed">Concluído</span>
                </div>
                <p>${repo.description || 'Repositório sem descrição.'}</p>
                
                <div class="projeto-technologies">
                    ${repo.language ? `<span class="tech-tag">${repo.language}</span>` : ''}
                    ${repo.topics ? repo.topics.slice(0, 3).map(topic => 
                        `<span class="tech-tag">${topic}</span>`
                    ).join('') : ''}
                </div>
                
                <div class="projeto-links">
                    <a href="${repo.html_url}" target="_blank" class="btn-link">
                        <i class="fab fa-github"></i>
                        Código
                    </a>
                    ${repo.homepage ? `
                        <a href="${repo.homepage}" target="_blank" class="btn-link btn-secondary">
                            <i class="fas fa-external-link-alt"></i>
                            Demo
                        </a>
                    ` : ''}
                </div>
                
                <div class="projeto-update">
                    <small>Atualizado em ${new Date(repo.updated_at).toLocaleDateString('pt-BR')}</small>
                </div>
            </div>
        `).join('');
    }

    atualizarEstatisticas() {
        // Atualizar contadores na seção "Sobre Mim"
        const repoCount = document.getElementById('repoCount');
        const followersCount = document.getElementById('followersCount');
        
        if (repoCount) repoCount.textContent = this.userData.public_repos || 0;
        if (followersCount) followersCount.textContent = this.userData.followers || 0;
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('💼 Inicializando integração GitHub...');
    window.githubIntegration = new GitHubIntegration();
});
