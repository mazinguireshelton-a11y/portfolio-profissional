// js/contadores.js - VERSION WITH DESCRIPTIONS ON CERTIFICATES
console.log('🎯 COUNTER SYSTEM STARTED!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Loaded - Starting counters...');
    
    // my certificates
    const certificates = [
        {
            id: 1,
            name: "Young Life Leadership Certificate 2024",
            institution: "Young Life Mozambique", 
            date: "2024",
            file: "certificado-lideranca-2024.pdf",
            description: "In this leadership course I learned: how to work in a team, how to lead people, patience, and how to communicate with people."
        },
        {
            id: 2, 
            name: "Young Life Leadership Certificate 2025", 
            institution: "Young Life Mozambique",
            date: "2025", 
            file: "certificado-lideranca-2025.pdf",
            description: "In this course I deepened my knowledge in: how to lead a team effectively and how to take on responsibilities."
        },
        {
            id: 3, 
            name: "Academic_Ranking_Shelton", 
            institution: "secondary school samora Moisés machel ",
            date: "2026", 
            file: "Academic_Ranking_Shelton.pdf",
            description: "Ranked among the top students in class for overall performance in Mathematics, Physics, Chemistry, and related subjects."
       }            
      ];

    // UPDATE COUNTERS
    function updateCounters() {
        console.log('🔢 Updating counters...');
        
        // YOUR REAL NUMBERS
        // ...
        const projectsCount = document.getElementById('projetos-count'); // You can delete this line if you want
        const certificatesCount = document.getElementById('certificados-count');
        const experienceCount = document.getElementById('experiencia-count');

        if (projectsCount) projectsCount.textContent = '3';
        if (certificatesCount) certificatesCount.textContent = certificates.length.toString();
        if (experienceCount) experienceCount.textContent = '2';
        
        console.log('✅ Counters updated: Projects=3, Certificates=' + certificates.length + ', Experience=2');
    }

    // RENDER CERTIFICATES
    function renderCertificates() {
        const container = document.getElementById('certificadosGrid');
        if (!container) {
            console.log('❌ Container certificadosGrid not found, looking for alternatives...');
            
            // Try to find other possible containers
            const alternatives = document.querySelector('.certificados-grid');
            if (alternatives) {
                console.log('✅ Found .certificados-grid');
                renderInContainer(alternatives);
            } else {
                console.log('❌ No certificate containers found');
            }
            return;
        }
        
        renderInContainer(container);
    }

    function renderInContainer(container) {
        console.log('📋 Rendering ' + certificates.length + ' certificates...');
        
        container.innerHTML = certificates.map(cert => `
            <div class="certificado-card">
                <div class="certificado-icon">
                    <i class="fas fa-file-pdf"></i>
                </div>
                <h4>${cert.name}</h4>
                <p class="certificado-instituicao">${cert.institution}</p>
                <div class="certificado-descricao">
                    <p>${cert.description}</p>
                </div>
                <span class="certificado-data">${cert.date}</span>
                <button class="btn-pdf" onclick="openCertificate('${cert.file}')">
                    <i class="fas fa-eye"></i>
                    View Certificate
                </button>
            </div>
        `).join('');

        console.log('✅ Certificates rendered!');
    }

    // GLOBAL FUNCTION TO OPEN PDF
    window.openCertificate = function(file) {
        const path = `assets/certificates/${file}`;
        console.log('📂 Opening certificate: ' + path);
        window.open(path, '_blank');
    }

    // ADD CSS IF NECESSARY
    function addCSS() {
        if (!document.querySelector('#contadores-css')) {
            const styleText = `
                .certificados-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin: 2rem 0;
                }
                .certificado-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    text-align: center;
                    transition: all 0.3s ease;
                    border-left: 4px solid #1a365d;
                    display: flex;
                    flex-direction: column;
                    height: fit-content;
                }
                .certificado-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 15px rgba(0,0,0,0.15);
                }
                .certificado-icon {
                    font-size: 3rem;
                    color: #e53e3e;
                    margin-bottom: 1rem;
                }
                .certificado-instituicao {
                    font-weight: bold;
                    color: #1a365d;
                    margin: 0.5rem 0;
                }
                .certificado-descricao {
                    background: #f7fafc;
                    padding: 1rem;
                    border-radius: 8px;
                    margin: 1rem 0;
                    text-align: left;
                    border-left: 3px solid #e53e3e;
                }
                .certificado-descricao p {
                    margin: 0;
                    font-size: 0.9rem;
                    line-height: 1.4;
                    color: #4a5568;
                }
                .certificado-data {
                    display: inline-block;
                    background: #1a365d;
                    color: white;
                    padding: 5px 15px;
                    border-radius: 20px;
                    margin: 1rem 0;
                    font-size: 0.9rem;
                }
                .btn-pdf {
                    background: #1a365d;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    margin-top: auto;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                .btn-pdf:hover {
                    background: #0f2547;
                    transform: translateY(-2px);
                }
            `;

            const style = document.createElement('style');
            style.id = 'contadores-css';
            style.textContent = styleText;
            document.head.appendChild(style);
            console.log('✅ Certificate CSS added!');
        }
    }

    // INITIALIZATION
    addCSS();
    updateCounters();
    renderCertificates();
    
    console.log('🎯 Counter system completely initialized!');
});

console.log('✅ contadores.js loaded');
