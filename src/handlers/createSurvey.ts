import { Request, Response, Router } from 'express';
import Joi from 'joi';
import fetch from 'node-fetch';

const surveyHandler = Router();

const HASURA_OPERATION = `mutation surveyCreate($title: String!, $coordinatorId: String!, $questions: question_arr_rel_insert_input!) {
  insert_survey_one(object: {title: $title, coordinatorId: $coordinatorId, questions: $questions}) {
    id
    title
    coordinatorId,
    questions {
      id,
      surveyId,
      questionTitle,
      type,
      choices
    }
  }
}`;

const execute = async (variables) => {
  const fetchResponse = await fetch('http://localhost:8080/v1/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: HASURA_OPERATION,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};

const questionJoiSchema = Joi.object({
  title: Joi.string().required().label('Question Title'),
  questionType: Joi.string()
    .valid('MULTIPLE_CHOICE', 'MULTIPLE_SELECT', 'OPEN_TEXT', 'YES_OR_NO')
    .label('Question Type'),
  choices: Joi.when('questionType', {
    is: Joi.string().valid('OPEN_TEXT', 'YES_OR_NO'),
    then: Joi.forbidden(),
    otherwise: Joi.array().min(2).items(Joi.string()).required(),
  }),
});
const surveyJoiSchema = Joi.object({
  title: Joi.string().required().label('Survey Title'),
  coordinator: Joi.required().label('Coordinator'),
  questions: Joi.array().required().items(questionJoiSchema).min(1).label('Questions'),
  availableToAnyone: Joi.boolean().required().label('Available to Anyone'),
});

// Request Handler
surveyHandler.post('/surveyCreate', async (req: Request, res: Response) => {
  // get request input
  const params: surveyCreateArgs = req.body.input;
  // execute the parent operation in Hasura
  const { data, errors } = await execute(params);
  if (errors) return res.status(400).json(errors[0]);
  // run some business logic

  // success
  return res.json(data);
});

export default surveyHandler;
