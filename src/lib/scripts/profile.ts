export const displayName = 'Cat++';
export const gitHubUsername = 'NotGhex';
export const discordUsername = 'catplvsplus';
export const discordUserId = '749120018771345488';

export const discordProfileURL = `https://discordapp.com/users/${discordUserId}`;
export const gitHubProfileURL = `https://github.com/${gitHubUsername}`;
export const instagramProfileURL = `https://instagram.com/${discordUsername}`;
export const threadsProfileURL = `https://threads.net/@${discordUsername}`;

export interface ProfileData {
    name: string;
    username: string;
    avatar: string;
    banner?: string;
    pronouns?: string[];
    links?: {
        name: string;
        icon: string;
        url: string;
    }[];
};

export const PROFILE_DATA: ProfileData = {
    name: displayName,
    username: discordUsername,
    avatar: 'https://avatars.githubusercontent.com/u/69035887?v=4',
    banner: 'https://raw.githubusercontent.com/fast-average-color/fast-average-color/master/img/title.png',
    pronouns: ['He', 'They'],
    links: [
        {
            name: 'GitHub',
            icon: 'codicon:github-inverted',
            url: gitHubProfileURL
        },
        {
            name: 'Discord',
            icon: 'mdi:discord',
            url: discordProfileURL
        },
        {
            name: 'Instagram',
            icon: 'mdi:instagram',
            url: instagramProfileURL
        },
        {
            name: 'Threads',
            icon: 'mdi:forum',
            url: threadsProfileURL
        }
    ]
};
