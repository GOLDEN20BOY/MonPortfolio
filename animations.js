document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about');
    aboutSection.style.opacity = 0;
    aboutSection.style.transform = 'translateY(50px)';
    aboutSection.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.style.opacity = 1;
                aboutSection.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
});
