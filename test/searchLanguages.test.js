const searchLanguages = require('./searchLanguages');

test('searchLanguages retorna os idiomas correspondentes à busca', () => {
  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Typescript'];
  const searchTerm = 'Ja';
  const expectedLanguages = ['JavaScript', 'Java'];
  expect(searchLanguages(languages, searchTerm)).toEqual(expectedLanguages);
});

