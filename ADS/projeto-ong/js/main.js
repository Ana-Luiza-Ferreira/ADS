
// FORMULÁRIO DE CADASTRO

const formulario = document.getElementById("formCadastro");

if (formulario) {

    formulario.addEventListener("submit", function(evento) {

        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const mensagem = document.getElementById("mensagem");

        mensagem.textContent =
            `Obrigada, ${nome}! Seu cadastro foi preenchido com sucesso.`;

        formulario.reset();

    });

}