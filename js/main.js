/**
 * Preenchimento das variáveis usadas no front.
 * @author Luiz Oliveira
 * @since 12/09/2019
 */

const mainTitle = document.querySelector('#mainTitle');
mainTitle.textContent = "Hi, I'm Luiz Oliveira"

const subTitle = document.querySelector('#subTitle');
subTitle.textContent = 'Software Engineer | Fullstack Developer';

const descAboutMe = ['I am passionate about personal development and technology.',
    'I work with full-stack development with a focus on Java and Javascript platforms.'
];

/**
 * Lógica responsável por adicionar todos os 'p' de descrição.
 */

const descCointainer = document.querySelector('#containerDesc');
descAboutMe.map((desc) => {
    const p = document.createElement('p');
    p.classList.add('desc-about-me');
    p.textContent = desc;
    descCointainer.appendChild(p);
});

const titleDinamic = document.querySelector('#titleDinamic');
titleDinamic.textContent = 'My Projects';

/**
 * Medias sociais
 */

const urlGithub = 'https://github.com/luizfoli';
const urlLinkedin = 'https://www.linkedin.com/in/luizfoli/';

document.querySelector('#btnGithub').addEventListener('click',() => {
    window.open(urlGithub, '_blank').focus();
});

document.querySelector('#btnLinkedin').addEventListener('click',() => {
    window.open(urlLinkedin, '_blank').focus();
});