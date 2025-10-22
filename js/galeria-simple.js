// Galeria SIMPLES para teste
console.log("🎯 GALERIA SIMPLES INICIADA!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("✅ DOM Carregado - Procurando youngLifeGallery...");
    
    const container = document.getElementById('youngLifeGallery');
    console.log("🔍 Container encontrado:", container);
    
    if (container) {
        console.log("🎉 Vamos criar a galeria!");
        container.innerHTML = `
            <div style="background: #1a365d; color: white; padding: 20px; border-radius: 10px;">
                <h2>🎯 GALERIA FUNCIONANDO!</h2>
                <p>Se você está vendo isso, o JavaScript está funcionando!</p>
                <button onclick="alert('✅ JavaScript OK!')">Clique para testar</button>
            </div>
        `;
    } else {
        console.log("❌ youngLifeGallery NÃO encontrado!");
    }
});
