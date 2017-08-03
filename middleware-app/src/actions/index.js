import { FETCH_USERS } from "./types";

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [
            createUser('Jane', 'jane@example.com'),
            createUser('Alex', 'alex@example.com'),
            createUser('John', 'john@example.com')
        ]
    }
}

function createUser(name, email) {
    return { name, email };
}