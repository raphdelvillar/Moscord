import { SourceViewModel } from "./source/source.js";
import { ArticleViewModel } from "./article/article.js";

export default {
    Source(url) {
        return new SourceViewModel(url);
    },
    Article(url) {
        return new ArticleViewModel(url);
    }
}