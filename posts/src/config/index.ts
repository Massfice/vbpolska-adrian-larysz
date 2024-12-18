export interface Config {
    nats: {
        server: string;
    };
    mongo: {
        url: string;
    };
}

export const configuration = (): Config => ({
    nats: {
        server:
            process.env.NATS_SERVER ||
            'nats://localhost:4222',
    },
    mongo: {
        url:
            process.env.MONGO_URL ||
            'mongodb://localhost:27017/posts',
    },
});
