document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');
    
    // Adicionar um evento de clique ao botão hambúrguer
    navToggle.addEventListener('click', () => {
        // Alterna a classe 'is-open' no menu para abrir/fechar via CSS
        mainNav.classList.toggle('is-open');
        
        // Atualiza o estado de acessibilidade (ARIA)
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
        navToggle.setAttribute('aria-expanded', !isExpanded);
    });
});