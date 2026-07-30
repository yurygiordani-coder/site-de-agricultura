document.addEventListener('DOMContentLoaded', () => {

    // 1. CARREGAR A DATA DA SAFRA ATUALIZADA (Dinâmico)
    const dateContainer = document.getElementById('currentDate');
    if (dateContainer) {
        const hoje = new Date();
        const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // Exibe formatado no padrão brasileiro (Ex: quinta-feira, 30 de julho de 2026)
        dateContainer.textContent = hoje.toLocaleDateString('pt-BR', opcoes);
    }

    // 2. MENU MOBILE RESPONSIVO (Sanduíche)
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Altera o ícone entre barras e "X" de fechar
            const icon = mobileMenu.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // 3. ENVIO DO FORMULÁRIO COM SIMULAÇÃO DE BANCO DE DADOS
    const techForm = document.getElementById('agroTechForm');
    if (techForm) {
        techForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const cultura = document.getElementById('cultura').value;

            // Alerta personalizado de acordo com a cultura selecionada
            alert(`Solicitação processada com sucesso, ${nome}!\nInstanciamos um modelo preditivo para sua cultura de ${cultura.toUpperCase()}. Um engenheiro entrará em contato.`);
            
            this.reset();
        });
    }

    // 4. ATUALIZADOR DINÂMICO DE DADOS DO DASHBOARD (Simulação de Sensores)
    // Altera o valor da umidade do solo levemente a cada 5 segundos para simular telemetria real
    const umidadeValor = document.querySelector('.dash-value');
    const progressoPreenchimento = document.querySelector('.progress-fill');

    if (umidadeValor && progressoPreenchimento) {
        setInterval(() => {
            // Gera oscilação realista entre 60% e 68%
            const variacaoUmidade = Math.floor(Math.random() * (68 - 60 + 1)) + 60;
            umidadeValor.textContent = `${variacaoUmidade}%`;
            progressoPreenchimento.style.width = `${variacaoUmidade}%`;
        }, 5000); 
    }
});
