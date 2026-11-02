import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super({
            baseLink: process.env.API_URL!,
            options: { apiKey: process.env.API_KEY! },
        });
    }
}

export default AppLoader;
