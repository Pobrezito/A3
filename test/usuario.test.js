const { criarUsuario } = require('./server.js');

describe('criarUsuario', () => {
  test('deve retornar um objeto de usuário com o nome e id fornecidos no corpo da requisição', () => {
    // Dados de exemplo para o corpo da requisição
    const body = { name: 'Gabriel' };

    // Chama a função criarUsuario com os dados de exemplo
    const resultado = criarUsuario(body);

    // Verifica se o resultado é um objeto com as propriedades nome e id
    expect(resultado).toEqual(expect.objectContaining({
      nome: 'John Doe',
      id: expect.any(Number),
    }));
  });
});
