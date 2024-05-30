const projects = [
    ["Landing Page", "A Music Equipment Store Landing Page built using HTML and vanilla CSS and JS", "./projects-imgs/landing-page.png", "landing-page", "https://github.com/Ash4477/Product-Landing-Page-Project", "https://ash4477.github.io/Product-Landing-Page-Project/"],
    ["Calculator", "A basic calculator built using vanilla JS with nice GUI and keyboard support", "./projects-imgs/calculator.png", "calculator", "https://github.com/Ash4477/odin-Calculator", "https://ash4477.github.io/odin-Calculator/"],
    ["Rock Paper Scissors", "Implementation of classic RPS Game using vanilla JS", "./projects-imgs/RPS.png", "Rock Paper Scissors", "https://github.com/Ash4477/odin-Rock-Paper-Scissors", "https://ash4477.github.io/odin-Rock-Paper-Scissors/"],
    ["Tribute Page", "Tribute Page to Chritian Bale (my favourite actor)", "./projects-imgs/tribute-page.png", "Tribute Page", "https://github.com/Ash4477/Christian-Bale-Tribute-Page-Project", "https://ash4477.github.io/Christian-Bale-Tribute-Page-Project/"],
    ["coffeBlack Survey Form", "A simple survey form showcasing my HTML Forms knowledge", "./projects-imgs/survey-form.png", "Survey Form", "https://github.com/Ash4477/Survey-Form-Project", "https://ash4477.github.io/Survey-Form-Project/"],
    ["Snake Game", "Implementation of classic Snake game using Java Swing" , "../projects-imgs/snake.png", "Snake Game", "https://github.com/Ash4477/Snake-Game-Java", null],
    ["Technical Documentation", "A responsive technical document", "./projects-imgs/technical-doc.png", "Technical Doc", "https://github.com/Ash4477/Technical-Documentation-Project", "https://ash4477.github.io/Technical-Documentation-Project/"],
    ["Space Shooter Game", "A 2D top-down shooter game built using Java Swing" , "./projects-imgs/space-shooter.png", "Space Shooter Game", "https://github.com/Ash4477/Space-Shooter-Game-Project", null],
    ["Movie Browser", "A Full Stack Movie Browser App built using Java Swing and mySQL" , "./projects-imgs/movie-browser.png", "Movie Browser", "https://github.com/Ash4477/Movie-Browser-Java", null]
]

function createProjectCards(numOfCards, projects) {
    const cardBox = document.querySelector("#project-cards");

    for (let i = 0; i < numOfCards; i++) {
    const card = document.createElement("div");
    const card_img = document.createElement("img");

    const innerDiv = document.createElement("div");
    const card_title = document.createElement("p");
    const card_desc = document.createElement("p");
    
    const iconSpan = document.createElement("span");
    const repo_link = document.createElement("a");
    const proj_link = document.createElement("a");

    iconSpan.classList.add("icon-span");

    repo_link.innerHTML = '<i class="fa-brands fa-github fa-2xl"></i>';
    repo_link.setAttribute("href", projects[i][4]);
    repo_link.setAttribute("target", "_blank");
    repo_link.setAttribute("rel", "noopener noreferrer");
    iconSpan.appendChild(repo_link);

    if (projects[i][5] !== null) {
        proj_link.innerHTML = '<i class="fa-solid fa-play fa-2xl"></i>';
        proj_link.setAttribute("href", projects[i][5]);
        proj_link.setAttribute("target", "_blank");
        proj_link.setAttribute("rel", "noopener noreferrer");
        iconSpan.appendChild(proj_link);
    }


    card_img.setAttribute("src", projects[i][2]);
    card_img.setAttribute("alt", projects[i][3]);
    card.appendChild(card_img);

    card_title.textContent = projects[i][0];
    card_desc.textContent = projects[i][1];
    card_title.classList.add("card-title");

    innerDiv.appendChild(card_title);
    innerDiv.appendChild(card_desc);
    innerDiv.appendChild(iconSpan);
    innerDiv.classList.add("card-content");
    card.appendChild(innerDiv);


    card.classList.add("card");

    cardBox.appendChild(card);
}
}

createProjectCards(projects.length, projects);




