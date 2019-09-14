async function getRepos() {
    const repos = await fetch('https://api.github.com/users/luizfoli/repos')
        .then((resp) => resp.json());

    console.log(repos);
}

getRepos();
