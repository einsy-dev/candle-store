import { makeAutoObservable } from "mobx";

export default class ShopStore {
    constructor() {
        this._filter = 'All';
        this._page = 1;
        this._limitPage = 1;
        this._category = [];
        this._items = [];
        makeAutoObservable(this);
    }

    get filter() {
        return this._filter;
    }
    set filter(value) {
        this._filter = value;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        this._page = value;
    }
    get limitPage() {
        return this._limitPage;
    }
    set limitPage(value) {
        this._limitPage = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
