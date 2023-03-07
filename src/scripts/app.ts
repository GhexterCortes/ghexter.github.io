import type { HTMLOptions } from '@discord-components/markdown';

export const email = 'ghextershumies@gmail.com';
export const discordId = '749120018771345488';

export const githubUrl = 'https://github.com/NotGhex';
export const githubProfileUrl = 'https://avatars.githubusercontent.com/u/69035887?v=4';
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