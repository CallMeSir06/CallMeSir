const projectGrid = document.querySelector('.project-grid');
const projectContainer = document.querySelector('.project-container');
const cardHeight = 400; //Original card height
const scaleFactor = 1.05; //Scaling factor

const projects = [
    {
        title: "Project 1 Title",
        description: "Short description of Project 1.",
        githubLink: "https://github.com/yourusername/project1",
        liveDemo: "https://yourdomain.com/project1"
    },
    {
        title: "Project 2 Title",
        description: "Short description of Project 2.",
        githubLink: "https://github.com/yourusername/project2",
        liveDemo: "https://yourdomain.com/project2"
    },
    // Add more projects here
];

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const title = project.title || "Untitled Project";
    const description = project.description || "No description available";
    const githubLink = project.githubLink || "#";
    const liveDemo = project.liveDemo || "#";

    card.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${githubLink}" target="_blank">GitHub</a>
        ${liveDemo !== "#" ? `<a href="${liveDemo}" target="_blank">Live Demo</a>` : ''}
    `;
    return card;
}


function calculateMinHeight() {
    const scaledHeight = cardHeight * scaleFactor;
    projectContainer.style.minHeight = `${scaledHeight}px`;
}


projects.forEach(project => {
    const card = createProjectCard(project);
    projectGrid.appendChild(card);
});
calculateMinHeight();