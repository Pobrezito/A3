 function searchLanguages(languages, searchTerm) {
  return languages.filter(language =>
    language.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

module.exports = searchLanguages;

