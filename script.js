document.addEventListener('DOMContentLoaded', () => {
    const viewProjectButtons = document.querySelectorAll('.view-projects-btn');
    const modal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const projectList = document.getElementById('project-list');

    viewProjectButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const person = event.target.dataset.person;
            modalTitle.textContent = `Project ${person}`;
            projectList.innerHTML = ''; // Clear previous projects

            const projects = projectsData[person];
            if (projects) {
                projects.forEach(project => {
                    const projectItem = document.createElement('div');
                    projectItem.classList.add('project-item');
                    projectItem.innerHTML = `
                        <img src="${project.image}" alt="${project.name}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">
                        <h4>${project.name}</h4>
                        <a href="${project.path}" target="_blank" rel="noopener noreferrer">Перейти</a>
                    `;
                    projectList.appendChild(projectItem);
                });
            } else {
                projectList.innerHTML = '<p>No projects</p>';
            }

            modal.style.display = 'flex'; // Show the modal
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide modal if clicked outside
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});
