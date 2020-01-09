import Api from "../api/api.js";

export class SourceViewModel {
    constructor(url = "news/sources") {
        this.url = url;
        this.Data = [];
        this.Error = {};
    }

    GetAll(callback) {
        Api.Get(this.url, {}, response => {
            if (callback) {
                if (response.Data) this.Data = response.Data;
                this.Error = response.Error;
                callback(this);
            }
        })
    }
}