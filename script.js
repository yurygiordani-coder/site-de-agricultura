document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SIMULADOR DE ECONOMIA DE ÁGUA (Manejo inteligente)
    const btnCalcular = document.getElementById('btnCalcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultadoCalc');
    
    if (btnCalcular && inputHectares) {
        btnCalcular.addEventListener('click', () => {
            const hectares = parseFloat(inputHectares.value);
            
            if (isNaN(hectares) || hectares <= 0) {
                alert('Por favor, insira uma quantidade de hectares válida.');
                return;
            }
            
            // Regra matemática fictícia mas baseada em consumo médio:
            // Um hectare consome cerca de 40.000 litros/dia dependendo da cultura.
            // Economia média do gotejamento automatizado é de 40%.
            const economiaPorHectareDIa = 16000; 
            const totalEconomizado = hectares * economiaPorHectareDIa;
            
            // Atualiza o HTML com formatação de números local (Brasil)
            document.getElementById('resAgua').textContent = totalEconomizado.toLocaleString('pt-BR');
            document.getElementById('resEnergia').textContent = '35'; // Redução padrão de bombeamento
            
            // Mostra o quadro de resultados removendo a classe hidden
            resultadoBox.classList.remove('hidden');
        });
    }

    // 2. FORMULÁRIO DE CONTATO COM VALIDACÃO
    const form = document.getElementById('agroForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            
            alert(`Obrigado pelo interesse, ${nome}!\nNossos consultores agro técnicos entrarão em contato através do e-mail: ${email} nas próximas 24 horas.`);
            
            this.reset();
        });
    }

    // 3. ANIMAÇÃO DE ROLAGEM DO CABEÇALHO (Sticky Scroll Effect)
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = '#f1f8e9'; 
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.12)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.08)';
        }
    });
});
