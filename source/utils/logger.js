// Core
import winston from 'winston';
import path from 'path';

export const logger = winston.createLogger({
    level: 'debug',
    transports: [ new winston.transports.Console() ],
    exitOnError: false,
});

const { combine, timestamp, printf } = winston.format;

const errLogFormat = printf(({ message, timestamp }) => {
    return `${timestamp} ${message}`;
});

export const loggerErr = winston.createLogger({
    level: 'error',
    format: combine(
        timestamp(),
        errLogFormat,
    ),
    transports: [ new winston.transports.File({
        filename: path.resolve(path.join('logs', 'errors.log')),
    }) ],
    exitOnError: false,
});
