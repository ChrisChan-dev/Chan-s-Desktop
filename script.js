document.addEventListener('DOMContentLoaded', () => {
    
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const windowCircles = document.querySelectorAll('.circle');
    windowCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            circle.style.backgroundColor = circle.style.backgroundColor === 'black' ? 'white' : 'black';
        });
    });

    const scrollContainer = document.getElementById('cert-scroll');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn && scrollContainer) {
        nextBtn.addEventListener('click', () => {
            const card = scrollContainer.querySelector('.scroll-card');
            const scrollAmount = card.offsetWidth + 32; 
            scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        
        prevBtn.addEventListener('click', () => {
            const card = scrollContainer.querySelector('.scroll-card');
            const scrollAmount = card.offsetWidth + 32;
            scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }

    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const modal = document.getElementById('blog-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalBtn = document.querySelector('.close-modal');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    const hideGifBtns = document.querySelectorAll('.hide-gif-btn');
    hideGifBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const gifCard = e.target.closest('.window-card');
            if (gifCard) {
                gifCard.style.display = 'none';
            }
        });
    });

});