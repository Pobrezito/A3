// Função para fazer a barra de pesquisa e a lupa explodirem
function explodeSearchElements() {
    var searchTxt = document.querySelector(".search-txt");
    var searchIcon = document.querySelector(".search-icon");

    searchTxt.classList.add("explode"); // Adiciona a classe "explode" à barra de pesquisa
    searchIcon.classList.add("explode"); // Adiciona a classe "explode" à lupa

    setTimeout(function() {
        searchTxt.classList.remove("explode"); // Remove a classe "explode" da barra de pesquisa após 300ms (0.3s)
        searchIcon.classList.remove("explode"); // Remove a classe "explode" da lupa após 300ms (0.3s)
    }, 300);
}

// Função para fazer o botão de pesquisa explodir
function explodeSearchButton() {
    var searchBtn = document.querySelector(".search-btn");

    searchBtn.classList.add("explode"); // Adiciona a classe "explode" ao botão de pesquisa

    setTimeout(function() {
        searchBtn.classList.remove("explode"); // Remove a classe "explode" do botão de pesquisa após 300ms (0.3s)
    }, 300);
}

// Adiciona eventos para chamar as funções de explosão quando o usuário realizar a pesquisa
document.addEventListener("DOMContentLoaded", function() {
    // Captura o evento de pressionar a tecla Enter no campo de pesquisa
    document.getElementById("searchInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchLanguage(); // Chama a função de pesquisa quando a tecla Enter for pressionada
            explodeSearchElements(); // Chama a função para fazer a barra de pesquisa e a lupa explodirem
            explodeSearchButton(); // Chama a função para fazer o botão de pesquisa explodir
        }
    });

    // Captura o evento de clicar no botão de pesquisa
    document.getElementById("searchBtn").addEventListener("click", function() {
        searchLanguage(); // Chama a função de pesquisa quando o botão de pesquisa for clicado
        explodeSearchElements(); // Chama a função para fazer a barra de pesquisa e a lupa explodirem
        explodeSearchButton(); // Chama a função para fazer o botão de pesquisa explodir
    });
});


// Função de pesquisa
function searchLanguage() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var languageDetails = document.getElementById("languageDetails");

    languageDetails.innerHTML = ""; // Limpa os detalhes anteriores

    switch(input) {
        case "python":
            languageDetails.innerHTML += `
                <h2>Python</h2>
                <div class="language-details">
                    <img src="../fotos/pythonlogo.png" alt="Python Logo" class="language-symbol">
                    <p class="description">Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p>
                    <div class="categories">
                        <h3>Ferramentas populares:</h3>
                        <ul>
                            <li><a href="https://www.djangoproject.com/">Django</a>: Framework web de alto nível para desenvolvimento rápido e limpo.</li>
                            <li><a href="https://flask.palletsprojects.com/">Flask</a>: Micro-framework web para Python baseado em Werkzeug e Jinja2.</li>
                            <li><a href="https://numpy.org/">NumPy</a>: Biblioteca fundamental para computação científica com Python.</li>
                            <li><a href="https://pandas.pydata.org/">Pandas</a>: Biblioteca de código aberto que fornece estruturas de dados de alto desempenho e fáceis de usar.</li>
                            <li><a href="https://www.jetbrains.com/pycharm/">PyCharm</a>: IDE Python para desenvolvimento profissional.</li>
                            <li><a href="https://jupyter.org/">Jupyter Notebook</a>: Ambiente de computação interativo baseado na web.</li>
                        </ul>
                    </div>
                </div>
            `;
            break;

        case "javascript":
            languageDetails.innerHTML += `
                <h2>JavaScript</h2>
                <div class="language-details">
                    <img src="../fotos/jslogo.png" alt="JavaScript Logo" class="language-symbol">
                    <p class="description">JavaScript é uma linguagem de programação interpretada, estruturada e de script com tipagem dinâmica fraca e multiparadigma.</p>
                    <div class="categories">
                        <h3>Ferramentas populares:</h3>
                        <ul>
                            <li><a href="https://reactjs.org/">React</a>: Biblioteca JavaScript para criar interfaces de usuário.</li>
                            <li><a href="https://angular.io/">Angular</a>: Framework JavaScript mantido pela Google para desenvolvimento de aplicativos web.</li>
                            <li><a href="https://vuejs.org/">Vue.js</a>: Framework JavaScript progressivo para construir interfaces de usuário.</li>
                            <li><a href="https://jquery.com/">jQuery</a>: Biblioteca JavaScript rápida, pequena e rica em recursos.</li>
                            <li><a href="https://lodash.com/">Lodash</a>: Utilitários JavaScript modernos e eficientes.</li>
                            <li><a href="https://code.visualstudio.com/">Visual Studio Code</a>: Editor de código-fonte desenvolvido pela Microsoft.</li>
                            <li><a href="https://www.jetbrains.com/webstorm/">WebStorm</a>: IDE JavaScript e TypeScript inteligente.</li>
                        </ul>
                    </div>
                </div>
            `;
            break;

        case "java":
            languageDetails.innerHTML += `
                <h2>Java</h2>
                <div class="language-details">
                    <img src="../fotos/javalogo.png" alt="Java Logo" class="language-symbol">
                    <p class="description">Java é uma linguagem de programação orientada a objetos e que foi projetada
                    ... a...
                    <div class="categories">
                            <h3>Ferramentas populares:</h3>
                            <ul>
                                <li><a href="https://spring.io/">Spring</a>: Framework de aplicação Java.</li>
                                <li><a href="https://hibernate.org/">Hibernate</a>: Framework de mapeamento objeto-relacional para Java.</li>
                                <li><a href="https://commons.apache.org/">Apache Commons</a>: Conjunto de bibliotecas para Java.</li>
                                <li><a href="https://sites.google.com/gson/">Gson</a>: Biblioteca Java para serialização e desserialização de objetos Java para JSON.</li>
                                <li><a href="https://www.eclipse.org/">Eclipse</a>: IDE Java gratuita e de código aberto.</li>
                                <li><a href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a>: IDE Java poderosa para desenvolvedores profissionais.</li>
                            </ul>
                        </div>
                    </div>
                `;
                break;
    
            case "c#":
                languageDetails.innerHTML += `
                    <h2>C#</h2>
                    <div class="language-details">
                        <img src="../fotos/csharplogo.png" alt="Csharp Logo" class="language-symbol">
                        <p class="description">C# é uma linguagem de programação moderna, orientada a objetos, e desenvolvida pela Microsoft como parte da plataforma .NET.</p>
                        <div class="categories">
                            <h3>Ferramentas populares:</h3>
                            <ul>
                                <li><a href="https://dotnet.microsoft.com/">.NET</a>: Plataforma de desenvolvimento de software da Microsoft.</li>
                                <li><a href="https://visualstudio.microsoft.com/">Visual Studio</a>: IDE da Microsoft para desenvolvimento em C# e outras linguagens.</li>
                                <li><a href="https://github.com/dotnet/aspnetcore">ASP.NET Core</a>: Framework de desenvolvimento web para C#.</li>
                                <li><a href="https://www.jetbrains.com/rider/">Rider</a>: IDE multiplataforma da JetBrains para desenvolvimento em .NET.</li>
                                <li><a href="https://www.nuget.org/">NuGet</a>: Gerenciador de pacotes para a plataforma .NET.</li>
                                <li><a href="https://www.mono-project.com/">Mono</a>: Implementação de código aberto da plataforma .NET.</
                                </ul>
                                </div>
                            </div>
                        `;
                        break;
                         
                    case "ruby":
                        languageDetails.innerHTML += `
                            <h2>Ruby</h2>
                            <div class="language-details">
                                <img src="../fotos/rubylogo.png" alt="Ruby Logo" class="language-symbol">
                                <p class="description">Ruby é uma linguagem de programação interpretada de alto nível, puramente orientada a objetos e de fácil leitura e escrita.</p>
                                <div class="categories">
                                    <h3>Ferramentas populares:</h3>
                                    <ul>
                                        <li><a href="https://rubyonrails.org/">Ruby on Rails</a>: Framework web de código aberto escrito em Ruby.</li>
                                        <li><a href="https://rspec.info/">RSpec</a>: Estrutura de teste para Ruby.</li>
                                        <li><a href="https://bundler.io/">Bundler</a>: Gerenciador de dependências para Ruby.</li>
                                        <li><a href="https://www.jetbrains.com/ruby/">RubyMine</a>: IDE Ruby e Rails para desenvolvimento profissional.</li>
                                    </ul>
                                </div>
                            </div>
                        `;
                        break;
            
                    default:
                        languageDetails.innerHTML += "<p>Linguagem não encontrada.</p>";
                }
            }
            