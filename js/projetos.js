// js/projetos.js - VERSÃO CORRIGIDA E TESTADA
console.log('🎯 PROJETOS.JS CARREGADO! Verificando elementos...');

class GitHubIntegration {
    constructor() {
        this.username = 'mazinguireshelton-a11y';
        this.repos = [];
        this.init();
    }

    async init() {
        console.log('🚀 Iniciando GitHub Integration para:', this.username);
        
        // Verificar se o container existe
        const container = document.getElementById('projetosGitHub');
        console.log('📦 Container encontrado:', !!container);
        
        if (!container) {
            console.error('❌ ERRO CRÍTICO: Elemento #projetosGitHub não encontrado no HTML!');
            this.criarContainerManual();
            return;
        }

        // Mostrar loading imediatamente
        this.mostrarLoading();
        
        // Carregar dados do GitHub
        await this.carregarDadosGitHub();
    }

    criarContainerManual() {
        console.log('🛠️ Tentando criar container manualmente...');
        const programacaoSection = document.querySelector('#programacao .container');
        if (programacaoSection) {
            const projetosHTML = `
                <div class="projetos-section">
                    <h3>🚀 Meus Projetos no GitHub</h3>
                    <div class="projetos-grid" id="projetosGitHub">
                        <div class="projeto-card">
                            <h4>⚠️ Container Criado Manualmente</h4>
                            <p>O sistema está funcionando, mas houve um problema com o HTML.</p>
                        </div>
                    </div>
                </div>
            `;
            programacaoSection.insertAdjacentHTML('beforeend', projetosHTML);
        }
    }

    mostrarLoading() {
        const container = document.getElementById('projetosGitHub');
        if (container) {
            container.innerHTML = `
                <div class="loading-projects">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Carregando projetos do GitHub...</p>
                    <small>Usuário: ${this.username}</small>
                </div>
            `;
        }
    }

    async carregarDadosGitHub() {
        try {
            console.log('📡 Conectando com GitHub API...');
            
            // Primeiro busca dados do usuário
            const userResponse = await fetch(`https://api.github.com/users/${this.username}`);
            console.log('👤 Status do usuário:', userResponse.status);
            
            if (userResponse.ok) {
                const userData = await userResponse.json();
                console.log('✅ Usuário encontrado:', userData.name);
                
                // Atualizar contadores
                this.atualizarContadores(userData);
            }

            // Buscar repositórios
            const reposResponse = await fetch(`https://api.github.com/users/${this.username}/repos?sort=updated&per_page=10`);
            console.log('📚 Status dos repositórios:', reposResponse.status);
            
            if (reposResponse.ok) {
                this.repos = await reposResponse.json();
                console.log(`✅ ${this.repos.length} repositórios carregados:`);
                this.repos.forEach(repo => console.log(`   - ${repo.name}`));
                
                this.renderizarProjetos();
            } else {
                throw new Error(`GitHub API retornou status: ${reposResponse.status}`);
            }

        } catch (error) {
            console.error('❌ Erro ao carregar do GitHub:', error);
            this.mostrarErro(error);
        }
    }

    atualizarContadores(userData) {
        console.log('🔢 Atualizando contadores...');
        
        const repoCount = document.getElementById('repoCount');
        const followersCount = document.getElementById('followersCount');
        const projetosCount = document.getElementById('projetos-count');
        
        if (repoCount) {
            repoCount.textContent = userData.public_repos || 0;
            console.log('✅ Repositórios atualizado:', userData.public_repos);
        }
        
        if (followersCount) {
            followersCount.textContent = userData.followers || 0;
            console.log('✅ Seguidores atualizado:', userData.followers);
        }
       
        if (projetosCount) {
           projetosCount.textContent = userData.public_repos || 0;
       }
    }

    determinarStatus(repo) {
        // Lógica inteligente para determinar status
        const now = new Date();
        const updated = new Date(repo.updated_at);
        const diffTime = now - updated;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        if (repo.archived) {
            return 'completed'; // Arquivos = Concluídos
        } else if (diffDays <= 30) {
            return 'in-progress'; // Atualizado recentemente = Em andamento
        } else {
            return 'planned'; // Antigo = Planejado
        }
    }

    renderizarProjetos() {
        const container = document.getElementById('projetosGitHub');
        if (!container) {
            console.error('❌ Container não encontrado para renderizar');
            return;
        }

        if (this.repos.length === 0) {
            container.innerHTML = `
                <div class="projeto-card">
                    <div class="projeto-header">
                        <h4>📭 Nenhum Repositório Encontrado</h4>
                    </div>
                    <p>Não foram encontrados repositórios públicos para o usuário <strong>${this.username}</strong>.</p>
                    <div class="projeto-links">
                        <a href="https://github.com/${this.username}" target="_blank" class="btn-link">
                            <i class="fab fa-github"></i>
                            Ver Perfil no GitHub
                        </a>
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = this.repos.map(repo => {
            const status = this.determinarStatus(repo);
            const statusText = this.getStatusText(status);
            
            return `
            <div class="projeto-card">
                <div class="projeto-header">
                    <h4>${this.formatarNome(repo.name)}</h4>
                    <span class="projeto-status ${status}">
                        ${statusText}
                    </span>
                </div>
                
                <p class="projeto-desc">${repo.description || 'Repositório sem descrição.'}</p>
                
                <div class="projeto-technologies">
                    ${repo.language ? `<span class="tech-tag">${repo.language}</span>` : ''}
                    ${repo.topics && repo.topics.length > 0 ? 
                        repo.topics.slice(0, 3).map(topic => 
                            `<span class="tech-tag">${topic}</span>`
                        ).join('') : ''}
                </div>
                
                <div class="projeto-links">
                    <a href="${repo.html_url}" target="_blank" class="btn-link">
                        <i class="fab fa-github"></i>
                        Ver Código
                    </a>
                    ${repo.homepage ? `
                        <a href="${repo.homepage}" target="_blank" class="btn-link btn-secondary">
                            <i class="fas fa-external-link-alt"></i>
                            Ver Demo
                        </a>
                    ` : ''}
                </div>
                
                <div class="projeto-meta">
                    <span>📅 ${new Date(repo.updated_at).toLocaleDateString('pt-BR')}</span>
                    <span>⭐ ${repo.stargazers_count} stars</span>
                </div>
            </div>
            `;
        }).join('');

        console.log('🎉 Projetos renderizados com sucesso!');
    }

    formatarNome(nome) {
        return nome.split('-')
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join(' ');
    }

    getStatusText(status) {
        const textos = {
            'completed': '✅ Concluído',
            'in-progress': '🟡 Em Andamento',
            'planned': '🔵 Planejado'
        };
        return textos[status] || status;
    }

    mostrarErro(error) {
        const container = document.getElementById('projetosGitHub');
        if (container) {
            container.innerHTML = `
                <div class="projeto-card error">
                    <div class="projeto-header">
                        <h4>❌ Erro ao Carregar Projetos</h4>
                    </div>
                    <p>Não foi possível carregar os projetos do GitHub.</p>
                    <p><strong>Erro:</strong> ${error.message}</p>
                    <div class="projeto-links">
                        <a href="https://github.com/${this.username}" target="_blank" class="btn-link">
                            <i class="fab fa-github"></i>
                            Ver GitHub Manualmente
                        </a>
                    </div>
                </div>
                
                <!-- Projetos de exemplo -->
                <div class="projeto-card">
                    <div class="projeto-header">
                        <h4>Portfólio Pessoal</h4>
                        <span class="projeto-status completed">✅ Concluído</span>
                    </div>
                    <p>Website pessoal desenvolvido com HTML, CSS e JavaScript.</p>
                    <div class="projeto-technologies">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                </div>
                
                <div class="projeto-card">
                    <div class="projeto-header">
                        <h4>Automação Residencial</h4>
                        <span class="projeto-status in-progress">🟡 Em Andamento</span>
                    </div>
                    <p>Sistema de controle com Arduino e sensores.</p>
                    <div class="projeto-technologies">
                        <span class="tech-tag">Arduino</span>
                        <span class="tech-tag">C++</span>
                    </div>
                </div>
            `;
        }
    }
}

// CSS ESSENCIAL - Adicionar dinamicamente
const essentialCSS = `
    .projeto-card {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        margin-bottom: 1.5rem;
        border-left: 4px solid #1a365d;
        transition: all 0.3s ease;
    }
    
    .projeto-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.15);
    }
    
    .projeto-card.error {
        border-left-color: #e53e3e;
    }
    
    .projeto-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .projeto-header h4 {
        color: #1a365d;
        margin: 0;
        flex: 1;
        font-size: 1.1rem;
    }
    
    .projeto-status {
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        white-space: nowrap;
    }
    
    .projeto-status.completed {
        background: #38a169;
        color: white;
    }
    
    .projeto-status.in-progress {
        background: #d69e2e;
        color: white;
    }
    
    .projeto-status.planned {
        background: #2d6a9c;
        color: white;
    }
    
    .projeto-desc {
        font-size: 0.9rem;
        margin-bottom: 1rem;
        line-height: 1.5;
        color: #4a5568;
    }
    
    .projeto-technologies {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    
    .tech-tag {
        background: #e2e8f0;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 0.8rem;
        color: #2d3748;
        font-weight: 500;
    }
    
    .projeto-links {
        display: flex;
        gap: 1rem;
        margin: 1.5rem 0 1rem;
        flex-wrap: wrap;
    }
    
    .btn-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 8px 16px;
        background: #1a365d;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-size: 0.85rem;
        transition: all 0.3s ease;
    }
    
    .btn-link:hover {
        background: #0f2547;
        transform: translateY(-2px);
    }
    
    .btn-secondary {
        background: #2d6a9c;
    }
    
    .projeto-meta {
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: #718096;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #e2e8f0;
    }
    
    .loading-projects {
        text-align: center;
        padding: 3rem;
        color: #718096;
    }
    
    .loading-projects i {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #1a365d;
    }
`;

// Adicionar CSS ao documento
if (!document.querySelector('#projetos-css')) {
    const style = document.createElement('style');
    style.id = 'projetos-css';
    style.textContent = essentialCSS;
    document.head.appendChild(style);
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('💼 DOM Carregado - Iniciando GitHub Integration...');
    window.githubIntegration = new GitHubIntegration();
});

// Backup: Inicializar também quando window carregar
window.addEventListener('load', function() {
    console.log('🔄 Window Carregado - Verificando se GitHub Integration iniciou...');
    if (!window.githubIntegration) {
        console.log('⚡ Iniciando GitHub Integration via window.load...');
        window.githubIntegration = new GitHubIntegration();
    }
});
