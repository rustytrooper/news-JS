import News from './news/news';
import Sources from './sources/sources';
import { Article, EverythingNewsResponse, Source, SourcesResponse } from '../../types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: EverythingNewsResponse): void {
        const values: Article[] = data.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesResponse): void {
        const values: Source[] = data.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
