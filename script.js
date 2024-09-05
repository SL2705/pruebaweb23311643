document.addEventListener('DOMContentLoaded', () => {
    // Efecto de carga
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000); // Duración de la transición de carga (2 segundos)

    // Efecto de zoom en la foto de perfil
    const profilePic = document.querySelector('.profile-pic img');
    
    profilePic.addEventListener('mouseenter', () => {
        profilePic.style.transform = 'scale(1.1)';
        profilePic.style.transition = 'transform 0.5s ease';
    });

    profilePic.addEventListener('mouseleave', () => {
        profilePic.style.transform = 'scale(1)';
    });
});
