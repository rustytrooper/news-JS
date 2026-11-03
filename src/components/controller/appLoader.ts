import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super({
            baseLink: process.env.API_URL!,
            options: {  },
        });
    }
}

export default AppLoader;
