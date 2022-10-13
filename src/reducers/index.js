import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import AnswerReducer from './answer-reducer';
import UserReducer from './user-reducer';
import QuestionReducer from './question-reducer';

const rootReducer = combineReducers({
  answers: AnswerReducer,
  questions: QuestionReducer,
  users: UserReducer,
  auth: AuthReducer,
});

export default rootReducer;