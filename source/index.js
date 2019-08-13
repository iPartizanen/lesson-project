// Core
import express from 'express';

// Instruments
import { app } from './server';
import { getPort, getNodeEnv, logger } from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const PORT = getPort();

app.use(express.json({ limit: '10kb' }));

if (getNodeEnv() === 'development') {
    app.use((req, res, next) => {
        logger.log('debug',
            `${req.method} ${Date()} payload: ${JSON.stringify(req.body)}`);
        next();
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
