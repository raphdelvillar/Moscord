import Api from "../api/api.js";

export class ArticleViewModel {
    constructor(url = "news/articles") {
        this.url = url;
        this.Data = [];
        this.Error = {};
    }

    FindBySource(source, callback) {
        Api.Get(`${this.url}/${source}`, {}, response => {
            if (callback) {
                if (response.Data) this.Data = response.Data;
                this.Error = response.Error;
                callback(this);
            }
        })
    }
}