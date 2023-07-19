import { makeAutoObservable } from "mobx";

class FilterStore {
    filter = 'All'
    constructor() {
       makeAutoObservable
    }

    changeFilter = (filter) => {
        this.filter = filter
    }
}

export default new FilterStore();