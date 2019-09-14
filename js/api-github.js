async function createDivProjects() {
    const repos = await getRepos();
    const containerProjects = document.querySelector('#containerProjects');

    repos.map((repo) => {
        const newDivProject = document.createElement('div');
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

createDivProjects();