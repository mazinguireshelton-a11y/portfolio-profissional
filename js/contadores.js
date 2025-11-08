// js/contadores.js - VERSÃO COM DESCRIÇÕES NOS CERTIFICADOS
console.log('🎯 SISTEMA DE CONTADORES INICIADO!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM Carregado - Iniciando contadores...');
    
    // SEUS 2 CERTIFICADOS REAIS - COM DESCRIÇÕES
    const certificados = [
        {
            id: 1,
            nome: "Certificado de Liderança Young Life 2024",
            instituicao: "Young Life Moçambique", 
            data: "2024",
            arquivo: "certificado-lideranca-2024.pdf.pdf",
            descricao: "Neste curso de liderança aprendi: como trabalhar em equipe, como liderar pessoas, paciência, e como saber falar com pessoas."
        },
        {
            id: 2, 
            nome: "Certificado de Liderança Young Life 2025", 
            instituicao: "Young Life Moçambique",
            data: "2025", 
            arquivo: "certificado-lideranca-2025.pdf.pdf",
            descricao: "Neste curso aprofundei meus conhecimentos em: como liderar uma equipe eficazmente e como assumir responsabilidades."
        }
    ];

    // ATUALIZA CONTADORES
    function atualizarContadores() {
        console.log('🔢 Atualizando contadores...');
        
        // SEUS NÚMEROS REAIS
        // ...
        const projetosCount = document.getElementById('projetos-count'); // Pode apagar esta linha se quiser
        const certificadosCount = document.getElementById('certificados-count');
        const experienciaCount = document.getElementById('experiencia-count');

        if (projetosCount) projetosCount.textContent = '3';
        if (certificadosCount) certificadosCount.textContent = certificados.length.toString();
        if (experienciaCount) experienciaCount.textContent = '2';
        
        console.log('✅ Contadores atualizados: Projetos=3, Certificados=' + certificados.length + ', Experiência=2');
    }

    // RENDERIZA CERTIFICADOS
    function renderizarCertificados() {
        const container = document.getElementById('certificadosGrid');
        if (!container) {
            console.log('❌ Container certificadosGrid não encontrado, procurando alternativas...');
            
            // Tenta encontrar outros containers possíveis
            const alternativas = document.querySelector('.certificados-grid');
            if (alternativas) {
                console.log('✅ Encontrado .certificados-grid');
                renderizarNoContainer(alternativas);
            } else {
                console.log('❌ Nenhum container de certificados encontrado');
            }
            return;
        }
        
        renderizarNoContainer(container);
    }

    function renderizarNoContainer(container) {
        console.log('📋 Renderizando ' + certificados.length + ' certificados...');
        
        container.innerHTML = certificados.map(cert => `
            <div class="certificado-card">
                <div class="certificado-icon">
                    <i class="fas fa-file-pdf"></i>
                </div>
                <h4>${cert.nome}</h4>
                <p class="certificado-instituicao">${cert.instituicao}</p>
                <div class="certificado-descricao">
                    <p>${cert.descricao}</p>
                </div>
                <span class="certificado-data">${cert.data}</span>
                <button class="btn-pdf" onclick="abrirCertificado('${cert.arquivo}')">
                    <i class="fas fa-eye"></i>
                    Ver Certificado
                </button>
            </div>
        `).join('');

        console.log('✅ Certificados renderizados!');
    }

    // FUNÇÃO GLOBAL PARA ABRIR PDF
    window.abrirCertificado = function(arquivo) {
        const caminho = `assets/certificados/${arquivo}`;
        console.log('📂 Abrindo certificado: ' + caminho);
        window.open(caminho, '_blank');
    }

    // ADICIONA CSS SE NECESSÁRIO
    function adicionarCSS() {
        if (!document.querySelector('#contadores-css')) {
            const estilo = `
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
            style.textContent = estilo;
            document.head.appendChild(style);
            console.log('✅ CSS dos certificados adicionado!');
        }
    }

    // INICIALIZAÇÃO
    adicionarCSS();
    atualizarContadores();
    renderizarCertificados();
    
    console.log('🎯 Sistema de contadores inicializado completamente!');
});

console.log('✅ contadores.js carregado');
