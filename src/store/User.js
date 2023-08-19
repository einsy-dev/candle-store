import { makeAutoObservable } from "mobx";


export default class User {
    constructor() {
        this.basket = {};
        this.wishlist = [];
        this.info = {};
        this.isAuth = false;
        this._role = "USER";
        makeAutoObservable(this);
    }

    set init(data) {
        if (data.basket === undefined) this.basket = {}
        else this.basket = data.basket;
        this.wishlist = data.wishList;
        this.info = data;
        this.isAuth = true;
        this._role = data.role;
    }
}

