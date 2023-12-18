export class DatabaseAPI {
    /**
     * Inserts a new user in the database.
     * @param {*} name 
     * @param {*} age
     * @returns {Object}
     */
    static async createDBUser (name, age) {
        const response = await fetch('/api/create-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name, 
                age
            })
        });
        return await response.json();
    }

    /**
     * Fetches the users in the database and returns them.
     * @returns {Object}
     */
    static async getDBUsers () {
        const response = await fetch('/api/get-users');
        const { users } = await response.json();
        return users;
    }

    static async clearDB () {
        await fetch('/api/clear-db');
    }
}