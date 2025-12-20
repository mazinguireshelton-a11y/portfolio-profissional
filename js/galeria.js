// js/galeria.js - DEFINITIVE GALLERY
console.log("🚀 YOUNG LIFE GALLERY STARTED!");

class YoungLifeGallery {
    constructor() {
        this.photos = [];
        this.currentCategory = 'all';
        this.init();
    }

    init() {
        console.log("🎯 Initializing gallery...");
        this.loadPhotos();
        this.createInterface();
        this.renderCategories();
        this.renderGallery();
        console.log("✅ Gallery ready!");
    }

    loadPhotos() {
        this.photos = [
            // YOUTH CLUB
            { id: 1, src: 'assets/images/lideranca/clube-jovens/1760900215546.jpg', title: 'Youth Club Meeting', category: 'clube-jovens' },
            { id: 2, src: 'assets/images/lideranca/clube-jovens/1760900217415.jpg', title: 'Group Activities', category: 'clube-jovens' },
            { id: 3, src: 'assets/images/lideranca/clube-jovens/IMG_20250928_192956_706.webp', title: 'Discussion and Sharing', category: 'clube-jovens' },
            { id: 4, src: 'assets/images/lideranca/clube-jovens/1760900211523.jpg', title: 'Moment of Reflection', category: 'clube-jovens' },
            { id: 5, src: 'assets/images/lideranca/clube-jovens/1760900206345.jpg', title: 'Member Integration', category: 'clube-jovens' },
            
            // CAMPING 1
            { id: 6, src: 'assets/images/lideranca/acampamento/1760900646428.jpg', title: 'Arrival at Camp', category: 'acampamento1' },
            { id: 7, src: 'assets/images/lideranca/acampamento/1760900664661.jpg', title: 'Outdoor Activities', category: 'acampamento1' },
            { id: 8, src: 'assets/images/lideranca/acampamento/1760900627954.jpg', title: 'Teamwork', category: 'acampamento1' },
            { id: 9, src: 'assets/images/lideranca/acampamento/1760900609363.jpg', title: 'Relaxation Moment', category: 'acampamento1' },
            { id: 10, src: 'assets/images/lideranca/acampamento/1760900671898.jpg', title: 'United Group', category: 'acampamento1' },
            { id: 11, src: 'assets/images/lideranca/acampamento/1760900641987.jpg', title: 'Recreational Activities', category: 'acampamento1' },
            
            // CAMPING 2
            { id: 12, src: 'assets/images/lideranca/acampamento2/1760900586249.jpg', title: 'Second Camping', category: 'acampamento2' },
            { id: 13, src: 'assets/images/lideranca/acampamento2/1760900582432.jpg', title: 'Group Dynamics', category: 'acampamento2' },
            { id: 14, src: 'assets/images/lideranca/acampamento2/1760900601605.jpg', title: 'Camp Closing', category: 'acampamento2' },
            
            // GRADUATION
            { id: 15, src: 'assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg', title: 'Graduation Ceremony', category: 'graduacao' }
        ];
        console.log(`📸 ${this.photos.length} photos loaded`);
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

            <div class="video-section">
                <h3>🎥 Special Video</h3>
                <div class="video-container">
                    <video controls poster="assets/images/lideranca/graduacao/FB_IMG_1730052671087_1.jpg">
                        <source src="assets/videos/lideranca/graduacao/FDownloader_Net_AQN1iVdhc2dCuf65M4PBbWLWctYtXvdDqqAgql5OAvnGAAhAJYw5LXqs2RZ8dtafW21KtpWLXca18l5FPZh_3Sh_360p_SD_V1.mp4" type="video/mp4">
                        <p>Your browser does not support the video element.</p>
                    </video>
                    <div class="video-info">
                        <h4>Celebration Moment</h4>
                        <p>Special video of the graduation ceremony and celebration of our achievements in Young Life</p>
                    </div>
                </div>
            </div>
        `;

        console.log("✅ Interface created!");
    }

    renderCategories() {
        const container = document.getElementById('categoriesGrid');
        if (!container) return;

        const categories = [
            { id: 'all', name: 'All Photos', count: this.photos.length, color: '#1a365d' },
            { id: 'clube-jovens', name: 'Youth Club', count: this.photos.filter(f => f.category === 'clube-jovens').length, color: '#e53e3e' },
            { id: 'acampamento1', name: 'Camping 1', count: this.photos.filter(f => f.category === 'acampamento1').length, color: '#38a169' },
            { id: 'acampamento2', name: 'Camping 2', count: this.photos.filter(f => f.category === 'acampamento2').length, color: '#d69e2e' },
            { id: 'graduacao', name: 'Graduation', count: this.photos.filter(f => f.category === 'graduacao').length, color: '#805ad5' }
        ];

        container.innerHTML = categories.map(cat => `
            <div class="category-card ${this.currentCategory === cat.id ? 'active' : ''}" 
                 onclick="window.galeria.filterByCategory('${cat.id}')"
                 style="border-left: 4px solid ${cat.color}">
                <div class="category-info">
                    <h3>${cat.name}</h3>
                    <span class="photo-count">${cat.count} photos</span>
                </div>
                <div class="category-arrow">→</div>
            </div>
        `).join('');

        console.log("✅ Categories rendered!");
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

        container.innerHTML = filteredPhotos.map(photo => {
            return `
            <div class="photo-card" onclick="window.galeria.openModal(${photo.id})">
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

    openModal(photoId) {
        const photo = this.photos.find(f => f.id === photoId);
        if (!photo) return;

        // Remove existing modal
        const existingModal = document.querySelector('.photo-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.className = 'photo-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal" onclick="window.galeria.closeModal()">&times;</span>
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
                this.closeModal();
            }
        });

        // Close with ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    closeModal() {
        const modal = document.querySelector('.photo-modal');
        if (modal) modal.remove();
    }
}

// Add exact CSS that you sent
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
    
    /* Video Section */
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

// Add CSS to document
const style = document.createElement('style');
style.textContent = galleryCSS;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Loaded - Starting gallery...');
    window.galeria = new YoungLifeGallery();
});
