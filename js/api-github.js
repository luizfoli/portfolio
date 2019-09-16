async function constructMyProjectsView() {

    const repos = await getRepos();
    const containerProjects = document.querySelector('#containerProjects');

    repos.map((repo) => createDivProject(repo, containerProjects));
}

async function getRepos() {
    const repos = await fetch('https://api.github.com/users/luizfoli/repos')
        .then((resp) => resp.json());

    // Filtragem para mostrar apenas os meus projetos.
    return repos.filter((repo) => (!repo.fork));
}

function createDivProject(repo, containerProjects) {

    const newDivProject = document.createElement('div');

    newDivProject.appendChild(createHeader(repo));
    newDivProject.appendChild(createArticle(repo));

    newDivProject.classList.add('project');
    containerProjects.appendChild(newDivProject);
}

function createHeader(repo) {

    const {
        name,
        html_url
    } = repo;

    const newHeader = document.createElement('header');
    const newLinkHeader = document.createElement('a');
z
    newLinkHeader.textContent = name;
    newLinkHeader.target = '_blank';
    newLinkHeader.href = html_url;

    newHeader.appendChild(newLinkHeader);
    return newHeader;

}

function createArticle(repo) {

    const {
        description,
        language
    } = repo;

    const newArticle = document.createElement('article');
    const repoDescription = document.createElement('p');
    repoDescription.textContent = description;
    const repoLanguage = document.createElement('p');
    repoLanguage.textContent = language;

    newArticle.appendChild(repoDescription);
    newArticle.appendChild(repoLanguage);

    return newArticle;
}

constructMyProjectsView();