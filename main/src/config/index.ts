export interface Config {
    app: {
        port: number;
    };
}

export const configuration = (): Config => ({
    app: {
        port: parseInt(process.env.PORT || '3000'),
    },
});
