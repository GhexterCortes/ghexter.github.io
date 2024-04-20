import { error } from '@sveltejs/kit';
import { PageLoad } from './$types';

export async function load(data: Parameters<PageLoad>[0]) {
    const key = new URLSearchParams(data.url.search).get('key');

    if (!key) throw error(403);

    return { key, data: await (await data.fetch(`https://cdn.sourceb.in/bins/${key}/0`)).text() }
}