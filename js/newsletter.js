document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.subscribe-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('subscribe-email').value;

        const templateParams = {
            email: email // deve corresponder ao campo do seu template no EmailJS
        };

        emailjs.send('service_sgmmwxa', 'template_kqbs4zc', templateParams)
            .then(function(response) {
                alert('Inscrição enviada com sucesso!');
                form.reset();
            }, function(error) {
                alert('Erro ao enviar inscrição. Tente novamente.');
            });
    });
});