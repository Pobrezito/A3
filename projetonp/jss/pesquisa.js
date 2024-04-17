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
                    <p class="description">Java é uma linguagem de programação orientada a objetos e que foi projetada para ter poucas dependências de implementação.</p>
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

            case "trello": 
            languageDetails.innerHTML += `
                <h2>Trello</h2>
                <div class="language-details">
                    <img src="../fotos/trello.png" alt="Trello Logo" class="language-symbol">
                    <p class="description">O Trello é uma plataforma de gerenciamento de projetos baseada em quadros virtuais. Ele oferece uma abordagem visual e intuitiva para organizar tarefas, projetos e colaboração em equipe.</p>
                    <div class="categories">
                        <h3>Recursos populares:</h3>
                        <ul>
                            <li><a href="https://trello.com/">Trello</a>: O site oficial do Trello.</li>
                            <li><a href="https://blog.trello.com/">Blog do Trello</a>: Dicas e truques para maximizar a produtividade.</li>
                            <li><a href="https://help.trello.com/">Central de Ajuda do Trello</a>: Recursos de suporte e documentação.</li>
                        </ul>
                    </div>
                </div>
            `;
            break;

            case "jira": 
            languageDetails.innerHTML += `
                <h2>Jira</h2>
                <div class="language-details">
                    <img src="../fotos/jira.png" alt="Jira Logo" class="language-symbol">
                    <p class="description">O Jira é uma plataforma de gerenciamento de projetos e acompanhamento de problemas desenvolvida pela Atlassian. Ele é amplamente utilizado por equipes ágeis para planejar, acompanhar e gerenciar projetos de software.</p>
                    <div class="categories">
                        <h3>Recursos populares:</h3>
                        <ul>
                            <li><a href="https://www.atlassian.com/software/jira">Site oficial do Jira</a>: Acesse o site oficial para obter mais informações e iniciar uma avaliação gratuita.</li>
                            <li><a href="https://www.atlassian.com/software/jira/guides">Guias do Jira</a>: Recursos úteis para começar a usar o Jira.</li>
                            <li><a href="https://confluence.atlassian.com/jirasoftwarecloud/getting-started-with-jira-software-764480944.html">Começando com o Jira Software</a>: Um guia detalhado para começar com o Jira Software.</li>
                        </ul>
                    </div>
                </div>
            `;
            break;

            case "scrum":
              languageDetails.innerHTML += `
        <h2>Scrum</h2>
        <div class="language-details">
            <img src="../fotos/scrum.png" alt="Scrum Logo" class="language-symbol">
            <p class="description">Scrum é um framework ágil que se concentra na entrega iterativa e incremental de produtos. Ele é baseado em princípios de transparência, inspeção e adaptação, e é frequentemente utilizado no desenvolvimento de software para lidar com mudanças e incertezas.</p>
            <div class="categories">
                <h3>Recursos populares:</h3>
                <ul>
                    <li><a href="https://www.scrum.org/">Scrum.org</a>: Site oficial do Scrum.org, que oferece recursos de treinamento, certificação e comunidade.</li>
                    <li><a href="https://www.scrumalliance.org/">Scrum Alliance</a>: Organização sem fins lucrativos que oferece certificações, treinamentos e recursos para profissionais Scrum.</li>
                    <li><a href="https://www.scrumguides.org/">Scrum Guides</a>: Os guias oficiais do Scrum, que descrevem os valores, papéis, eventos e artefatos do framework.</li>
                 </ul>
               </div>
              </div>
               `;
              break;
               case "kanban":
                      languageDetails.innerHTML += `
                  <h2>Kanban</h2>
                          <div class="language-details">
             <img src="../fotos/kanbanlogo.png" alt="Kanban Logo" class="language-symbol">
            <p class="description">Kanban é um método para gerenciar o trabalho com foco na entrega contínua, semelhante ao Scrum, mas com ênfase na visualização do fluxo de trabalho. É baseado em princípios como limitação do trabalho em progresso (WIP), transparência e foco na entrega contínua de valor.</p>
            <div class="categories">
                <h3>Recursos populares:</h3>
                <ul>
                    <li><a href="https://www.digite.com/kanban/">Digite</a>: Ferramenta Kanban online para gerenciamento de projetos.</li>
                    <li><a href="https://leankit.com/">LeanKit</a>: Plataforma Kanban para visualizar e gerenciar o trabalho.</li>
                    <li><a href="https://www.atlassian.com/software/jira/kanban">Kanban no Jira</a>: Recursos  Kanban no software Jira da Atlassian.</li>
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
