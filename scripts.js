const projectGrid = document.querySelector('.project-grid');

const projects = [
    // Add your project data here.  Each object represents a project.
    {
        title: "Project 1 Title",
        description: "Short description of Project 1.",
        githubLink: "https://github.com/yourusername/project1",          // Replace with your GitHub links
        liveDemo: "https://yourdomain.com/project1"       // Replace with your demo link (optional)
        // Add other properties as needed (image, etc.)
    },
    {
        title: "Project 2 Title",
        description: "Short description of Project 2.",
        githubLink: "https://github.com/yourusername/project2",
        liveDemo: "https://yourdomain.com/project2"           // Replace with your demo link (optional)
        // Add other properties as needed (image, etc.)
    }
    //Add more projects here.
];


function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.githubLink}" target="_blank">GitHub</a>
        ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank">Live Demo</a>` : ''}
    `;
    return card;
}

projects.forEach(project => {
    const card = createProjectCard(project);
    projectGrid.appendChild(card);
});