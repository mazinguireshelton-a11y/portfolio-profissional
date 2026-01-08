// js/social-projects.js - PROJECT SMILE COMPLETE
console.log("😊 PROJECT SMILE GALLERY & VIDEOS STARTED!");

class ProjectSmileGallery {
    constructor() {
        this.photos = [];
        this.videos = [];
        this.init();
    }

    init() {
        console.log("🎯 Initializing Project Smile...");
        this.loadMedia();
        this.createModal();
        this.renderVideos();
        this.renderGallery();
        console.log("✅ Project Smile ready!");
    }

    loadMedia() {
        // Project Smile Photos - ONLY THE 3 PHOTOS YOU HAVE
        this.photos = [
            { id: 1, src: 'assets/images/social-projects/smile/photo1.jpg', title: 'Meal Distribution' },
            { id: 2, src: 'assets/images/social-projects/smile/photo2.jpg', title: 'Donation Collection' },
            { id: 3, src: 'assets/images/social-projects/smile/photo3.jpg', title: 'Community Engagement' }
        ];

        // Project Smile Videos - ONLY THE VIDEO YOU HAVE
        this.videos = [
            { 
                id: 1, 
                src: 'assets/videos/social-projects/smile/meal-distribution.mp4',
                thumbnail: 'assets/images/social-projects/smile/photo1.jpg', // Use first photo as thumbnail
                title: 'Meal Distribution',
                description: 'Distribution of meals to families in need'
            }
        ];

        console.log(`📸 ${this.photos.length} photos loaded`);
        console.log(`🎥 ${this.videos.length} videos loaded`);
    }

    createModal() {
        // Remove existing modal
        const existingModal = document.querySelector('.media-modal');
        if (existingModal) existingModal.remove();

        const modal = document.createElement('div');
        modal.className = 'media-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-modal" aria-label="Close modal">&times;</button>
                <div class="modal-media"></div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event listeners
        modal.querySelector('.close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    renderVideos() {
        const container = document.getElementById('projectVideosGrid');
        if (!container) {
            console.log("ℹ️ Videos section not found - creating automatically");
            this.createVideosSection();
            return;
        }

        if (this.videos.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-video-slash"></i>
                    <p>No videos available at the moment</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.videos.map(video => `
            <div class="video-card" onclick="window.projectSmile.openVideo(${video.id})">
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

        console.log("✅ Videos rendered");
    }

    createVideosSection() {
        // Find the gallery section
        const gallerySection = document.querySelector('.project-gallery');
        if (!gallerySection) {
            console.warn("⚠️ Gallery section not found");
            return;
        }

        // Check if videos section already exists
        if (document.querySelector('.project-videos')) {
            return;
        }

        // Create videos section before the gallery
        const videosHTML = `
            <div class="project-videos">
                <h4><i class="fas fa-video"></i> Project Videos</h4>
                <div class="videos-grid" id="projectVideosGrid">
                    <div class="loading-state">
                        <i class="fas fa-spinner fa-spin"></i>
                        <p>Loading videos...</p>
                    </div>
                </div>
            </div>
        `;

        gallerySection.insertAdjacentHTML('beforebegin', videosHTML);
        
        // Render videos after creating the section
        setTimeout(() => this.renderVideos(), 100);
    }

    renderGallery() {
        const container = document.getElementById('projectSmileGallery');
        if (!container) {
            console.warn("⚠️ Gallery container not found");
            return;
        }

        if (this.photos.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-images"></i>
                    <p>No photos available at the moment</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.photos.map(photo => `
            <div class="gallery-item" onclick="window.projectSmile.openPhoto(${photo.id})">
                <img src="${photo.src}" 
                     alt="${photo.title}"
                     onerror="this.onerror=null; this.src='assets/images/placeholder.jpg';">
                <div class="gallery-overlay">
                    <span>${photo.title}</span>
                </div>
            </div>
        `).join('');

        console.log("✅ Gallery rendered");
    }

    openVideo(videoId) {
        const video = this.videos.find(v => v.id === videoId);
        if (!video) return;

        const modal = document.querySelector('.media-modal');
        const mediaContainer = modal.querySelector('.modal-media');
        
        // Show loading state
        mediaContainer.innerHTML = `
            <div class="loading-state" style="padding: 3rem;">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading video...</p>
            </div>
        `;
        modal.classList.add('active');

        // Check if video exists
        this.checkVideoExists(video.src).then(exists => {
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

    checkVideoExists(url) {
        return new Promise(resolve => {
            const xhr = new XMLHttpRequest();
            xhr.open('HEAD', url);
            xhr.onload = () => resolve(xhr.status === 200);
            xhr.onerror = () => resolve(false);
            xhr.send();
        });
    }

    openPhoto(photoId) {
        const photo = this.photos.find(p => p.id === photoId);
        if (!photo) return;

        const modal = document.querySelector('.media-modal');
        const mediaContainer = modal.querySelector('.modal-media');
        
        // Show loading state
        mediaContainer.innerHTML = `
            <div class="loading-state" style="padding: 3rem;">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Loading photo...</p>
            </div>
        `;
        modal.classList.add('active');

        // Check if image exists
        this.checkFileExists(photo.src).then(exists => {
            if (!exists) {
                mediaContainer.innerHTML = `
                    <div class="empty-state" style="padding: 3rem;">
                        <i class="fas fa-exclamation-triangle" style="color: #ff6b6b; font-size: 3rem;"></i>
                        <h3 style="color: #1a365d; margin: 1rem 0;">Photo Not Available</h3>
                        <p style="color: #718096;">The image is not available.</p>
                        <p style="color: #94a3b8; font-size: 0.875rem; margin-top: 1rem;">
                            Check the path: ${photo.src}
                        </p>
                    </div>
                `;
            } else {
                mediaContainer.innerHTML = `
                    <img src="${photo.src}" alt="${photo.title}">
                    <div class="modal-info">
                        <h3>${photo.title}</h3>
                    </div>
                `;
            }
        });
    }

    checkFileExists(url) {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    }

    closeModal() {
        const modal = document.querySelector('.media-modal');
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
}

// Add specific CSS
const projectSmileCSS = `
    /* Gallery Grid - for your existing HTML */
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1.5rem;
    }
    
    .gallery-item {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
        height: 180px;
    }
    
    .gallery-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    
    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.3s ease;
    }
    
    .gallery-item:hover img {
        transform: scale(1.05);
    }
    
    .gallery-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0,0,0,0.7));
        color: white;
        padding: 0.75rem;
        text-align: center;
        font-size: 0.9rem;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .gallery-item:hover .gallery-overlay {
        opacity: 1;
    }
    
    /* Videos Section */
    .project-videos {
        margin: 2rem 0;
        padding: 2rem 0;
        border-top: 1px solid #e2e8f0;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .project-videos h4 {
        color: #1a365d;
        margin-bottom: 1rem;
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
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
    
    /* Modal */
    .media-modal {
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
    
    .media-modal.active {
        display: flex;
        opacity: 1;
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
        border-radius: 12px;
        overflow: hidden;
    }
    
    .close-modal {
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
    
    .close-modal:hover {
        background: rgba(26, 54, 93, 0.9);
    }
    
    .modal-media {
        max-width: 100%;
        max-height: 70vh;
        overflow: auto;
    }
    
    .modal-media img,
    .modal-media video {
        width: 100%;
        max-height: 60vh;
        object-fit: contain;
    }
    
    .modal-info {
        padding: 1.5rem;
        background: white;
        border-top: 1px solid #e2e8f0;
    }
    
    .modal-info h3 {
        color: #1a365d;
        margin-bottom: 0.5rem;
    }
    
    .modal-info p {
        color: #64748b;
        line-height: 1.5;
    }
    
    /* Loading and empty states */
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
    
    .video-wrapper {
        width: 100%;
        background: #000;
    }
    
    .video-wrapper video {
        width: 100%;
        display: block;
    }
    
    /* Responsiveness */
    @media (max-width: 768px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .videos-grid {
            grid-template-columns: 1fr;
        }
        
        .modal-content {
            max-width: 95%;
            max-height: 95%;
        }
    }
    
    @media (max-width: 480px) {
        .gallery-grid {
            grid-template-columns: 1fr;
        }
        
        .gallery-item {
            height: 200px;
        }
    }
`;

// Add CSS to document
const projectStyle = document.createElement('style');
projectStyle.textContent = projectSmileCSS;
document.head.appendChild(projectStyle);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Loaded - Starting Project Smile...');
    window.projectSmile = new ProjectSmileGallery();
    
    // Add videos section if it doesn't exist
    setTimeout(() => {
        if (!document.querySelector('.project-videos')) {
            console.log('➕ Creating videos section automatically...');
            window.projectSmile.createVideosSection();
        }
    }, 1000);
});
