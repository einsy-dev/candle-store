import { makeAutoObservable } from "mobx";

class FilterStore {
    filter = 'All'
    constructor() {
       makeAutoObservable(this)
    }

    changeFilter = (filter) => {
        this.filter = filter
    }
}

export default new FilterStore();