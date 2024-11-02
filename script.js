







document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-button");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode"); // Alterna o modo claro e escuro

        // Atualiza a cor do botão
        if (body.classList.contains("dark-mode")) {
            toggleButton.style.backgroundColor = "gray"; // Modo escuro
        } else {
            toggleButton.style.backgroundColor = "lightgray"; // Modo claro
        }
    });
});

let currentIndex = 0;


// Função para exibir uma mensagem de saudação
const showGreeting = () => {
    alert("Bem-vindo à minha página! Espero que você goste.");
};

// Chama a função de saudação quando a página é carregada
window.onload = showGreeting;

// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !email || !mensagem) {
            event.preventDefault(); // Impede o envio do formulário
            alert("Por favor, preencha todos os campos."); // Alerta ao usuário
        } else {
            alert("Mensagem enviada com sucesso!"); // Confirmação de envio
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
        } else {
            
            submitButton.disabled = true; 
            submitButton.textContent = "Enviando..."; 

            setTimeout(() => {
                alert("Mensagem enviada com sucesso!");
                form.reset();
                submitButton.textContent = "Enviar"; 
                submitButton.disabled = false; 
            }, 2000); 
        }
    });
});