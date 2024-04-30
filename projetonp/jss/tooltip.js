document.addEventListener("DOMContentLoaded", function() {
    
    // Botão "Engenharia de Software"
    document.getElementById("tools").addEventListener("mouseover", function() {
        showToolsOptions(event);
    });

});

// Função para mostrar as opções de ferramentas ao passar o mouse sobre "Engenharia de Software"
function showToolsOptions(event) {
    if (!event) return; // Verifica se o evento está definido

    var tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");

    // Adiciona as opções de ferramentas
    tooltip.innerHTML = `
        <h3 class="tool-category monitoracao">Monitoramento</h3>
        <div class="tool-option" onclick="redirectToTool('Trello')">
            <span>Trello</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('Jira')">
            <span>Jira</span>
        </div>

        <h3 class="tool-category desenvolvimento-agil">Desenvolvimento Ágil</h3>
        <div class="tool-option" onclick="redirectToTool('Scrum')">
            <span>Scrum</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('Kanban')">
            <span>Kanban</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('Lean')">
            <span>Lean</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('DSDM')">
            <span>Dynamic Systems Development Method</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('XP')">
            <span>Extreme Programming</span>
        </div>
        <div class="tool-option" onclick="redirectToTool('FDD')">
            <span>Feature Driven Development</span>
        </div>
    `;

    document.body.appendChild(tooltip);

    var buttonRect = event.target.getBoundingClientRect();
    var distanceFromButton = 20; // Altere esse valor para ajustar a distância
    tooltip.style.top = (buttonRect.bottom + distanceFromButton) + "px"; // Ajuste a distância vertical
    tooltip.style.left = buttonRect.left + "px";

    // Adiciona um evento para remover a tooltip quando o mouse sai da própria janela
    document.addEventListener("mouseleave", function(event) {
        if (event.clientY < tooltip.offsetTop || event.clientY > tooltip.offsetTop + tooltip.offsetHeight || event.clientX < tooltip.offsetLeft || event.clientX > tooltip.offsetLeft + tooltip.offsetWidth) {
            tooltip.remove();
        }
    });
}

// Função para redirecionar para a página da ferramenta correspondente ao clicar no nome da ferramenta
function redirectToTool(toolName) {
    switch(toolName) {
        case "Trello":
            window.location.href = "https://trello.com/";
            break;
        case "Jira":
            window.location.href = "https://www.atlassian.com/software/jira";
            break;
        case "Scrum":
            window.location.href = "https://www.scrum.org/";
            break;
        case "Kanban":
            window.location.href = "https://www.digite.com/kanban/";
            break;
        case "Lean":
            window.location.href = "https://www.lean.org.br/o-que-e-lean.aspx";
            break;
        case "DSDM":
            window.location.href = "https://www.linkedin.com/pulse/agile-methods-04-método-dsdm-dynamic-systems-method-rodrigo-coimbra-nzluf/";
            break;
        case "XP":
            window.location.href = "https://www.devmedia.com.br/extreme-programming-conceitos-e-praticas/1498";
            break;
        case "FDD":
            window.location.href = "https://www.devmedia.com.br/introducao-ao-fdd-feature-driven-development/27971";
            break;
        default:
            break;
    }
}
