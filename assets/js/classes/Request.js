const BASE_URL = 'https://matter-app.herokuapp.com/api/v1';
export default class Request {
    static login(user) {
        return fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
    static register(user) {
        return fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }
}