import type { HTMLOptions } from '@discord-components/markdown';

export const email = 'ghextershumies@gmail.com';
export const discordId = '749120018771345488';
export const discordTag = 'Cat++#0999';

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
        width: 80,
        color: "#fff",
        background: "rgb(49, 120, 198)",
        icon: "bxl:typescript"
    },
    {
        name: "NodeJs",
        width: 75,
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

export let projects = [
    {
        title: 'Reciple',
        description: 'Reciple is a simple Discord.js handler that just works!',
        image: 'https://i.imgur.com/3SksGEZ.png',
        color: '#5865f2',
        links: [
            {
                icon: 'bi:github',
                url: 'https://github.com/FalloutStudios/Reciple'
            },
            {
                icon: 'gg:npm',
                url: 'https://www.npmjs.com/package/reciple'
            },
            {
                icon: 'icon-park-solid:doc-search',
                url: 'https://reciple.js.org'
            }
        ]
    },
    {
        title: 'Djs Pagination',
        description: 'A reaction and button pagination librarry for Discord.js v14.',
        image: 'https://i.imgur.com/NiMNxhM.png',
        color: '#3f7ff2',
        links: [
            {
                icon: 'bi:github',
                url: 'https://github.com/FalloutStudios/djs/tree/main/packages/pagination'
            },
            {
                icon: 'gg:npm',
                url: 'https://www.npmjs.com/package/@falloutstudios/djs-pagination'
            },
            {
                icon: 'icon-park-solid:doc-search',
                url: 'https://falloutstudios.github.io/djs/modules/_falloutstudios_djs_pagination.html'
            }
        ]
    },
    {
        title: 'Eris Collectors',
        description: 'A simple package that collects eris message, interaction, or reactions.',
        image: 'https://i.imgur.com/zrLR1d4.png',
        color: '#975df1',
        links: [
            {
                icon: 'bi:github',
                url: 'https://github.com/NotGhex/eris-collectors'
            },
            {
                icon: 'gg:npm',
                url: 'https://www.npmjs.com/package/eris-collectors'
            }
        ]
    },
    {
        title: 'Djs Scam Links',
        description: 'An anti scam links library for any project specially discord related projects. Scam domains are provided by nikolaischunk on Github',
        image: 'https://i.imgur.com/a7WVNSV.png',
        color: '#f8494a',
        links: [
            {
                icon: 'bi:github',
                url: 'https://github.com/FalloutStudios/djs/tree/main/packages/scam-links'
            },
            {
                icon: 'gg:npm',
                url: 'https://www.npmjs.com/package/@falloutstudios/djs-scam-links'
            },
            {
                icon: 'icon-park-solid:doc-search',
                url: 'https://falloutstudios.github.io/djs/modules/_falloutstudios_djs_scam_links.html'
            }
        ]
    },
    {
        title: 'Share.io',
        description: 'A simple file sharing cli tool made with socket.io.',
        image: 'https://i.imgur.com/8MeyYSa.png',
        color: '#3e97f1',
        links: [
            {
                icon: 'bi:github',
                url: 'https://github.com/NotGhex/shareio'
            },
            {
                icon: 'gg:npm',
                url: 'https://www.npmjs.com/package/@shareio/cli'
            }
        ]
    },
    {
        title: 'Fallout Utility',
        description: 'A collection of useful utility functions, classes, and types used by FalloutStudios projects.',
        image: 'http://i.imgur.com/aFbrZtU.png',
        color: '#dd3a36',
        links: [
            {
                icon: 'bi:github',
                url: 'https://github.com/FalloutStudios/fallout-utility'
            },
            {
                icon: 'gg:npm',
                url: 'https://www.npmjs.com/package/fallout-utility'
            }
        ]
    },
    {
        title: 'Kirin',
        description: 'A Discord bot that lets you start your Minecraft servers in Discord',
        image: 'https://i.imgur.com/QN731RF.png',
        color: '#3f2ce6',
        links: [
            {
                icon: 'bi:github',
                url: 'https://github.com/FalloutStudios/Kirin'
            },
            {
                icon: 'fa6-solid:faucet',
                url: 'https://www.spigotmc.org/resources/kirin.100456/'
            }
        ]
    }
];
