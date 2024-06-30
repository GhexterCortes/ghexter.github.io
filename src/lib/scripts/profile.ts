export const displayName = 'Cat++';
export const gitHubUsername = 'NotGhex';
export const discordUsername = 'catplvsplus';
export const discordUserId = '749120018771345488';

export const discordProfileURL = `https://discord.com/users/${discordUserId}`;
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
        icon?: string;
        url: string;
    }[];
    repositories?: string[];
};

export const PROFILE_DATA: ProfileData = {
    name: displayName,
    username: discordUsername,
    avatar: 'https://avatars.githubusercontent.com/u/69035887?v=4',
    banner: '/img/banner.png',
    pronouns: ['He', 'They'],
    links: [
        {
            name: 'GitHub',
            icon: 'bi:github',
            url: gitHubProfileURL
        },
        {
            name: 'Discord',
            icon: 'bi:discord',
            url: discordProfileURL
        },
        {
            name: 'Instagram',
            icon: 'bi:instagram',
            url: instagramProfileURL
        },
        {
            name: 'Threads',
            icon: 'bi:threads',
            url: threadsProfileURL
        }
    ],
    repositories: [
        'TheNorthSolution/Reciple',
        'FalloutStudios/fallout-utility',
        'TheNorthSolution/djs-utils'
    ]
};
