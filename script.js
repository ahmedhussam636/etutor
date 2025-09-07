
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {

            navLinks.forEach(l => l.classList.remove('active'));
            
            link.classList.add('active');
        });
    });


    const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
myInput.focus()
})


// Reset the iframe source when modal is closed
document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
    const iframe = document.getElementById('videoIframe');
    iframe.src = iframe.src; // This will reset the video
});