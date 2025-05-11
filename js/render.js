import { projects } from "./data/projects.js";
import { techStacks } from "./data/tech-stacks.js";
import { tools } from "./data/tools.js";

function renderNavbar() {
  const navItems = [
    { text: "Home", href: "index.html" },
    { text: "About", href: "about.html" },
    { text: "Projects", href: "projects.html" },
    { text: "Contact", href: "contact.html" },
  ];

  const navbarPlaceholder = document.getElementById("navbar-container");
  if (!navbarPlaceholder) {
    console.error("Navbar placeholder not found!");
    return;
  }

  const navElement = document.createElement("nav");
  navElement.id = "navbar";

  const ulElement = document.createElement("ul");

  const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Get current page filename

  navItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.classList.add("nav-item");

    const aElement = document.createElement("a");
    aElement.href = item.href;
    aElement.textContent = item.text;

    if (item.href === currentPage) {
      liElement.classList.add("active");
    }

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  navElement.appendChild(ulElement);
  navbarPlaceholder.appendChild(navElement); 
}

function renderProject(project) {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project-item");

  const title = document.createElement("h3");
  title.textContent = project.title;
  projectElement.appendChild(title);

  const description = document.createElement("p");
  description.textContent = project.description;
  projectElement.appendChild(description);

  const links = document.createElement("div");
  links.classList.add("project-links");

  if (project.demoLink) {
    const demoLink = document.createElement("a");
    demoLink.href = project.demoLink;
    demoLink.textContent = "Live Demo";
    demoLink.target = "_blank"; 
    links.appendChild(demoLink);
  }

  if (project.githubLink) {
    const githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.textContent = "GitHub Repo";
    githubLink.target = "_blank"; 
    links.appendChild(githubLink);
  }

  projectElement.appendChild(links);

  return projectElement;
}

function renderToTopButton() {
  const toTopDiv = document.createElement("div");
  toTopDiv.id = "to-top";

  const link = document.createElement("a");
  link.href = "#top"; 

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "16");
  svg.setAttribute("height", "16");
  svg.setAttribute("fill", "currentColor");
  svg.classList.add("bi", "bi-arrow-up");
  svg.setAttribute("viewBox", "0 0 16 16");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute(
    "d",
    "M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
  );

  svg.appendChild(path);

  const span = document.createElement("span");
  span.id = "to-top-text";
  span.textContent = "Back to top";

  link.appendChild(svg);
  link.appendChild(span);
  toTopDiv.appendChild(link);

  document.body.appendChild(toTopDiv); 
}

function renderTechStacks() {
  const skillsTd = document.getElementById("skills-td");
  if (!skillsTd) {
    
    return;
  }

  skillsTd.innerHTML = ""; 

  if (techStacks && techStacks.length > 0) {
    techStacks.forEach((stack) => {
      const img = document.createElement("img");
      img.src = stack.icon;
      img.alt = stack.name;
      img.title = stack.name; 
      
      skillsTd.appendChild(img);
    });
  } else {
    skillsTd.textContent = "No skills listed."; 
  }
}


function renderTools() {
  const toolsTd = document.getElementById("tools-td");
  if (!toolsTd) {
    return;
  }

  toolsTd.innerHTML = ""; 
  if (tools && tools.length > 0) {
    tools.forEach((tool) => {
      const img = document.createElement("img");
      img.src = tool.icon;
      img.alt = tool.name;
      img.title = tool.name; 
      toolsTd.appendChild(img);
    });
  } else {
    toolsTd.textContent = "No tools listed."; 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar(); 
  renderToTopButton(); 

  
  const projectsListContainer = document.getElementById("projects-list");
  if (projectsListContainer) {
 
    if (projects && projects.length > 0) {
      projects.forEach((project) => {
        const projectNode = renderProject(project);
        projectsListContainer.appendChild(projectNode);
      });
    } else {
      projectsListContainer.textContent = "No projects to display yet.";
    }
  } else if (window.location.pathname.endsWith("projects.html")) {
    
    console.error("Project list container not found on projects page!");
  }

  renderTechStacks();
  renderTools();
});
