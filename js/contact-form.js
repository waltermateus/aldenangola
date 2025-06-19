function sendContactEmail(e) {
    e.preventDefault();

    // Get form elements
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show loading state
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.innerHTML = 'Enviando...';
    submitButton.disabled = true;

    // Prepare template parameters
    const templateParams = {
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        to_name: 'ALDEN Angola',
        message: message,
    };

    // Send email using EmailJS
    emailjs.send('service_sgmmwxa', 'template_kqbs4zc', templateParams)
        .then(function(response) {
            alert('Email enviado com sucesso!');
            document.querySelector('.contact-form').reset();
            submitButton.innerHTML = 'Enviar mensagem';
            submitButton.disabled = false;
        }, function(error) {
            alert('Erro ao enviar email. Por favor, tente novamente.');
            console.error('Error:', error);
            submitButton.innerHTML = 'Enviar mensagem';
            submitButton.disabled = false;
        });
}

// Add event listener to contact form
document.querySelector('.contact-form').addEventListener('submit', sendContactEmail);