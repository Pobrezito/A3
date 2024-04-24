import searchLanguage from './searchLanguage'; // Se estiver usando import/export

test('searchLanguage retorna os idiomas correspondentes à busca', () => {
  const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Typescript'];
  const searchTerm = 'Ja';
  const expectedLanguage = ['JavaScript', 'Java'];
  expect(searchLanguage(languages, searchTerm)).toEqual(expectedLanguage);
});
