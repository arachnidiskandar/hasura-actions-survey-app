import bodyParser from 'body-parser';
import express from 'express';

import handlers from './handlers/handlers';

const app = express();

app.use(bodyParser.json());

app.use('/api/handlers', handlers);

export default app;
