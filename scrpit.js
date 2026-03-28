// ===== SCROLL REVEAL =====
document.addEventListener('DOMContentLoaded', function() {
    // Pilih semua elemen dengan class reveal
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .card-reveal');
    
    function checkReveal() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Jalankan sekali untuk yang sudah terlihat
});