const projects = [
                ["Landing Page", "A Music Equipment Store Landing Page built using HTML and vanilla CSS and JS", "./projects-imgs/landing-page.png", "landing-page"],
                ["Calculator", "A basic calculator built using vanilla JS with nice GUI and keyboard support", "./projects-imgs/calculator.png", "calculator"],
                ["Rock Paper Scissors", "Implementation of classic RPS Game using vanilla JS", "./projects-imgs/RPS.png", "Rock Paper Scissors"],
                ["Tribute Page", "Tribute Page to Chritian Bale (my favourite actor)", "./projects-img/tribute-page.png", "Tribute Page"],
                ["coffeBlack Survey Form", "A simple survey form showcasing my HTML Forms knowledge", "./projects-img/survey-form.png", "Survey Form"],
                ["Snake Game", "Implementation of classic Snake game using Java Swing" , "./projects-img/snake.png", "Snake Game"],
                ["Technical Documentation", "A responsive technical document", "./projects-img/technical-doc.png", "Technical Doc"],
                ["Space Shooter Game", "A 2D top-down shooter game built using Java Swing" , "./projects-img/space-shooter.png", "Space Shooter Game"],
                ["Movie Browser", "A Full Stack Movie Browser App built using Java Swing and mySQL" , "./projects-img/space-shooter.png", "Movie Browser"]
            ]

function createProjectCards(numOfCards, projects) {
    const cardBox = document.querySelector("#project-cards");

    for (let i = 0; i < numOfCards; i++) {
        const card = document.createElement("div");
        const card_img = document.createElement("img");
        const card_title = document.createElement("p");
        const card_desc = document.createElement("p");

        card_title.textContent = projects[i][0];
        card_desc.textContent = projects[i][1];

        card_title.classList.add("card-title");

        card_img.setAttribute("src", projects[i][2]);
        card_img.setAttribute("alt", projects[i][3]);
        card.appendChild(card_img);

        card.classList.add("card");

        card.addEventListener("mouseover", () => {
            card.removeChild(card.firstChild);
            card.classList.add("hovered-card");
            card.appendChild(card_title);
            card.appendChild(card_desc);

        });

        card.addEventListener("mouseout", () => {
            card.removeChild(card_title);
            card.removeChild(card_desc);
            card.classList.remove("hovered-card");
            card.appendChild(card_img);
        });
  

        cardBox.appendChild(card);
    }
}

createProjectCards(3, projects);