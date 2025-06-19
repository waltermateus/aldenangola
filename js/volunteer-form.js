function sendVolunteerEmail(e) {
    e.preventDefault();

    // Get volunteer form elements
    const name = document.getElementById('volunteer-name').value;
    const email = document.getElementById('volunteer-email').value;
    const subject = document.getElementById('volunteer-subject').value;
    const phone = document.getElementById('volunteer-phone').value;
    const message = document.getElementById('volunteer-message').value;

    // Prepare template parameters for volunteer
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'ALDEN Angola',
        subject: subject,
        phone: phone,
        message: message || 'Sem comentários adicionais',
    };

    // Send email using EmailJS
    emailjs.send('service_sgmmwxa', 'template_kqbs4zc', templateParams)
        .then(function(response) {
            alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
            document.querySelector('.volunteer-form').reset();
        }, function(error) {
            alert('Erro ao enviar formulário. Por favor, tente novamente.');
            console.error('Error:', error);
        });
}

// Add event listener to volunteer form
document.querySelector('.volunteer-form').addEventListener('submit', sendVolunteerEmail);