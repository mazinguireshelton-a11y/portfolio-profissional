// js/galeria.js - YOUNG LIFE GALLERY WITH VIDEO MODAL
console.log("🚀 YOUNG LIFE GALLERY STARTED!");

class YoungLifeGallery {
    constructor() {
        this.photos = [];
        this.videos = [];  // Adicionando array de vídeos
        this.currentCategory = 'all';
        this.init();
    }

    init() {
        console.log("🎯 Initializing gallery...");
        this.loadPhotos();
        this.loadVideos();  // Carregar vídeos
        this.createInterface();
        this.renderCategories();
        this.renderGallery();
        this.renderVideos();  // Renderizar vídeos separadamente
        console.log("✅ Gallery ready!");
    }

    loadPhotos() {
        this.photos = [
            // YOUTH CLUB
            { id: 1, src: 'assets/images/lideranca/clube-jovens/1760900215546.jpg', title: 'Youth Club Meeting', category: 'clube-jovens' },
            { id: 5, src: 'assets/images/lideranca/clube-jovens/1760900206345.jpg', title: 'Member Integration', category: 'clube-jovens' },
            
            // CAMPING 1
            { id: 6, src: 'assets/images/lideranca/acampamento/1760900646428.jpg', title: 'Arrival at Camp', category: 'acampamento1' },
            { id: 7, src: 'assets/images/lideranca/acampamento/1760900664661.jpg', title: 'Outdoor Activities', category: 'acampamento1' },
            { id: 8, src: 'assets/images/lideranca/acampamento/1760900627954.jpg', title: 'Teamwork', category: 'acampamento1' },
            { id: 9, src: 'assets/images/lideranca/acampamento/1760900609363.jpg', title: 'Relaxation Moment', category: 'acampamento1' },
            { id: 10, src: 'assets/images/lideranca/acampamento/1760900671898.jpg', title: 'United Group', category: 'acampamento1' },
            { id: 11, src: 'assets/images/lideranca/acampamento/1760900641987.jpg', title: 'Recreational Activities', category: 'acampamento1' },
            
            // CAMPING 2
            { id: 13, src: 'assets/images/lideranca/acampamento2/1760900582432.jpg', title: 'Group Dynamics', category: 'acampamento2' },
            { id: 14, src: 'assets/images/lideranca/acampamento2/1760900601605.jpg', title: 'Camp Closing', category: 'acampamento2' },
            
            // GRADUATION
            { id: 15, src: 'assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg', title: 'Graduation Ceremony', category: 'graduacao' }
        ];
        console.log(`📸 ${this.photos.length} photos loaded`);
    }

    loadVideos() {
        this.videos = [
            { 
                id: 1, 
                src: 'assets/videos/lideranca/graduacao/FDownloader_Net_AQN1iVdhc2dCuf65M4PBbWLWctYtXvdDqqAgql5OAvnGAAhAJYw5LXqs2RZ8dtafW21KtpWLXca18l5FPZh_3Sh_360p_SD_V1.mp4',
                thumbnail: 'assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg',
                title: 'Celebration Moment',
                description: 'Special video of the graduation ceremony and celebration of our achievements in Young Life',
                category: 'graduacao'
            }
        ];
        console.log(`🎥 ${this.videos.length} videos loaded`);
    }

    createInterface() {
        const container = document.getElementById('youngLifeGallery');
        if (!container) {
            console.error("❌ youngLifeGallery container not found!");
            return;
        }

        container.innerHTML = `
            <div class="gallery-header">
                <h2>📸 Gallery - Young Life</h2>
                <p>Special moments from my youth leadership journey</p>
            </div>
            
            <div class="categories-menu">
                <div class="categories-grid" id="categoriesGrid"></div>
            </div>

            <div class="gallery-content">
                <div class="photos-grid" id="photosGrid"></div>
            </div>

            <!-- Seção de Vídeos separada -->
            <div class="videos-section" id="youngLifeVideosSection">
                <h3>🎥 Special Videos</h3>
                <div class="videos-grid" id="youngLifeVideosGrid">
                    <div class="loading-state">
                        <i class="fas fa-spinner fa-spin"></i>
                        <p>Loading videos...</p>
                    </div>
                </div>
            </div>
        `;

        // Criar modal para vídeos
        this.createVideoModal();
        console.log("✅ Interface created!");
    }

    createVideoModal() {
        // Remove existing modal
        const existingModal = document.querySelector('.yl-video-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.className = 'yl-video-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal" aria-label="Close modal">&times;</button>
                <div class="modal-media"></div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event listeners
        modal.querySelector('.close-modal').addEventListener('click', () => {
            this.closeVideoModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeVideoModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeVideoModal();
            }
        });
    }

    renderCategories() {
        const container = document.getElementById('categoriesGrid');
        if (!container) return;

        const categories = [
            { id: 'all', name: 'All Photos', count: this.photos.length, color: '#1a365d' },
            { id: 'clube-jovens', name: 'Youth Club', count: this.photos.filter(f => f.category === 'clube-jovens').length, color: '#e53e3e' },
            { id: 'acampamento1', name: 'Camping 1', count: this.photos.filter(f => f.category === 'acampamento1').length, color: '#38a169' },
            { id: 'acampamento2', name: 'Camping 2', count: this.photos.filter(f => f.category === 'acampamento2').length, color: '#d69e2e' },
            { id: 'graduacao', name: 'Graduation', count: this.photos.filter(f => f.category === 'graduacao').length + this.videos.filter(v => v.category === 'graduacao').length, color: '#805ad5' }
        ];

        container.innerHTML = categories.map(cat => `
            <div class="category-card ${this.currentCategory === cat.id ? 'active' : ''}" 
                 onclick="window.galeria.filterByCategory('${cat.id}')"
                 style="border-left: 4px solid ${cat.color}">
                <div class="category-info">
                    <h3>${cat.name}</h3>
                    <span class="photo-count">${cat.count} items</span>
                </div>
                <div class="category-arrow">→</div>
            </div>
        `).join('');

        console.log("✅ Categories rendered!");
    }

    renderVideos() {
        const container = document.getElementById('youngLifeVideosGrid');
        if (!container) return;

        if (this.videos.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-video-slash"></i>
                    <p>No videos available yet</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.videos.map(video => `
            <div class="video-card" onclick="window.galeria.openVideo(${video.id})">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" 
                         alt="${video.title}"
                         onerror="this.src='assets/images/placeholder-video.jpg'">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h5>${video.title}</h5>
                    <p>${video.description}</p>
                    <span class="video-duration">
                        <i class="fas fa-clock"></i> Click to watch
                    </span>
                </div>
            </div>
        `).join('');

        console.log("✅ Videos rendered!");
    }

    filterByCategory(category) {
        this.currentCategory = category;
        this.renderCategories();
        this.renderGallery();
        console.log(`🎯 Filtered: ${category}`);
    }

    renderGallery() {
        const container = document.getElementById('photosGrid');
        if (!container) return;

        const filteredPhotos = this.currentCategory === 'all' 
            ? this.photos 
            : this.photos.filter(photo => photo.category === this.currentCategory);

        if (filteredPhotos.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-images"></i>
                    <p>No photos in this category</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredPhotos.map(photo => {
            return `
            <div class="photo-card" onclick="window.galeria.openPhotoModal(${photo.id})">
                <div class="photo-image">
                    <img src="${photo.src}" alt="${photo.title}" 
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
                    <div class="photo-error" style="display: none;">
                        ❌ Error loading
                    </div>
                    <div class="photo-overlay">
                        <span class="view-btn">👁️ View</span>
                    </div>
                </div>
                <div class="photo-info">
                    <h4>${photo.title}</h4>
                    <div class="photo-meta">
                        <span class="category-badge ${photo.category}">${this.getCategoryName(photo.category)}</span>
                    </div>
                </div>
            </div>
        `;
        }).join('');

        console.log(`✅ ${filteredPhotos.length} photos rendered`);
    }

    getCategoryName(category) {
        const names = {
            'clube-jovens': 'Club',
            'acampamento1': 'Camp 1',
            'acampamento2': 'Camp 2', 
            'graduacao': 'Graduation'
        };
        return names[category] || category;
    }

    openVideo(videoId) {
        const video = this.videos.find(v => v.id === videoId);
        if (!video) return;

        const modal = document.querySelector('.yl-video-modal');
        const mediaContainer = modal.querySelector('.modal-media');
        
        // Mostra estado de carregamento
        mediaContainer.innerHTML = `
            <div class="loading-state" style="padding: 3rem;">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading video...</p>
            </div>
        `;
        modal.classList.add('active');

        // Verifica se o vídeo existe
        this.checkFileExists(video.src).then(exists => {
            if (!exists) {
                mediaContainer.innerHTML = `
                    <div class="empty-state" style="padding: 3rem;">
                        <i class="fas fa-exclamation-triangle" style="color: #ff6b6b; font-size: 3rem;"></i>
                        <h3 style="color: #1a365d; margin: 1rem 0;">Video Not Available</h3>
                        <p style="color: #718096;">The video file is not available.</p>
                        <p style="color: #94a3b8; font-size: 0.875rem; margin-top: 1rem;">
                            Check the path: ${video.src}
                        </p>
                    </div>
                `;
            } else {
                mediaContainer.innerHTML = `
                    <div class="video-wrapper">
                        <video controls autoplay playsinline>
                            <source src="${video.src}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div class="modal-info">
                        <h3>${video.title}</h3>
                        <p>${video.description}</p>
                    </div>
                `;
                
                const videoElement = mediaContainer.querySelector('video');
                if (videoElement) {
                    videoElement.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                }
            }
        });
    }

    openPhotoModal(photoId) {
        const photo = this.photos.find(f => f.id === photoId);
        if (!photo) return;

        // Remove existing modal
        const existingModal = document.querySelector('.photo-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.className = 'photo-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="window.galeria.closePhotoModal()">&times;</span>
                <img src="${photo.src}" alt="${photo.title}">
                <div class="modal-info">
                    <h3>${photo.title}</h3>
                    <div class="modal-meta">
                        <span class="category">${this.getCategoryName(photo.category)}</span>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        
        // Close when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closePhotoModal();
            }
        });

        // Close with ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closePhotoModal();
            }
        });
    }

    closeVideoModal() {
        const modal = document.querySelector('.yl-video-modal');
        if (!modal) return;

        // Pause any playing video
        const video = modal.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }

        modal.classList.remove('active');
        setTimeout(() => {
            modal.querySelector('.modal-media').innerHTML = '';
        }, 300);
    }

    closePhotoModal() {
        const modal = document.querySelector('.photo-modal');
        if (modal) modal.remove();
    }

    checkFileExists(url) {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            xhr.open('HEAD', url);
            xhr.onload = () => resolve(xhr.status === 200);
            xhr.onerror = () => resolve(false);
            xhr.send();
        });
    }
}

// Add CSS atualizado
const galleryCSS = `
    /* ===== YOUNG LIFE GALLERY ===== */
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
    
    /* Categories */
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
    
    /* Photo Grid */
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
    
    /* Video Section - como no Project Smile */
    .videos-section {
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 2px solid #e2e8f0;
    }
    
    .videos-section h3 {
        text-align: center;
        margin-bottom: 2rem;
        color: #1a365d;
        font-size: 1.5rem;
    }
    
    .videos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-top: 1rem;
    }
    
    .video-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .video-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .video-thumbnail {
        position: relative;
        height: 160px;
        overflow: hidden;
    }
    
    .video-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
    .video-card:hover .video-thumbnail img {
        transform: scale(1.05);
    }
    
    .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.7);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.25rem;
        transition: all 0.3s ease;
    }
    
    .video-card:hover .play-button {
        background: rgba(26, 54, 93, 0.9);
        transform: translate(-50%, -50%) scale(1.1);
    }
    
    .video-info {
        padding: 1rem;
    }
    
    .video-info h5 {
        color: #1a365d;
        margin-bottom: 0.5rem;
        font-size: 1rem;
    }
    
    .video-info p {
        color: #64748b;
        font-size: 0.9rem;
        line-height: 1.4;
        margin-bottom: 0.5rem;
    }
    
    .video-duration {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        color: #94a3b8;
        font-size: 0.8rem;
    }
    
    /* Modal para vídeos */
    .yl-video-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        z-index: 1000;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .yl-video-modal.active {
        display: flex;
        opacity: 1;
    }
    
    .yl-video-modal .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
        border-radius: 12px;
        overflow: hidden;
    }
    
    .yl-video-modal .close-modal {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(0,0,0,0.7);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 10;
        transition: background 0.3s ease;
    }
    
    .yl-video-modal .close-modal:hover {
        background: rgba(26, 54, 93, 0.9);
    }
    
    .yl-video-modal .modal-media {
        max-width: 100%;
        max-height: 70vh;
        overflow: auto;
    }
    
    .yl-video-modal .modal-media video {
        width: 100%;
        max-height: 60vh;
        object-fit: contain;
    }
    
    .yl-video-modal .modal-info {
        padding: 1.5rem;
        background: white;
        border-top: 1px solid #e2e8f0;
    }
    
    .yl-video-modal .modal-info h3 {
        color: #1a365d;
        margin-bottom: 0.5rem;
    }
    
    .yl-video-modal .modal-info p {
        color: #64748b;
        line-height: 1.5;
    }
    
    .video-wrapper {
        width: 100%;
        background: #000;
    }
    
    .video-wrapper video {
        width: 100%;
        display: block;
    }
    
    /* Modal para fotos (existente) */
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
    
    .photo-modal .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
        border-radius: 12px;
        overflow: hidden;
    }
    
    .photo-modal .modal-content img {
        width: 100%;
        height: auto;
        max-height: 70vh;
        object-fit: contain;
    }
    
    .photo-modal .close-modal {
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
    
    .photo-modal .modal-info {
        padding: 1.5rem;
    }
    
    .photo-modal .modal-info h3 {
        margin: 0 0 1rem 0;
        color: #1a365d;
        font-size: 1.3rem;
    }
    
    .photo-modal .modal-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    /* Estados de loading e vazio */
    .loading-state,
    .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        text-align: center;
        color: #64748b;
        grid-column: 1 / -1;
    }
    
    .loading-state i,
    .empty-state i {
        font-size: 2rem;
        margin-bottom: 1rem;
    }
    
    /* Responsiveness */
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
        
        .videos-grid {
            grid-template-columns: 1fr;
        }
        
        .video-thumbnail {
            height: 150px;
        }
        
        .photo-info, .video-info {
            padding: 1rem;
        }
        
        .yl-video-modal .modal-content,
        .photo-modal .modal-content {
            max-width: 95%;
            max-height: 95%;
        }
        
        .gallery-header h2 {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .photos-grid,
        .videos-grid {
            grid-template-columns: 1fr;
        }
        
        .photo-image {
            height: 200px;
        }
        
        .video-thumbnail {
            height: 140px;
        }
    }
`;

// Add CSS to document
const style = document.createElement('style');
style.textContent = galleryCSS;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Loaded - Starting Young Life gallery...');
    window.galeria = new YoungLifeGallery();
});
