// js/projetos.js - CORRECTED AND TESTED VERSION
console.log('🎯 PROJECTS.JS LOADED! Checking elements...');

class GitHubIntegration {
    constructor() {
        this.username = 'mazinguireshelton-a11y';
        this.repos = [];
        this.init();
    }

    async init() {
        console.log('🚀 Starting GitHub Integration for:', this.username);
        
        // Check if container exists
        const container = document.getElementById('projetosGitHub');
        console.log('📦 Container found:', !!container);
        
        if (!container) {
            console.error('❌ CRITICAL ERROR: Element #projetosGitHub not found in HTML!');
            this.createManualContainer();
            return;
        }

        // Show loading immediately
        this.showLoading();
        
        // Load GitHub data
        await this.loadGitHubData();
    }

    createManualContainer() {
        console.log('🛠️ Trying to create container manually...');
        const programmingSection = document.querySelector('#programacao .container');
        if (programmingSection) {
            const projectsHTML = `
                <div class="projetos-section">
                    <h3>🚀 My GitHub Projects</h3>
                    <div class="projetos-grid" id="projetosGitHub">
                        <div class="projeto-card">
                            <h4>⚠️ Container Created Manually</h4>
                            <p>The system is working, but there was an issue with the HTML.</p>
                        </div>
                    </div>
                </div>
            `;
            programmingSection.insertAdjacentHTML('beforeend', projectsHTML);
        }
    }

    showLoading() {
        const container = document.getElementById('projetosGitHub');
        if (container) {
            container.innerHTML = `
                <div class="loading-projects">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Loading GitHub projects...</p>
                    <small>User: ${this.username}</small>
                </div>
            `;
        }
    }

    async loadGitHubData() {
        try {
            console.log('📡 Connecting to GitHub API...');
            
            // First fetch user data
            const userResponse = await fetch(`https://api.github.com/users/${this.username}`);
            console.log('👤 User status:', userResponse.status);
            
            if (userResponse.ok) {
                const userData = await userResponse.json();
                console.log('✅ User found:', userData.name);
                
                // Update counters
                this.updateCounters(userData);
            }

            // Fetch repositories
            const reposResponse = await fetch(`https://api.github.com/users/${this.username}/repos?sort=updated&per_page=10`);
            console.log('📚 Repositories status:', reposResponse.status);
            
            if (reposResponse.ok) {
                this.repos = await reposResponse.json();
                console.log(`✅ ${this.repos.length} repositories loaded:`);
                this.repos.forEach(repo => console.log(`   - ${repo.name}`));
                
                this.renderProjects();
            } else {
                throw new Error(`GitHub API returned status: ${reposResponse.status}`);
            }

        } catch (error) {
            console.error('❌ Error loading from GitHub:', error);
            this.showError(error);
        }
    }

    updateCounters(userData) {
        console.log('🔢 Updating counters...');
        
        const repoCount = document.getElementById('repoCount');
        const followersCount = document.getElementById('followersCount');
        const projetosCount = document.getElementById('projetos-count');
        
        if (repoCount) {
            repoCount.textContent = userData.public_repos || 0;
            console.log('✅ Repositories updated:', userData.public_repos);
        }
        
        if (followersCount) {
            followersCount.textContent = userData.followers || 0;
            console.log('✅ Followers updated:', userData.followers);
        }
       
        if (projetosCount) {
           projetosCount.textContent = userData.public_repos || 0;
       }
    }

    determineStatus(repo) {
        // Intelligent logic to determine status
        const now = new Date();
        const updated = new Date(repo.updated_at);
        const diffTime = now - updated;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        
        if (repo.archived) {
            return 'completed'; // Archived = Completed
        } else if (diffDays <= 30) {
            return 'in-progress'; // Recently updated = In progress
        } else {
            return 'planned'; // Old = Planned
        }
    }

    renderProjects() {
        const container = document.getElementById('projetosGitHub');
        if (!container) {
            console.error('❌ Container not found for rendering');
            return;
        }

        if (this.repos.length === 0) {
            container.innerHTML = `
                <div class="projeto-card">
                    <div class="projeto-header">
                        <h4>📭 No Repositories Found</h4>
                    </div>
                    <p>No public repositories found for user <strong>${this.username}</strong>.</p>
                    <div class="projeto-links">
                        <a href="https://github.com/${this.username}" target="_blank" class="btn-link">
                            <i class="fab fa-github"></i>
                            View Profile on GitHub
                        </a>
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = this.repos.map(repo => {
            const status = this.determineStatus(repo);
            const statusText = this.getStatusText(status);
            
            return `
            <div class="projeto-card">
                <div class="projeto-header">
                    <h4>${this.formatName(repo.name)}</h4>
                    <span class="projeto-status ${status}">
                        ${statusText}
                    </span>
                </div>
                
                <p class="projeto-desc">${repo.description || 'Repository without description.'}</p>
                
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
                        View Code
                    </a>
                    ${repo.homepage ? `
                        <a href="${repo.homepage}" target="_blank" class="btn-link btn-secondary">
                            <i class="fas fa-external-link-alt"></i>
                            View Demo
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

        console.log('🎉 Projects rendered successfully!');
    }

    formatName(name) {
        return name.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    getStatusText(status) {
        const texts = {
            'completed': '✅ Completed',
            'in-progress': '🟡 In Progress',
            'planned': '🔵 Planned'
        };
        return texts[status] || status;
    }

    showError(error) {
        const container = document.getElementById('projetosGitHub');
        if (container) {
            container.innerHTML = `
                <div class="projeto-card error">
                    <div class="projeto-header">
                        <h4>❌ Error Loading Projects</h4>
                    </div>
                    <p>Could not load projects from GitHub.</p>
                    <p><strong>Error:</strong> ${error.message}</p>
                    <div class="projeto-links">
                        <a href="https://github.com/${this.username}" target="_blank" class="btn-link">
                            <i class="fab fa-github"></i>
                            View GitHub Manually
                        </a>
                    </div>
                </div>
                
                <!-- Example projects -->
                <div class="projeto-card">
                    <div class="projeto-header">
                        <h4>Personal Portfolio</h4>
                        <span class="projeto-status completed">✅ Completed</span>
                    </div>
                    <p>Personal website developed with HTML, CSS and JavaScript.</p>
                    <div class="projeto-technologies">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                </div>
                
                <div class="projeto-card">
                    <div class="projeto-header">
                        <h4>Home Automation</h4>
                        <span class="projeto-status in-progress">🟡 In Progress</span>
                    </div>
                    <p>Control system with Arduino and sensors.</p>
                    <div class="projeto-technologies">
                        <span class="tech-tag">Arduino</span>
                        <span class="tech-tag">C++</span>
                    </div>
                </div>
            `;
        }
    }
}

// ESSENTIAL CSS - Add dynamically
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

// Add CSS to document
if (!document.querySelector('#projetos-css')) {
    const style = document.createElement('style');
    style.id = 'projetos-css';
    style.textContent = essentialCSS;
    document.head.appendChild(style);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('💼 DOM Loaded - Starting GitHub Integration...');
    window.githubIntegration = new GitHubIntegration();
});

// Backup: Also initialize when window loads
window.addEventListener('load', function() {
    console.log('🔄 Window Loaded - Checking if GitHub Integration started...');
    if (!window.githubIntegration) {
        console.log('⚡ Starting GitHub Integration via window.load...');
        window.githubIntegration = new GitHubIntegration();
    }
});
