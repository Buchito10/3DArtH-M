document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`Gracias por tu mensaje, ${nombre}! Te responderemos a ${email} pronto.`);
    
    
});