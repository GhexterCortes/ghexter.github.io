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
    name: 'Cat++',
    username: 'catplvsplus',
    avatar: 'https://avatars.githubusercontent.com/u/69035887?v=4',
    banner: 'https://raw.githubusercontent.com/fast-average-color/fast-average-color/master/img/title.png',
    pronouns: ['He', 'They']
};