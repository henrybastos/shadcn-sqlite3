import { clearDatabase } from "$lib/server/db"

export async function GET () {
    clearDatabase();
    return new Response({ 
        status: 200,
        message: 'Databased cleared!'
    })
}