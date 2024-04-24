import { JSDOM } from 'jsdom';
import { searchLanguage } from './pesquisa';

// Configurar o ambiente do DOM para os testes
const dom = new JSDOM('<!DOCTYPE html><div id="languageDetails"></div>');
global.document = dom.window.document;

test('searchLanguage retorna os detalhes da linguagem correspondente ao termo de pesquisa', () => {
  const searchTerm = 'JavaScript';
  const expectedDetails = `
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
  expect(searchLanguage(searchTerm)).toEqual(expectedDetails);
});
