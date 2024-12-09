
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {

            navLinks.forEach(l => l.classList.remove('active'));
            
            link.classList.add('active');
        });
    });

