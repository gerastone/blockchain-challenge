export class Environment {
    public static ENV = window['ENV'] || 'development';

    public static get baseUrl() {
        if (!Environment.HOSTS[Environment.ENV]) { throw new Error('Unknown environment'); }

        return Environment.HOSTS[Environment.ENV];
    };

    public static HOSTS = {
        development: 'http://192.168.1.157:8000/api/v1',
        staging: '',
        production: '',
    }
};