import { Router } from 'express';

import surveyHandler from './createSurvey';
import userHandler from './createUser';

const handlers = Router();

handlers.use('/user', userHandler);
handlers.use('/survey', surveyHandler);

export default handlers;
