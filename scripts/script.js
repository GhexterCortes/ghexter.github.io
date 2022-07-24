document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.document').classList.remove('unloaded');
        document.querySelector('.loader').remove();
    }, 500);
});

let formatTextElements = document.querySelectorAll('.format-text');
const markdownConverter = new showdown.Converter();

let aboutme, emojis, projects;

(async () => {
    aboutme = await getURL('https://raw.githubusercontent.com/GhexterCortes/ghextercortes.github.io/main/data/aboutme.json');
    emojis = await getURL('https://raw.githubusercontent.com/GhexterCortes/ghextercortes.github.io/main/data/emojis.json');
    projects = await getURL('https://raw.githubusercontent.com/GhexterCortes/ghextercortes.github.io/main/data/projects.json');

    const emojiElements = document.querySelectorAll('.addemoji');
    emojiElements.forEach((e) => {
        replaceEmoji(e);
        e.addEventListener('keyup', () => replaceEmoji(e));
    });

    parseAboutMe();
    parseProjects();
})().catch(err => console.error(err));

formatTextElements.forEach(toMd => {
    toMd.innerHTML = markdownConverter.makeHtml(toMd.innerText);
});

async function getURL (url) {
    return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = () => res(xhr.response);
        xhr.onerror = () => rej(xhr.statusText);
        xhr.send(); 
    });
}

function replaceEmoji(element) {
    let content = element.innerHTML;

    for (const emoji of emojis) {
        content = markdownConverter.makeHtml(content).replace(`:${emoji.name}:`, `<img src="${emoji.url}" alt="${emoji.name}" title="${emoji.name}" class="emoji">`);
    }

    if (element.innerHTML !== content) {
        element.innerHTML = content;
        return true;
    }

    return false;
}

function parseAboutMe() {
    const aboutmeElements = document.querySelectorAll('.aboutme');
    aboutmeElements.forEach((e) => {
        const key = e.getAttribute('data-key');

        switch (key) {
            case 'description':
                e.innerHTML = aboutme.description ?? '';
                replaceEmoji(e);
                break;
            case 'links':
                for (const name in aboutme.links) {
                    const link = aboutme.links[name];
                    
                    switch (name) {
                        case 'github':
                            e.innerHTML += `<a href="${link}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>\n`;
                            break;
                        case 'npm':
                            e.innerHTML += `<a href="${link}" target="_blank" rel="noopener noreferrer"><i class="fab fa-npm"></i></a>\n`;
                            break;
                        case 'discord':
                            e.innerHTML += `<a href="${link}" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord"></i></a>\n`;
                            break;
                        case 'twitter':
                            e.innerHTML += `<a href="${link}" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>\n`;
                            break;
                        case 'instagram':
                            e.innerHTML += `<a href="${link}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>\n`;
                            break;
                        default:
                            e.innerHTML += `<a href="${link}" target="_blank" rel="noopener noreferrer"><i class="fa fa-poll-h"></i></a>\n`;
                    }
                }
                break;
        }
    });
}

function parseProjects() {
    const projectsCards = document.querySelector('#projects .project-cards');

    projects.forEach(project => {
        const init = new Project();

        init.title = project.deprecated ? `${project.title} :deprecated:` : project.title;
        init.description = project.description;
        init.icon = project.icon;
        init.links = project.links;
        init.theme = project.theme;

        init.create(projectsCards);
    });
}

class Project {
    constructor() {
        this.icon = null;
        this.theme = '#4232a8';
        this.title = 'Project';
        this.description = 'Lorem ipsum dolor sit amet lore';
        this.links = {};
    }

    create(elem) {
        // @ts-check
        const element = document.createElement('div');
        const card = document.createElement('div');

        card.classList.add('card');
        element.classList.add('project-card');
        element.appendChild(card);

        const cardDecoration = document.createElement('div');
        const cardBackground = document.createElement('div');

        if (this.icon) {
            const cardIcon = document.createElement('div');
            const cardIconImg = document.createElement('img');
            cardIconImg.src = this.icon;
            cardIcon.style.backgroundColor = this.theme ?? '#fff';
            cardIcon.classList.add('card-icon');
            cardIcon.appendChild(cardIconImg);
            cardDecoration.appendChild(cardIcon);
        }

        cardDecoration.classList.add('card-decoration');
        cardBackground.classList.add('card-background');
        cardBackground.style.backgroundColor = this.theme ?? '#fff';
        cardDecoration.appendChild(cardBackground);
        card.appendChild(cardDecoration);

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const cardTitle = document.createElement('h1');
        cardTitle.classList.add('card-title', 'format-text')
        cardTitle.style.color = this.theme ?? '#fff';
        cardTitle.innerText = this.title ?? '';
        replaceEmoji(cardTitle);

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-description', 'format-text');
        cardDescription.innerText = this.description;
        replaceEmoji(cardDescription);

        const cardLinks = document.createElement('div');
        cardLinks.classList.add('card-links');

        for (const name in this.links) {
            const link = this.links[name];
            switch (name) {
                case 'github':
                    cardLinks.innerHTML += `<a href="${link}" style="color: ${this.theme ?? '#fff'}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>\n`;
                    break;
                case 'npm':
                    cardLinks.innerHTML += `<a href="${link}" style="color: ${this.theme ?? '#fff'}" target="_blank" rel="noopener noreferrer"><i class="fab fa-npm"></i></a>\n`;
                    break;
                case 'discord':
                    cardLinks.innerHTML += `<a href="${link}" style="color: ${this.theme ?? '#fff'}" target="_blank" rel="noopener noreferrer"><i class="fab fa-discord"></i></a>\n`;
                    break;
                case 'twitter':
                    cardLinks.innerHTML += `<a href="${link}" style="color: ${this.theme ?? '#fff'}" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>\n`;
                    break;
                case 'instagram':
                    cardLinks.innerHTML += `<a href="${link}" style="color: ${this.theme ?? '#fff'}" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>\n`;
                    break;
                default:
                    cardLinks.innerHTML += `<a href="${link}" style="color: ${this.theme ?? '#fff'}" target="_blank" rel="noopener noreferrer"><i class="fa fa-poll-h"></i></a>\n`;
            }
        }

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardDescription);
        cardContent.appendChild(cardLinks);
        card.appendChild(cardContent);

        elem.appendChild(element);

        formatTextElements.forEach(toMd => {
            toMd.innerHTML = markdownConverter.makeHtml(toMd.innerText);
        });
    }
}
