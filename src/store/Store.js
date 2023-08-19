import { makeAutoObservable } from "mobx";

export default class Store {
    constructor() {
        this.page = 1;
        this.limitPage = 1;
        this.category = [];
        makeAutoObservable(this);
    }
}
