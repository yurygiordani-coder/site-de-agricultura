// Aguarda o carregamento completo do DOM para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. GERENCIAMENTO DO FORMULÁRIO DE CONTATO
    const form = document.getElementById('agroForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Impede o envio padrão do formulário (recarregar a página)
            e.preventDefault();
            
            // Captura os valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            // Validação básica extra
            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Mensagem de sucesso para o usuário
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre agricultura tecnológica foi enviada com sucesso.`);
            
            // Limpa o formulário após o envio
            this.reset();
        });
    }

    // 2. EFEITO DE COR AO ROLAR A PÁGINA (HEADER FIXO)
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#f4f9f4';
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
        } else {
            header.style.backgroundColor = '#ffffff';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
});
