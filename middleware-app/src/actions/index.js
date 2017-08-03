import { FETCH_USERS } from "./types";
import axios from 'axios';

export function fetchUsers() {
    const usersPromise = axios.get('https://jsonplaceholder.typicode.com/users');

    return {
                type: FETCH_USERS,
                payload: usersPromise
            };
}

function createUser(name, email) {
    return { name, email };
}