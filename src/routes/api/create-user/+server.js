import { createDBUser } from "$lib/server/db";

export async function POST ({ request }) {
    const { name, age } = await request.json();
    createDBUser(name, age);
    return new Response(JSON.stringify({ 
        status: 200, 
        user: {
            name,
            age
        } 
    }))
}