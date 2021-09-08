import {
  IMessagingState,
  MESSAGEING_INITIAL_STATE,
  MessagingReducer,
} from './messaging/store';
import { ITodosState, TodosReducer, TODOS_INITIAL_STATE } from './todos/store';
import { combineReducers } from 'redux';

export interface IAppState {
  tasking: ITodosState;
  messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TODOS_INITIAL_STATE,
  messaging: MESSAGEING_INITIAL_STATE,
};

export const rootReducer = combineReducers({
  tasking: TodosReducer,
  messaging: MessagingReducer,
});
