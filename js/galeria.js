// js/galeria.js - GALERIA DEFINITIVA
console.log("🚀 GALERIA YOUNG LIFE INICIADA!");

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
        console.log("✅ Galeria pronta!");
    }

    carregarFotos() {
        this.fotos = [
            // CLUBE DE JOVENS
            { id: 1, src: 'assets/images/lideranca/clube-jovens/1760900215546.jpg', title: 'Reunião do Clube de Jovens', categoria: 'clube-jovens' },
            { id: 2, src: 'assets/images/lideranca/clube-jovens/1760900217415.jpg', title: 'Atividades em Grupo', categoria: 'clube-jovens' },
            { id: 3, src: 'assets/images/lideranca/clube-jovens/IMG_20250928_192956_706.webp', title: 'Discussão e Partilha', categoria: 'clube-jovens' },
            { id: 4, src: 'assets/images/lideranca/clube-jovens/1760900211523.jpg', title: 'Momento de Reflexão', categoria: 'clube-jovens' },
            { id: 5, src: 'assets/images/lideranca/clube-jovens/1760900206345.jpg', title: 'Integração entre Membros', categoria: 'clube-jovens' },
            
            // ACAMPAMENTO 1
            { id: 6, src: 'assets/images/lideranca/acampamento/1760900646428.jpg', title: 'Chegada ao Acampamento', categoria: 'acampamento1' },
            { id: 7, src: 'assets/images/lideranca/acampamento/1760900664661.jpg', title: 'Atividades ao Ar Livre', categoria: 'acampamento1' },
            { id: 8, src: 'assets/images/lideranca/acampamento/1760900627954.jpg', title: 'Trabalho em Equipe', categoria: 'acampamento1' },
            { id: 9, src: 'assets/images/lideranca/acampamento/1760900609363.jpg', title: 'Momento de Descontração', categoria: 'acampamento1' },
            { id: 10, src: 'assets/images/lideranca/acampamento/1760900671898.jpg', title: 'Grupo Unido', categoria: 'acampamento1' },
            { id: 11, src: 'assets/images/lideranca/acampamento/1760900641987.jpg', title: 'Atividades Recreativas', categoria: 'acampamento1' },
            
            // ACAMPAMENTO 2
            { id: 12, src: 'assets/images/lideranca/acampamento2/1760900586249.jpg', title: 'Segundo Acampamento', categoria: 'acampamento2' },
            { id: 13, src: 'assets/images/lideranca/acampamento2/1760900582432.jpg', title: 'Dinâmicas de Grupo', categoria: 'acampamento2' },
            { id: 14, src: 'assets/images/lideranca/acampamento2/1760900601605.jpg', title: 'Encerramento do Acampamento', categoria: 'acampamento2' },
            
            // GRADUAÇÃO
            { id: 15, src: 'assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg', title: 'Cerimônia de Graduação', categoria: 'graduacao' }
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
                <h2>📸 Galeria - Young Life</h2>
                <p>Momentos especiais da minha jornada de liderança juvenil</p>
            </div>
            
            <div class="categories-menu">
                <div class="categories-grid" id="categoriesGrid"></div>
            </div>

            <div class="gallery-content">
                <div class="photos-grid" id="photosGrid"></div>
            </div>

            <div class="video-section">
                <h3>🎥 Vídeo Especial</h3>
                <div class="video-container">
                    <video controls poster="assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg">
                        <source src="assets/videos/lideranca/graduacao/FDownloader_Net_AQN1iVdhc2dCuf65M4PBbWLWctYtXvdDqqAgql5OAvnGAAhAJYw5LXqs2RZ8dtafW21KtpWLXca18l5FPZh_3Sh_360p_SD_V1.mp4" type="video/mp4">
                        <p>Seu navegador não suporta o elemento de vídeo.</p>
                    </video>
                    <div class="video-info">
                        <h4>Momento de Celebração</h4>
                        <p>Vídeo especial da cerimônia de graduação e celebração dos nossos achievements no Young Life</p>
                    </div>
                </div>
            </div>
        `;

        console.log("✅ Interface criada!");
    }

    renderizarCategorias() {
        const container = document.getElementById('categoriesGrid');
        if (!container) return;

        const categorias = [
            { id: 'todos', name: 'Todas as Fotos', count: this.fotos.length, cor: '#1a365d' },
            { id: 'clube-jovens', name: 'Clube de Jovens', count: this.fotos.filter(f => f.categoria === 'clube-jovens').length, cor: '#e53e3e' },
            { id: 'acampamento1', name: 'Acampamento 1', count: this.fotos.filter(f => f.categoria === 'acampamento1').length, cor: '#38a169' },
            { id: 'acampamento2', name: 'Acampamento 2', count: this.fotos.filter(f => f.categoria === 'acampamento2').length, cor: '#d69e2e' },
            { id: 'graduacao', name: 'Graduação', count: this.fotos.filter(f => f.categoria === 'graduacao').length, cor: '#805ad5' }
        ];

        container.innerHTML = categorias.map(cat => `
            <div class="category-card ${this.categoriaAtual === cat.id ? 'active' : ''}" 
                 onclick="window.galeria.filtrarPorCategoria('${cat.id}')"
                 style="border-left: 4px solid ${cat.cor}">
                <div class="category-info">
                    <h3>${cat.name}</h3>
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
        console.log(`🎯 Filtrado: ${categoria}`);
    }

    renderizarGaleria() {
        const container = document.getElementById('photosGrid');
        if (!container) return;

        const fotosFiltradas = this.categoriaAtual === 'todos' 
            ? this.fotos 
            : this.fotos.filter(foto => foto.categoria === this.categoriaAtual);

        container.innerHTML = fotosFiltradas.map(foto => {
            return `
            <div class="photo-card" onclick="window.galeria.abrirModal(${foto.id})">
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
        `;
        }).join('');

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

        // Remove modal existente
        const modalExistente = document.querySelector('.photo-modal');
        if (modalExistente) modalExistente.remove();

        const modal = document.createElement('div');
        modal.className = 'photo-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="window.galeria.fecharModal()">&times;</span>
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
        
        // Fecha ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.fecharModal();
            }
        });

        // Fecha com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.fecharModal();
            }
        });
    }

    fecharModal() {
        const modal = document.querySelector('.photo-modal');
        if (modal) modal.remove();
    }
}

// Adicionar CSS exato que você enviou
const galleryCSS = `
    /* ===== GALERIA YOUNG LIFE ===== */
    .gallery-header {
        text-align: center;
        margin-bottom: 3rem;
    }
    
    .gallery-header h2 {
        color: #1a365d;
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    
    .gallery-header p {
        color: #666;
        font-size: 1.1rem;
        max-width: 600px;
        margin: 0 auto;
    }
    
    /* Categorias */
    .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-bottom: 3rem;
    }
    
    .category-card {
        background: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .category-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.15);
    }
    
    .category-card.active {
        background: #1a365d;
        color: white;
    }
    
    .category-info h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
    }
    
    .photo-count {
        font-size: 0.85rem;
        opacity: 0.8;
    }
    
    .category-arrow {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
    }
    
    .category-card:hover .category-arrow {
        transform: translateX(5px);
    }
    
    /* Grid de Fotos */
    .photos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 3rem;
    }
    
    .photo-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .photo-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .photo-image {
        position: relative;
        width: 100%;
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
        transform: scale(1.05);
    }
    
    .photo-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.7);
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
        font-size: 1rem;
        font-weight: 600;
    }
    
    .photo-error {
        width: 100%;
        height: 100%;
        background: #f7fafc;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        font-size: 0.9rem;
    }
    
    .photo-info {
        padding: 1.5rem;
    }
    
    .photo-info h4 {
        margin: 0 0 0.5rem 0;
        color: #1a365d;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .photo-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .category-badge {
        padding: 4px 8px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    
    .category-badge.clube-jovens {
        background: #fed7d7;
        color: #c53030;
    }
    
    .category-badge.acampamento1 {
        background: #c6f6d5;
        color: #276749;
    }
    
    .category-badge.acampamento2 {
        background: #fef5e7;
        color: #d69e2e;
    }
    
    .category-badge.graduacao {
        background: #e9d8fd;
        color: #6b46c1;
    }
    
    /* Seção de Vídeo */
    .video-section {
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 2px solid #e2e8f0;
    }
    
    .video-section h3 {
        text-align: center;
        margin-bottom: 2rem;
        color: #1a365d;
        font-size: 1.5rem;
    }
    
    .video-container {
        max-width: 800px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .video-container video {
        width: 100%;
        height: auto;
        display: block;
    }
    
    .video-info {
        padding: 1.5rem;
    }
    
    .video-info h4 {
        margin: 0 0 1rem 0;
        color: #1a365d;
        font-size: 1.2rem;
    }
    
    .video-info p {
        color: #666;
        line-height: 1.6;
        margin: 0;
    }
    
    /* Modal */
    .photo-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 2rem;
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
        border-radius: 12px;
        overflow: hidden;
    }
    
    .modal-content img {
        width: 100%;
        height: auto;
        max-height: 70vh;
        object-fit: contain;
    }
    
    .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0,0,0,0.7);
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10001;
    }
    
    .modal-info {
        padding: 1.5rem;
    }
    
    .modal-info h3 {
        margin: 0 0 1rem 0;
        color: #1a365d;
        font-size: 1.3rem;
    }
    
    .modal-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    /* Responsividade */
    @media (max-width: 768px) {
        .categories-grid {
            grid-template-columns: 1fr;
        }
        
        .photos-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1rem;
        }
        
        .photo-image {
            height: 180px;
        }
        
        .photo-info {
            padding: 1rem;
        }
        
        .video-info {
            padding: 1rem;
        }
        
        .modal-content {
            max-width: 95%;
            max-height: 95%;
        }
        
        .gallery-header h2 {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .photos-grid {
            grid-template-columns: 1fr;
        }
        
        .photo-image {
            height: 200px;
        }
    }
`;

// Adicionar CSS ao documento
const style = document.createElement('style');
style.textContent = galleryCSS;
document.head.appendChild(style);

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Carregado - Iniciando galeria...');
    window.galeria = new YoungLifeGallery();
});
