import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._role = "ADMIN";
        makeAutoObservable(this);
    }

    get isAuth() {
        return this._isAuth;
    }

    set isAuth(value) {
        this._isAuth = value;
    }

    get role() {
        return this._role;
    }

    set role(value) {
        this._role = value;
    }
}
