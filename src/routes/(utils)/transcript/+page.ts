import { redirect } from '@sveltejs/kit';

export const prerender = true;

export function load(data) {
    const key = typeof window.location !== 'undefined' ? new URLSearchParams(window.location.search).get('key') : null;
    if (!key) redirect(303, '/');

    redirect(303, '/render?key=' + key);
}
