type Maybe<T> = T | null;

enum SurveyCreateQuestionTypeConstraint {
  question_type_pkey = 'question_type_pkey',
  question_type_question_type_key = 'question_type_question_type_key',
}

enum SurveyCreateQuestionTypeUpdateColumn {
  type = 'type',
}

enum SurveyCreateQuestionConstraint {
  question_pkey = 'question_pkey',
  question_question_id_key = 'question_question_id_key',
}

enum SurveyCreateQuestionUpdateColumn {
  choices = 'choices',
  id = 'id',
  questionTitle = 'questionTitle',
  surveyId = 'surveyId',
  type = 'type',
}

enum SurveyCreateQuestionTypeEnum {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  MULTIPLE_SELECT = 'MULTIPLE_SELECT',
  OPEN_TEXT = 'OPEN_TEXT',
  YES_OR_NO = 'YES_OR_NO',
}

enum SurveyCreateSurveyConstraint {
  survey_pkey = 'survey_pkey',
  survey_survey_id_key = 'survey_survey_id_key',
}

enum SurveyCreateSurveyUpdateColumn {
  coordinatorId = 'coordinatorId',
  id = 'id',
  title = 'title',
}

enum SurveyCreateUserConstraint {
  user_email_key = 'user_email_key',
  user_pkey = 'user_pkey',
}

enum SurveyCreateUserUpdateColumn {
  coordinator = 'coordinator',
  email = 'email',
  name = 'name',
}

enum SurveyCreateSurveyResponseConstraint {
  survey_response_pkey = 'survey_response_pkey',
}

enum SurveyCreateSurveyResponseUpdateColumn {
  awnser = 'awnser',
  id = 'id',
  responder = 'responder',
}

type InsertSingleUserOutput = {
  coordinator: boolean;
  email: string;
  name: string;
};

type CreateSurveyOutput = {
  coordinatorId: string;
  title: string;
};

type SurveyCreateOutput = {
  coordinatorId: string;
  id: number;
  title: string;
};

type InsertSingleUserUserInsertInput = {
  coordinator?: Maybe<boolean>;
  email?: Maybe<string>;
  name?: Maybe<string>;
};

type CreateSurveySurveyInsertInput = {
  coordinatorId?: Maybe<string>;
  id?: Maybe<number>;
  title?: Maybe<string>;
};

type SurveyCreateSurveyInsertInput = {
  coordinatorId?: Maybe<string>;
  id?: Maybe<number>;
  questions?: Maybe<SurveyCreateQuestionArrRelInsertInput>;
  title?: Maybe<string>;
  user?: Maybe<SurveyCreateUserObjRelInsertInput>;
};

type SurveyCreateQuestionArrRelInsertInput = {
  data: Array<SurveyCreateQuestionInsertInput>;
  on_conflict?: Maybe<SurveyCreateQuestionOnConflict>;
};

type SurveyCreateQuestionInsertInput = {
  choices?: Maybe<string>;
  id?: Maybe<number>;
  questionTitle?: Maybe<string>;
  questionType?: Maybe<SurveyCreateQuestionTypeObjRelInsertInput>;
  responses?: Maybe<SurveyCreateSurveyResponseArrRelInsertInput>;
  survey?: Maybe<SurveyCreateSurveyObjRelInsertInput>;
  surveyId?: Maybe<number>;
  type?: Maybe<SurveyCreateQuestionTypeEnum>;
};

type SurveyCreateQuestionTypeObjRelInsertInput = {
  data: SurveyCreateQuestionTypeInsertInput;
  on_conflict?: Maybe<SurveyCreateQuestionTypeOnConflict>;
};

type SurveyCreateQuestionTypeInsertInput = {
  type?: Maybe<string>;
};

type SurveyCreateQuestionTypeOnConflict = {
  constraint: SurveyCreateQuestionTypeConstraint;
  update_columns: Array<SurveyCreateQuestionTypeUpdateColumn>;
  where?: Maybe<SurveyCreateQuestionTypeBoolExp>;
};

type SurveyCreateQuestionTypeBoolExp = {
  _and?: Maybe<Array<Maybe<SurveyCreateQuestionTypeBoolExp>>>;
  _not?: Maybe<SurveyCreateQuestionTypeBoolExp>;
  _or?: Maybe<Array<Maybe<SurveyCreateQuestionTypeBoolExp>>>;
  type?: Maybe<SurveyCreateStringComparisonExp>;
};

type SurveyCreateStringComparisonExp = {
  _eq?: Maybe<string>;
  _gt?: Maybe<string>;
  _gte?: Maybe<string>;
  _ilike?: Maybe<string>;
  _in: Array<string>;
  _is_null?: Maybe<boolean>;
  _like?: Maybe<string>;
  _lt?: Maybe<string>;
  _lte?: Maybe<string>;
  _neq?: Maybe<string>;
  _nilike?: Maybe<string>;
  _nin: Array<string>;
  _nlike?: Maybe<string>;
  _nsimilar?: Maybe<string>;
  _similar?: Maybe<string>;
};

type SurveyCreateSurveyResponseArrRelInsertInput = {
  data: Array<SurveyCreateSurveyResponseInsertInput>;
  on_conflict?: Maybe<SurveyCreateSurveyResponseOnConflict>;
};

type SurveyCreateSurveyResponseInsertInput = {
  awnser?: Maybe<string>;
  id?: Maybe<number>;
  question?: Maybe<SurveyCreateQuestionObjRelInsertInput>;
  responder?: Maybe<string>;
  user?: Maybe<SurveyCreateUserObjRelInsertInput>;
};

type SurveyCreateQuestionObjRelInsertInput = {
  data: SurveyCreateQuestionInsertInput;
  on_conflict?: Maybe<SurveyCreateQuestionOnConflict>;
};

type SurveyCreateQuestionOnConflict = {
  constraint: SurveyCreateQuestionConstraint;
  update_columns: Array<SurveyCreateQuestionUpdateColumn>;
  where?: Maybe<SurveyCreateQuestionBoolExp>;
};

type SurveyCreateQuestionBoolExp = {
  _and?: Maybe<Array<Maybe<SurveyCreateQuestionBoolExp>>>;
  _not?: Maybe<SurveyCreateQuestionBoolExp>;
  _or?: Maybe<Array<Maybe<SurveyCreateQuestionBoolExp>>>;
  choices?: Maybe<SurveyCreateStringComparisonExp>;
  id?: Maybe<SurveyCreateIntComparisonExp>;
  questionTitle?: Maybe<SurveyCreateStringComparisonExp>;
  questionType?: Maybe<SurveyCreateQuestionTypeBoolExp>;
  responses?: Maybe<SurveyCreateSurveyResponseBoolExp>;
  survey?: Maybe<SurveyCreateSurveyBoolExp>;
  surveyId?: Maybe<SurveyCreateIntComparisonExp>;
  type?: Maybe<SurveyCreateQuestionTypeEnumComparisonExp>;
};

type SurveyCreateIntComparisonExp = {
  _eq?: Maybe<number>;
  _gt?: Maybe<number>;
  _gte?: Maybe<number>;
  _in: Array<number>;
  _is_null?: Maybe<boolean>;
  _lt?: Maybe<number>;
  _lte?: Maybe<number>;
  _neq?: Maybe<number>;
  _nin: Array<number>;
};

type SurveyCreateSurveyResponseBoolExp = {
  _and?: Maybe<Array<Maybe<SurveyCreateSurveyResponseBoolExp>>>;
  _not?: Maybe<SurveyCreateSurveyResponseBoolExp>;
  _or?: Maybe<Array<Maybe<SurveyCreateSurveyResponseBoolExp>>>;
  awnser?: Maybe<SurveyCreateStringComparisonExp>;
  id?: Maybe<SurveyCreateIntComparisonExp>;
  question?: Maybe<SurveyCreateQuestionBoolExp>;
  responder?: Maybe<SurveyCreateStringComparisonExp>;
  user?: Maybe<SurveyCreateUserBoolExp>;
};

type SurveyCreateUserBoolExp = {
  _and?: Maybe<Array<Maybe<SurveyCreateUserBoolExp>>>;
  _not?: Maybe<SurveyCreateUserBoolExp>;
  _or?: Maybe<Array<Maybe<SurveyCreateUserBoolExp>>>;
  coordinator?: Maybe<SurveyCreateBooleanComparisonExp>;
  email?: Maybe<SurveyCreateStringComparisonExp>;
  name?: Maybe<SurveyCreateStringComparisonExp>;
  survey_responses?: Maybe<SurveyCreateSurveyResponseBoolExp>;
  surveys?: Maybe<SurveyCreateSurveyBoolExp>;
};

type SurveyCreateBooleanComparisonExp = {
  _eq?: Maybe<boolean>;
  _gt?: Maybe<boolean>;
  _gte?: Maybe<boolean>;
  _in: Array<boolean>;
  _is_null?: Maybe<boolean>;
  _lt?: Maybe<boolean>;
  _lte?: Maybe<boolean>;
  _neq?: Maybe<boolean>;
  _nin: Array<boolean>;
};

type SurveyCreateSurveyBoolExp = {
  _and?: Maybe<Array<Maybe<SurveyCreateSurveyBoolExp>>>;
  _not?: Maybe<SurveyCreateSurveyBoolExp>;
  _or?: Maybe<Array<Maybe<SurveyCreateSurveyBoolExp>>>;
  coordinatorId?: Maybe<SurveyCreateStringComparisonExp>;
  id?: Maybe<SurveyCreateIntComparisonExp>;
  questions?: Maybe<SurveyCreateQuestionBoolExp>;
  title?: Maybe<SurveyCreateStringComparisonExp>;
  user?: Maybe<SurveyCreateUserBoolExp>;
};

type SurveyCreateQuestionTypeEnumComparisonExp = {
  _eq?: Maybe<SurveyCreateQuestionTypeEnum>;
  _in: Array<SurveyCreateQuestionTypeEnum>;
  _is_null?: Maybe<boolean>;
  _neq?: Maybe<SurveyCreateQuestionTypeEnum>;
  _nin: Array<SurveyCreateQuestionTypeEnum>;
};

type SurveyCreateUserObjRelInsertInput = {
  data: SurveyCreateUserInsertInput;
  on_conflict?: Maybe<SurveyCreateUserOnConflict>;
};

type SurveyCreateUserInsertInput = {
  coordinator?: Maybe<boolean>;
  email?: Maybe<string>;
  name?: Maybe<string>;
  survey_responses?: Maybe<SurveyCreateSurveyResponseArrRelInsertInput>;
  surveys?: Maybe<SurveyCreateSurveyArrRelInsertInput>;
};

type SurveyCreateSurveyArrRelInsertInput = {
  data: Array<SurveyCreateSurveyInsertInput>;
  on_conflict?: Maybe<SurveyCreateSurveyOnConflict>;
};

type SurveyCreateSurveyOnConflict = {
  constraint: SurveyCreateSurveyConstraint;
  update_columns: Array<SurveyCreateSurveyUpdateColumn>;
  where?: Maybe<SurveyCreateSurveyBoolExp>;
};

type SurveyCreateUserOnConflict = {
  constraint: SurveyCreateUserConstraint;
  update_columns: Array<SurveyCreateUserUpdateColumn>;
  where?: Maybe<SurveyCreateUserBoolExp>;
};

type SurveyCreateSurveyResponseOnConflict = {
  constraint: SurveyCreateSurveyResponseConstraint;
  update_columns: Array<SurveyCreateSurveyResponseUpdateColumn>;
  where?: Maybe<SurveyCreateSurveyResponseBoolExp>;
};

type SurveyCreateSurveyObjRelInsertInput = {
  data: SurveyCreateSurveyInsertInput;
  on_conflict?: Maybe<SurveyCreateSurveyOnConflict>;
};

type Mutation = {
  surveyCreate?: Maybe<SurveyCreateOutput>;
};

type surveyCreateArgs = {
  title: string;
  coordinatorId: string;
  questions: SurveyCreateQuestionArrRelInsertInput;
};
