import { writable } from "svelte/store";

export const LAST_USER = writable({ 
    name: '',
    age: 0
})

export const USERS = writable([]);