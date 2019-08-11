// Instruments
import { app } from './server';
import { getPort } from './utils';

// Routers
import { auth, users, classes, lessons } from './routers';

const PORT = getPort();

app.use('/auth', auth);
app.use('/users', users);
app.use('/classes', classes);
app.use('/lessons', lessons);

app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Server API is up on port ${PORT}`);
});
