import { Request, Response, Router } from 'express';
import fetch from 'node-fetch';

const userHandler = Router();

const HASURA_OPERATION = `mutation insertSingleUser($object: user_insert_input!) {
  insert_user_one(object: $object) {
    email,
    name,
    coordinator
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

// Request Handler
userHandler.post('/insertSingleUser', async (req: Request, res: Response) => {
  // get request input
  const params: insertSingleUserArgs = req.body.input;
  // execute the parent operation in Hasura
  const { data, errors } = await execute(params);
  console.log('entrei');
  if (errors) return res.status(400).json(errors[0]);
  // run some business logic

  // success
  return res.json(data);
});

export default userHandler;
