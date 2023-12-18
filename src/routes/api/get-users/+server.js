import { getUsers } from "$lib/server/db";

export async function GET () {
    const users = getUsers();
    return new Response(JSON.stringify({ users }));
}