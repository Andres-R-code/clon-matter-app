import Request from './Request.js';
import Notification from './Notification.js';

export default class Auth {
    static succesRedirect = '/'
    static login(user) {
        this.disableLoginButton();
        Request.login(user)
            .then(response => {
                this.enableLoginButton();
                this.handleLoginResponse(response.status)
                return response.json();
            })
        .then(result => console.log(result))
    }
    static handleLoginResponse(statusCode) {
        if(statusCode === 200) {
            window.location.href = this.succesRedirect;
        } else if (statusCode === 401) {
            new Notification('danger', 'Tus credenciales son incorrectas');
        } else {
            new Notification('danger', 'Tuvimos un error');
        }
    }
    static disableLoginButton() {
        const loginButton = this.getLoginbutton();
        loginButton.disabled = true;
    }
    static enableLoginButton() {
        const loginButton = this.getLoginbutton();
        loginButton.disabled = false;
    }
    static getLoginbutton() {
        return document.getElementById('login-button');
    }
}