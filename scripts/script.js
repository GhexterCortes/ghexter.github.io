document.addEventListener('DOMContentLoaded', () => document.querySelector('.document').classList.add('ready'));

const formatTextElements = document.querySelectorAll('.format-text');
const markdownConverter = new showdown.Converter();

let aboutme, emojis, projects;

(async () => {
    aboutme = await getURL('/data/aboutme.json');
    emojis = await getURL('/data/emojis.json');
    projects = await getURL('/data/projects.json');

    const emojiElements = document.querySelectorAll('.addemoji');
    emojiElements.forEach((e) => {
        replaceEmoji(e);
        e.addEventListener('keyup', () => replaceEmoji(e));
    });

    parseAboutMe();
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

function setCaret(elm, pos) {
    let range = document.createRange()
    let sel = window.getSelection()
    
    range.setStart(el.childNodes[2], pos)
    range.collapse(true)
    
    sel.removeAllRanges()
    sel.addRange(range)
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

function setProjects() {}

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
