// Core
import express from 'express';

// Instruments
import { app } from './server';
import { getPort, getNodeEnv, logger, loggerErr } from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const PORT = getPort();

app.use(express.json({ limit: '10kb' }));

if (getNodeEnv() === 'development') {
    app.use((req, res, next) => {
        logger.debug(
            `${req.method} ${Date()} payload: ${JSON.stringify(req.body)}`
        );
        next();
    });
}

if (getNodeEnv() !== 'test') {
    app.use((error, req, res, next) => {
        const { name, message } = error;
        loggerErr.error(`${name}: ${message}`);
        res.status(500).json({ message });
    });
}

app.use('/auth', auth);
app.use('/users', users);
app.use('/classes', classes);
app.use('/lessons', lessons);

app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Server API is up on port ${PORT}`);
});
