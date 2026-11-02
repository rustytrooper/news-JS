import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { EverythingNewsResponse, SourcesResponse } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesEl = document.querySelector<HTMLElement>('.sources');

        if (!sourcesEl) {
            return;
        }

        sourcesEl.addEventListener('click', (e: MouseEvent) => {
            this.controller.getNews(e, (data: EverythingNewsResponse) => this.view.drawNews(data));
        });

        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }
}

export default App;