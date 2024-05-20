     /*Menu hamburg em modo mobile*/
     const navbar = document.querySelector(".navbar");
     const menuButton = document.querySelector(".botao-menu");
 
     menuButton.addEventListener('click', () =>{
         navbar.classList.toggle("menu-hamburg")
     });

     document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                // Verifica se o link é uma âncora interna
                if (href.startsWith('#')) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
    