import { makeAutoObservable } from "mobx";

export default class ShopStore {
    constructor() {
        this._filter = 'All';
        this._page = 1;
        this._limitPage = 5;
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
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
