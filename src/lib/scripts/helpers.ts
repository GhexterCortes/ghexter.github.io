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

export function fetchRepository(url: string): Promise<RepositoryData|null> {
    const [owner, name] = url.split('/');

    let data = fetch(`https://api.github.com/repos/${owner}/${name}`)
        .then(async res => res.ok ? await res.json() : null)
        .catch(() => null);

    if (typeof window.localStorage !== 'undefined') {
        if (data) {
            window.localStorage.setItem(url, JSON.stringify(data));
        } else {
            data = window.localStorage.getItem(url)
                ? JSON.parse(window.localStorage.getItem(url)!)
                : null;
        }
    }

    return data;
}