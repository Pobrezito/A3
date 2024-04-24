const searchLanguage = require('./searchLanguage');

test('searchLanguage retorna os idiomas correspondentes à busca', () => {
  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Typescript'];
  const searchTerm = 'Ja';
  const expectedLanguage = ['JavaScript', 'Java'];
  expect(searchLanguage(language, searchTerm)).toEqual(expectedLanguage);
});

