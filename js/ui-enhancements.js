// Smooth scroll - fixed selector handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Get the href value
        const href = this.getAttribute('href');
        
        // Skip if href is just "#"
        if (href === "#") return;
        
        e.preventDefault();
        
        // Get the target element
        const target = document.querySelector(href);
        
        // Only scroll if target exists
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Lazy loading para imagens
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: "0px 0px 50px 0px"
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Feedback visual para formulários
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const submitButton = this.querySelector('button[type="submit"]');
        submitButton.classList.add('loading');
        submitButton.innerHTML = 'Enviando...';
    });
});

// Animações de entrada
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if(elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);