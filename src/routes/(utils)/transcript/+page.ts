import { redirect } from '@sveltejs/kit';

export function load(data) {
    redirect(303, '/render' + data.url.search);
}