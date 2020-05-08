const LOGIN = '[Auth] Login';
const LOGOUT = '[Auth] Logout';

export class Login {
    static readonly type = LOGIN;

    constructor(public payload: { username: string, password: string }) {}
}

export class Logout {
    static readonly type = LOGOUT;
}