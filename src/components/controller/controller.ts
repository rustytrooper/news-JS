import AppLoader from './appLoader';
import { SourcesResponse, EverythingNewsResponse } from '../../types';

class AppController extends AppLoader {
    public getSources(callback: (data: SourcesResponse) => void): void {
        super.getResp<SourcesResponse>({ endpoint: 'sources' }, callback);
    }

    public getNews(e: MouseEvent, callback: (data: EverythingNewsResponse) => void): void {
        const target = e.target;
        const newsContainer = e.currentTarget;

        if (!(target instanceof HTMLElement) || !(newsContainer instanceof HTMLElement)) {
            return;
        }

        let current: HTMLElement | null = target;

        while (current !== null && current !== newsContainer) {
            if (current.classList.contains('source__item')) {
                const sourceId = current.getAttribute('data-source-id');

                if (sourceId === null) {
                    return;
                }

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<EverythingNewsResponse>(
                        {
                            endpoint: 'everything',
                            options: { sources: sourceId },
                        },
                        callback
                    );
                }
                return;
            }

            current = current.parentNode instanceof HTMLElement ? current.parentNode : null;
        }
    }
}

export default AppController;
