export const getNodeEnv = () => {
    const NODE_ENV = process.env.NODE_ENV.trim();

    if (!NODE_ENV) {
        throw new Error('Environment variable NODE_ENV should be specified');
    }

    return NODE_ENV;
};
