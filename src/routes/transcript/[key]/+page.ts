
export async function load(data: any) {
    return { key: data.params.key, data: await (await fetch(`https://cdn.sourceb.in/bins/${data.params.key}/0`)).text() }
}