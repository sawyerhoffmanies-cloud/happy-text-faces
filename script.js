document.addEventListener('DOMContentLoaded', function() {
    // Add breathing background effect to body
    document.body.classList.add('breathing-bg');

    // Add floating pills to the background
    const main = document.querySelector('main');
    for (let i = 0; i < 10; i++) {
        const pill = document.createElement('div');
        pill.classList.add('floating-pill');
        const size = Math.random() * 50 + 20;
        pill.style.width = `${size}px`;
        pill.style.height = `${size / 2}px`;
        pill.style.top = `${Math.random() * 100}%`;
        pill.style.left = `${Math.random() * 100}%`;
        pill.style.animationDuration = `${Math.random() * 5 + 5}s`;
        main.appendChild(pill);
    }

    // Scroll-triggered fade-in animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});


