document.addEventListener("DOMContentLoaded", function() {
    // Botão "Linguagens de Programação"
    document.getElementById("tools1").addEventListener("mouseover", function(event) {
        showLanguagesOptions(event);
    });
});

// Função para mostrar as opções de linguagens ao passar o mouse sobre "Linguagens"
function showLanguagesOptions(event) {
    if (!event) return; // Verifica se o evento está definido

    var tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");

    // Adiciona as opções de linguagens
    tooltip.innerHTML = `
        <h3 class="tool-category linguagens-programa">Linguagens</h3>
        <div class="tool-option" onclick="redirectToTool('JavaScript')">
            <span>JavaScript</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('Python')">
            <span>Python</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('Java')">
            <span>Java</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('CSharp')">
            <span>C#</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('Ruby')">
            <span>Ruby</span>
        </div>
    `;

    document.body.appendChild(tooltip);

    var buttonRect = event.target.getBoundingClientRect();
    var distanceFromButton = 20; // Altere esse valor para ajustar a distância
    tooltip.style.top = (buttonRect.bottom + distanceFromButton) + "px"; // Ajuste a distância vertical
    tooltip.style.left = (buttonRect.left - (tooltip.offsetWidth - buttonRect.width) / 2) + "px";

    // Adiciona um evento para remover a tooltip quando o mouse sai da própria janela
    document.addEventListener("mouseleave", function(event) {
        if (
            event.clientY < tooltip.offsetTop ||
            event.clientY > tooltip.offsetTop + tooltip.offsetHeight ||
            event.clientX < tooltip.offsetLeft ||
            event.clientX > tooltip.offsetLeft + tooltip.offsetWidth
        ) {
            tooltip.remove();
        }
    });
}

// Função para redirecionar para a página da linguagem correspondente ao clicar no nome da linguagem
function redirectToTool(languageName) {
    switch(languageName) {
        case "JavaScript":
            window.location.href = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript";
            break;
        case "Python":
            window.location.href = "https://www.python.org/";
            break;
        case "Java":
            window.location.href = "https://www.java.com/";
            break;
        case "CSharp":
            window.location.href = "https://learn.microsoft.com/pt-br/dotnet/csharp/";
            break;
        case "Ruby":
            window.location.href = "https://www.ruby-lang.org/pt/";
            break;
        default:
            break;
    }
}
