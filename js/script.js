const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Se o elemento estiver visível na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    // Aciona a animação quando 15% do elemento aparecer na tela
    threshold: 0.15
});

// Seleciona todos os elementos com a classe reveal e começa a observar
const elements = document.querySelectorAll('.reveal');
elements.forEach((el) => observer.observe(el));