module.exports = {
  branches: ["main"],
  repositoryUrl: "https://github.com/Kevin-Heidorn/TRABALHO-A3",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/github"
  ]
};
