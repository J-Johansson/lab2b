async function GetRepos() {
    let response = await fetch('https://api.github.com/users/J-Johansson/repos'); 
    let data = await response.json();
    console.log(data)

    document.querySelector(".first-project-name").innerHTML = data[0].name;
    let a = document.querySelector(".first-project-name");
    a.setAttribute("href", data[3].html_url);
    document.querySelector(".first-project-desc").innerHTML = data[0].description;

    document.querySelector(".second-project-name").innerHTML = data[1].name;
    a = document.querySelector(".second-project-name");
    a.setAttribute("href", data[3].html_url);
    document.querySelector(".second-project-desc").innerHTML = data[1].description;
    };
    GetRepos();