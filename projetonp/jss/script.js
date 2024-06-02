function searchLanguage() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var languageDetails = document.getElementById("languageDetails");

    languageDetails.innerHTML = ""; // Limpa os detalhes anteriores

    switch(input) {
        case "python":
            languageDetails.innerHTML += `
                <div class="language-details">
                    <h2>Python</h2>
                    <p class="description">Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p>
                    <div class="categories">
                        <div>
                            <h3>Frameworks:</h3>
                            <ul>
                                <li><a href="https://www.djangoproject.com/">Django</a>: Framework web de alto nível para desenvolvimento rápido e limpo.</li>
                                <li><a href="https://flask.palletsprojects.com/">Flask</a>: Micro-framework web para Python baseado em Werkzeug e Jinja2.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Bibliotecas:</h3>
                            <ul>
                                <li><a href="https://numpy.org/">NumPy</a>: Biblioteca fundamental para computação científica com Python.</li>
                                <li><a href="https://pandas.pydata.org/">Pandas</a>: Biblioteca de código aberto que fornece estruturas de dados de alto desempenho e fáceis de usar.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>IDE's:</h3>
                            <ul>
                                <li><a href="https://www.jetbrains.com/pycharm/">PyCharm</a>: IDE Python para desenvolvimento profissional.</li>
                                <li><a href="https://jupyter.org/">Jupyter Notebook</a>: Ambiente de computação interativo baseado na web.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="../fotos/pythonlogo.png" alt="Python Logo" class="language-symbol">
            `;
            break;

        case "javascript":
            languageDetails.innerHTML += `
                <div class="language-details">
                    <h2>JavaScript</h2>
                    <p class="description">JavaScript é uma linguagem de programação interpretada, estruturada e de script com tipagem dinâmica fraca e multiparadigma.</p>
                    <div class="categories">
                        <div>
                            <h3>Frameworks:</h3>
                            <ul>
                                <li><a href="https://reactjs.org/">React</a>: Biblioteca JavaScript para criar interfaces de usuário.</li>
                                <li><a href="https://angular.io/">Angular</a>: Framework JavaScript mantido pela Google para desenvolvimento de aplicativos web.</li>
                                <li><a href="https://vuejs.org/">Vue.js</a>: Framework JavaScript progressivo para construir interfaces de usuário.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Bibliotecas:</h3>
                            <ul>
                                <li><a href="https://jquery.com/">jQuery</a>: Biblioteca JavaScript rápida, pequena e rica em recursos.</li>
                                <li><a href="https://lodash.com/">Lodash</a>: Utilitários JavaScript modernos e eficientes.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>IDE's:</h3>
                            <ul>
                                <li><a href="https://code.visualstudio.com/">Visual Studio Code</a>: Editor de código-fonte desenvolvido pela Microsoft.</li>
                                <li><a href="https://www.jetbrains.com/webstorm/">WebStorm</a>: IDE JavaScript e TypeScript inteligente.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="../fotos/jslogo.png" alt="JavaScript Logo" class="language-symbol">
            `;
            break;

        case "java":
            languageDetails.innerHTML += `
                <div class="language-details">
                    <h2>Java</h2>
                    <p class="description">Java é uma linguagem de programação orientada a objetos e que foi projetada para ter poucas dependências de implementação.</p>
                    <div class="categories">
                        <div>
                            <h3>Frameworks:</h3>
                            <ul>
                                <li><a href="https://spring.io/">Spring</a>: Framework de aplicação Java.</li>
                                <li><a href="https://hibernate.org/">Hibernate</a>: Framework de mapeamento objeto-relacional para Java.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Bibliotecas:</h3>
                            <ul>
                                <li><a href="https://commons.apache.org/">Apache Commons</a>: Conjunto de bibliotecas para Java.</li>
                                <li><a href="https://sites.google.com/gson/">Gson</a>: Biblioteca Java para serialização e desserialização de objetos Java para JSON.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>IDE's:</h3>
                            <ul>
                                <li><a href="https://www.eclipse.org/">Eclipse</a>: IDE Java gratuita e de código aberto.</li>
                                <li><a href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a>: IDE Java poderosa para desenvolvedores profissionais.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="../fotos/javalogo.png" alt="Java Logo" class="language-symbol">
            `;
            break;

        case "c#":
            languageDetails.innerHTML += `
                <div class="language-details">
                    <h2>C#</h2>
                    <p class="description">C# é uma linguagem de programação moderna, orientada a objetos, e desenvolvida pela Microsoft como parte da plataforma .NET.</p>
                    <div class="categories">
                        <div>
                            <h3>Frameworks:</h3>
                            <ul>
                                <li><a href="https://github.com/dotnet/aspnetcore">ASP.NET Core</a>: Framework de desenvolvimento web para C#.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Bibliotecas:</h3>
                            <ul>
                                <li><a href="https://www.nuget.org/">NuGet</a>: Gerenciador de pacotes para a plataforma .NET.</li>
                                <li><a href="https://www.mono-project.com/">Mono</a>: Implementação de código aberto da plataforma .NET.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>IDE's:</h3>
                            <ul>
                                <li><a href="https://visualstudio.microsoft.com/">Visual Studio</a>: IDE da Microsoft para desenvolvimento em C# e outras linguagens.</li>
                                <li><a href="https://www.jetbrains.com/rider/">Rider</a>: IDE multiplataforma da JetBrains para desenvolvimento em .NET.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="../fotos/csharplogo.png" alt="Csharp Logo" class="language-symbol">
            `;
            break;

        case "ruby":
            languageDetails.innerHTML += `
                <div class="language-details">
                    <h2>Ruby</h2>
                    <p class="description">Ruby é uma linguagem de programação interpretada de alto nível, puramente orientada a objetos e de fácil leitura e escrita.</p>
                    <div class="categories">
                        <div>
                            <h3>Frameworks:</h3>
                            <ul>
                                <li><a href="https://rubyonrails.org/">Ruby on Rails</a>: Framework web de código aberto escrito em Ruby.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Bibliotecas:</h3>
                            <ul>
                                <li><a href="https://rspec.info/">RSpec</a>: Estrutura de teste para Ruby.</li>
                                <li><a href="https://bundler.io/">Bundler</a>: Gerenciador de dependências para Ruby.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>IDE's:</h3>
                            <ul>
                                <li><a href="https://www.jetbrains.com/ruby/">RubyMine</a>: IDE Ruby e Rails para desenvolvimento profissional.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="../fotos/rubylogo.png" alt="Ruby Logo" class="language-symbol">
            `;
            break;

        default:
            languageDetails.innerHTML += "<p>Linguagem não encontrada.</p>";
    }
}
