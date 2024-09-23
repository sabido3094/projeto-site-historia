const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

       
        if (proximoPasso === 'passo-7') {
            const imagem = document.querySelector('#passo-7 img');
         
            imagem.classList.add('fade');
           
            setTimeout(() => {
                imagem.classList.add('fade-in'); 
            }, 0); 
        }

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});
