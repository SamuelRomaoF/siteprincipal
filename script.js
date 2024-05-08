document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'carousel',
        perPage: 2,
        autoplay: true,
        interval: 2000,
        pauseOnHover: false,
    }).mount();

    splide.on('moved', function () {
        if (splide.index >= splide.length - splide.perPage) {
            splide.go('<');
        }
    });

    document.querySelectorAll('.splide__slide').forEach(slide => {
        slide.addEventListener('click', (event) => {
            const rect = slide.getBoundingClientRect();
            const x = event.clientX - rect.left;
            if (x < rect.width / 2 && !event.target.closest('button, a')) {
                splide.go('<');
            } else if (!event.target.closest('button, a')) {
                splide.go('>');
            }
        });
    });

    // Adicione um evento de clique ao ícone do menu
    $('.fa-solid.fa-bars').click(function() {
        $('.navbar').toggleClass('active');
    });
});
