async function createDivProject() {
    const repos = await getRepos();
    const containerProjects = document.querySelector('#containerProjects');

    repos.map((repo) => {

        const { name, html_url, description, language } = repo;

        const newDivProject = document.createElement('div');
        const newHeader = document.createElement('header');
        const newLinkHeader = document.createElement('a');
        const newArticle = document.createElement('article');

        const repoDescription = document.createElement('p');
        repoDescription.textContent = description;

        const repoLanguage = document.createElement('p');
        repoLanguage.textContent = language;

        newArticle.appendChild(repoDescription);
        newArticle.appendChild(repoLanguage);

        newLinkHeader.textContent = name;
        newLinkHeader.target = '_blank';
        newLinkHeader.href = html_url;

        newHeader.appendChild(newLinkHeader);
        newDivProject.appendChild(newHeader);
        newDivProject.appendChild(newArticle);


        newDivProject.classList.add('project');
        containerProjects.appendChild(newDivProject);
    })
}

async function getRepos() {
    const repos = await fetch('https://api.github.com/users/luizfoli/repos')
        .then((resp) => resp.json());

    // Filtragem para mostrar apenas os meus projetos.
    return repos.filter((repo) => (!repo.fork));
}

createDivProject();