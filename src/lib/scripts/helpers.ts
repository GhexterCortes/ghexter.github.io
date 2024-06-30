import { domCookie } from 'cookie-muncher';

export interface RepositoryData {
    name: string;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    homepage: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    archived: boolean;
    license: {
        key: string;
        name: string;
        spdx_id: string;
    };
}

export async function fetchRepository(url: string): Promise<RepositoryData|null> {
    const [owner, name] = url.split('/');

    let data = await fetch(`https://api.github.com/repos/${owner}/${name}`)
        .then(async res => res.ok ? await res.json() : null)
        .catch(() => null);

    if (typeof window !== 'undefined') {
        if (data) {
            domCookie.set({ name: url, value: JSON.stringify(minifyRepositoryObject(data)) });
        } else {
            const cookie = domCookie.get(url);
            data = cookie
                ? JSON.parse(cookie.value!)
                : null;
        }

        if (Object.keys(data || {}).length === 0) data = null;
    }

    return data;
}

export function minifyRepositoryObject(data: RepositoryData): RepositoryData {
    return {
        name: data.name,
        full_name: data.full_name,
        owner: {
            login: data.owner.login,
            avatar_url: data.owner.avatar_url,
            html_url: data.owner.html_url,
        },
        html_url: data.html_url,
        description: data.description,
        created_at: data.created_at,
        updated_at: data.updated_at,
        homepage: data.homepage,
        stargazers_count: data.stargazers_count,
        watchers_count: data.watchers_count,
        language: data.language,
        archived: data.archived,
        license: {
            key: data.license.key,
            name: data.license.name,
            spdx_id: data.license.spdx_id,
        }
    };
}