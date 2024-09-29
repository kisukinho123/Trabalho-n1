document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;  // Começa com o primeiro slide
    showSlides(slideIndex);  // Mostra o primeiro slide ao carregar

    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    // Função para avançar automaticamente a cada 5 segundos
    setInterval(function() {
        plusSlides(1);
    }, 5000);  // Muda o slide a cada 5 segundos

    function plusSlides(n) {
        showSlides(slideIndex += n);  // Muda o slide conforme o clique
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slides");
        
        // Se o índice for maior que o número de slides, volta ao primeiro
        if (n > slides.length) {slideIndex = 1}
        // Se o índice for menor que 1, vai para o último slide
        if (n < 1) {slideIndex = slides.length}
        
        // Esconde todos os slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        // Mostra o slide atual
        slides[slideIndex - 1].style.display = "block";  
    }
});


