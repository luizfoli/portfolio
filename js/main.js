/**
 * Medias sociais
 */

const urlGithub = 'https://github.com/luizfoli';
const urlLinkedin = 'https://www.linkedin.com/in/luizfoli/';

document.querySelector('#btnGithub').addEventListener('click', () => {
    window.open(urlGithub, '_blank').focus();
});

document.querySelector('#btnLinkedin').addEventListener('click', () => {
    window.open(urlLinkedin, '_blank').focus();
});

