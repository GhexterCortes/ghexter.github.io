import type { HTMLOptions } from '@discord-components/markdown';

export const email = 'ghextershumies@gmail.com';
export const discordId = '749120018771345488';

export const githubUrl = 'https://github.com/NotGhex';
export const githubAvatarUrl = 'https://avatars.githubusercontent.com/u/69035887?v=4';
export const discordProfileUrl = `https://discordapp.com/users/${discordId}`;

export const aboutMeDescription = [
    `Hello, I am Ghex. I like nerdy things and cats. I'm interested in UI Design, NodeJs, Frontend Js, Java, Kotlin, and Rust. I started my interest in computers when I was 11 years old and wrote my very first projects on 2019.`,
    ``,
    `> My goal is to make what my brain comes up with.`,
    `> *- Ghex*`,
    ``,
    `||I'm not 11 years old >:(||`
].join('\n');

export const discordMarkdownOptions: HTMLOptions = {
    escapeHTML: false,
    embed: true,
    cssModuleNames: {},
    discordCallback: {
        channel: ({ id }) => `<span class="discord-mention">#${id}</span>`,
        role: ({ id }) => `<span class="discord-mention">@${id}</span>`,
        user: ({ id }) => `<span class="discord-mention">@${id === discordId ? 'Cat++' : id}</span>`,
        here: () => `<span class="discord-mention">@here</span>`,
        everyone: () => `<span class="discord-mention">@everyone</span>`,
    }
};

export const skills = [
    {
        name: "Typescript",
        width: 90,
        color: "#fff",
        background: "rgb(49, 120, 198)",
        icon: "bxl:typescript"
    },
    {
        name: "NodeJs",
        width: 90,
        color: "#fff",
        background: "rgb(83, 158, 67)",
        icon: "ion:logo-nodejs"
    },
    {
        name: "Sass",
        width: 60,
        color: "#000",
        background: "rgb(205, 103, 153)",
        icon: "la:sass"
    },
    {
        name: "Svelte",
        width: 70,
        color: "#fff",
        background: "rgb(255, 62, 0)",
        icon: "carbon:logo-svelte"
    },
    {
        name: "Vanilla Js",
        width: 90,
        color: "#000",
        background: "rgb(247, 223, 30)",
        icon: "ion:logo-javascript"
    },
    {
        name: "LOLCODE",
        width: 50,
        color: "#fff",
        background: "rgb(141, 39, 1)",
        icon: "file-icons:lolcode"
    }
];