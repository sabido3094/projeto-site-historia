document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-proximo');
    const jumpscare = document.getElementById('jumpscare');
    const jumpscareSound = document.getElementById('jumpscare-sound');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const currentActive = document.querySelector('.ativo');
            const nextStep = event.target.getAttribute('data-proximo');
            const nextStepElement = document.getElementById(passo-${nextStep});

            // Navegar para o próximo passo
            if (currentActive) {
                currentActive.classList.remove('ativo');
            }
            if (nextStepElement) {
                nextStepElement.classList.add('ativo');
            }

            // Mostrar jumpscare se o próximo passo for 4
            if (nextStep === '4') {
                jumpscare.classList.remove('hidden');
                jumpscareSound.play();
            }
        });
    });
});
