// Galeria Young Life Profissional
console.log("🚀 GALERIA YOUNG LIFE PROFISSIONAL INICIADA!");

class YoungLifeGallery {
    constructor() {
        this.fotos = [];
        this.categoriaAtual = 'todos';
        this.init();
    }

    init() {
        console.log("🎯 Inicializando galeria...");
        this.carregarFotos();
        this.criarInterface();
        this.renderizarCategorias();
        this.renderizarGaleria();
        this.adicionarCSS();
        console.log("✅ Galeria inicializada com sucesso!");
    }

    carregarFotos() {
        this.fotos = [
            // ================== CLUBE DE JOVENS ==================
            {
                id: 1,
                src: 'assets/images/lideranca/clube-jovens/1760900215546.jpg',
                title: 'Momento Feliz',
                categoria: 'clube-jovens'
            },
            {
                id: 2,
                src: 'assets/images/lideranca/clube-jovens/1760900217415.jpg',
                title: 'Foto em Grupo', 
                categoria: 'clube-jovens'
            },
            {
                id: 3,
                src: 'assets/images/lideranca/clube-jovens/IMG_20250928_192956_706.webp',
                title: 'Momento Especial',
                categoria: 'clube-jovens'
            },
            {
                id: 4,
                src: 'assets/images/lideranca/clube-jovens/1760900211523.jpg',
                title: 'Diversão',
                categoria: 'clube-jovens'
            },
            {
                id: 5,
                src: 'assets/images/lideranca/clube-jovens/1760900206345.jpg',
                title: 'Encerramento',
                categoria: 'clube-jovens'
            },

            // ================== ACAMPAMENTO 1 ==================
            {
                id: 6,
                src: 'assets/images/lideranca/acampamento/1760900646428.jpg',
                title: 'Chegada',
                categoria: 'acampamento1'
            },
            {
                id: 7,
                src: 'assets/images/lideranca/acampamento/1760900664661.jpg',
                title: 'Encerramento',
                categoria: 'acampamento1'
            },
            {
                id: 8,
                src: 'assets/images/lideranca/acampamento/1760900627954.jpg',
                title: 'Foto em Equipe',
                categoria: 'acampamento1'
            },
            {
                id: 9,
                src: 'assets/images/lideranca/acampamento/1760900609363.jpg',
                title: 'Momento de Reflexão',
                categoria: 'acampamento1'
            },
            {
                id: 10,
                src: 'assets/images/lideranca/acampamento/1760900671898.jpg',
                title: 'Atividades Práticas',
                categoria: 'acampamento1'
            },
            {
                id: 11,
                src: 'assets/images/lideranca/acampamento/1760900641987.jpg',
                title: 'Despedida',
                categoria: 'acampamento1'
            },

            // ================== ACAMPAMENTO 2 ==================
            {
                id: 12,
                src: 'assets/images/lideranca/acampamento2/1760900586249.jpg',
                title: 'Aventura',
                categoria: 'acampamento2'
            },
            {
                id: 13,
                src: 'assets/images/lideranca/acampamento2/1760900582432.jpg',
                title: 'Trabalho em Equipe',
                categoria: 'acampamento2'
            },
            {
                id: 14,
                src: 'assets/images/lideranca/acampamento2/1760900601605.jpg',
                title: 'Nova Dinâmica',
                categoria: 'acampamento2'
            },

            // ================== GRADUAÇÃO ==================
            {
                id: 15,
                src: 'assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg',
                title: 'Cerimônia de Graduação',
                categoria: 'graduacao'
            }
        ];
        console.log(`📸 ${this.fotos.length} fotos carregadas`);
    }

    criarInterface() {
        const container = document.getElementById('youngLifeGallery');
        if (!container) {
            console.error("❌ Container youngLifeGallery não encontrado!");
            return;
        }

        container.innerHTML = `
            <div class="gallery-header">
                <h2>📸 Galeria Young Life</h2>
                <p>Minha jornada de liderança e atividades</p>
            </div>
            
            <div class="categories-menu">
                <div class="categories-grid" id="categoriesGrid"></div>
            </div>

            <div class="gallery-content">
                <div class="photos-grid" id="photosGrid"></div>
            </div>

            <div class="video-section">
                <h3>🎥 Vídeo da Graduação</h3>
                <div class="video-container">
                    <video controls poster="assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg">
                        <source src="assets/videos/lideranca/graduacao/FDownloader_Net_AQN1iVdhc2dCuf65M4PBbWLWctYtXvdDqqAgql5OAvnGAAhAJYw5LXqs2RZ8dtafW21KtpWLXca18l5FPZh_3Sh_360p_SD_V1.mp4" type="video/mp4">
                    </video>
                    <div class="video-info">
                        <h4>Cerimônia de Graduação</h4>
                        <p>Vídeo completo da formatura</p>
                    </div>
                </div>
            </div>
        `;

        console.log("✅ Interface criada com sucesso!");
    }

    renderizarCategorias() {
        const container = document.getElementById('categoriesGrid');
        if (!container) return;

        const categorias = [
            { id: 'todos', nome: '📸 Todas as Fotos', count: this.fotos.length, cor: '#1a365d' },
            { id: 'clube-jovens', nome: '👥 Clube de Jovens', count: this.fotos.filter(f => f.categoria === 'clube-jovens').length, cor: '#e53e3e' },
            { id: 'acampamento1', nome: '🏕️ Acampamento 1', count: this.fotos.filter(f => f.categoria === 'acampamento1').length, cor: '#38a169' },
            { id: 'acampamento2', nome: '🏕️ Acampamento 2', count: this.fotos.filter(f => f.categoria === 'acampamento2').length, cor: '#d69e2e' },
            { id: 'graduacao', nome: '🎓 Graduação', count: this.fotos.filter(f => f.categoria === 'graduacao').length, cor: '#805ad5' }
        ];

        container.innerHTML = categorias.map(cat => `
            <div class="category-card ${this.categoriaAtual === cat.id ? 'active' : ''}" 
                 onclick="youngLifeGallery.filtrarPorCategoria('${cat.id}')"
                 style="border-left: 4px solid ${cat.cor}">
                <div class="category-info">
                    <h3>${cat.nome}</h3>
                    <span class="photo-count">${cat.count} fotos</span>
                </div>
                <div class="category-arrow">→</div>
            </div>
        `).join('');

        console.log("✅ Categorias renderizadas!");
    }

    filtrarPorCategoria(categoria) {
        this.categoriaAtual = categoria;
        this.renderizarCategorias();
        this.renderizarGaleria();
        console.log(`🎯 Filtrado por: ${categoria}`);
    }

    renderizarGaleria() {
        const container = document.getElementById('photosGrid');
        if (!container) return;

        const fotosFiltradas = this.categoriaAtual === 'todos' 
            ? this.fotos 
            : this.fotos.filter(foto => foto.categoria === this.categoriaAtual);

        container.innerHTML = fotosFiltradas.map(foto => `
            <div class="photo-card" onclick="youngLifeGallery.abrirModal(${foto.id})">
                <div class="photo-image">
                    <img src="${foto.src}" alt="${foto.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                    <div class="photo-error" style="display: none;">
                        ❌ Erro ao carregar
                    </div>
                    <div class="photo-overlay">
                        <span class="view-btn">👁️ Ver</span>
                    </div>
                </div>
                <div class="photo-info">
                    <h4>${foto.title}</h4>
                    <div class="photo-meta">
                        <span class="category-badge ${foto.categoria}">${this.getNomeCategoria(foto.categoria)}</span>
                    </div>
                </div>
            </div>
        `).join('');

        console.log(`✅ ${fotosFiltradas.length} fotos renderizadas`);
    }

    getNomeCategoria(categoria) {
        const nomes = {
            'clube-jovens': 'Clube',
            'acampamento1': 'Acamp. 1',
            'acampamento2': 'Acamp. 2', 
            'graduacao': 'Graduação'
        };
        return nomes[categoria] || categoria;
    }

    abrirModal(fotoId) {
        const foto = this.fotos.find(f => f.id === fotoId);
        if (!foto) return;

        const modal = document.createElement('div');
        modal.className = 'photo-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
                <img src="${foto.src}" alt="${foto.title}">
                <div class="modal-info">
                    <h3>${foto.title}</h3>
                    <div class="modal-meta">
                        <span class="category">${this.getNomeCategoria(foto.categoria)}</span>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    adicionarCSS() {
        if (document.querySelector('#gallery-css')) return;

        const style = document.createElement('style');
        style.id = 'gallery-css';
        style.textContent = this.getCSS();
        document.head.appendChild(style);
        console.log("✅ CSS adicionado!");
    }

    getCSS() {
        return `
            #youngLifeGallery {
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
                font-family: Arial, sans-serif;
            }

            .gallery-header {
                text-align: center;
                margin-bottom: 40px;
            }

            .gallery-header h2 {
                color: #1a365d;
                font-size: 2.5rem;
                margin-bottom: 10px;
            }

            .gallery-header p {
                color: #718096;
                font-size: 1.1rem;
            }

            .categories-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 20px;
                margin-bottom: 40px;
            }

            .category-card {
                background: white;
                padding: 25px;
                border-radius: 12px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border: 2px solid transparent;
            }

            .category-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            }

            .category-card.active {
                border-color: #1a365d;
                background: #f7fafc;
            }

            .category-info h3 {
                margin: 0 0 5px 0;
                color: #2d3748;
                font-size: 1.2rem;
            }

            .photo-count {
                color: #718096;
                font-size: 0.9rem;
            }

            .category-arrow {
                font-size: 1.2rem;
                color: #a0aec0;
            }

            .photos-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 25px;
                margin-bottom: 50px;
            }

            .photo-card {
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: all 0.3s ease;
                cursor: pointer;
            }

            .photo-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            }

            .photo-image {
                position: relative;
                height: 200px;
                overflow: hidden;
            }

            .photo-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }

            .photo-card:hover .photo-image img {
                transform: scale(1.1);
            }

            .photo-error {
                background: #fed7d7;
                color: #c53030;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }

            .photo-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .photo-card:hover .photo-overlay {
                opacity: 1;
            }

            .view-btn {
                color: white;
                background: #e53e3e;
                padding: 10px 20px;
                border-radius: 20px;
                font-weight: 500;
            }

            .photo-info {
                padding: 20px;
            }

            .photo-info h4 {
                margin: 0 0 10px 0;
                color: #2d3748;
                font-size: 1.1rem;
            }

            .category-badge {
                padding: 4px 12px;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: 500;
                color: white;
            }

            .category-badge.clube-jovens { background: #e53e3e; }
            .category-badge.acampamento1 { background: #38a169; }
            .category-badge.acampamento2 { background: #d69e2e; }
            .category-badge.graduacao { background: #805ad5; }

            .video-section {
                margin-top: 50px;
                padding-top: 30px;
                border-top: 1px solid #e2e8f0;
            }

            .video-section h3 {
                color: #1a365d;
                margin-bottom: 20px;
            }

            .video-container {
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .video-container video {
                width: 100%;
                max-height: 400px;
            }

            .video-info {
                padding: 20px;
            }

            .video-info h4 {
                margin: 0 0 8px 0;
                color: #2d3748;
            }

            .video-info p {
                color: #718096;
                margin: 0;
            }

            .photo-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                padding: 20px;
            }

            .modal-content {
                background: white;
                border-radius: 12px;
                max-width: 500px;
                width: 100%;
                position: relative;
            }

            .close-modal {
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 2rem;
                color: white;
                cursor: pointer;
                background: rgba(0,0,0,0.5);
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1;
            }

            .modal-content img {
                width: 100%;
                height: 300px;
                object-fit: cover;
            }

            .modal-info {
                padding: 20px;
            }

            .modal-info h3 {
                margin: 0 0 10px 0;
                color: #2d3748;
            }

            .modal-meta {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            @media (max-width: 768px) {
                .categories-grid {
                    grid-template-columns: 1fr;
                }
                .photos-grid {
                    grid-template-columns: 1fr;
                }
            }
        `;
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    window.youngLifeGallery = new YoungLifeGallery();
});
