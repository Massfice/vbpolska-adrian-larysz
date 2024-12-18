export interface Config {
    nats: {
        server: string;
    };
}

export const configuration = (): Config => ({
    nats: {
        server:
            process.env.NATS_SERVER ||
            'nats://localhost:4222',
    },
});
