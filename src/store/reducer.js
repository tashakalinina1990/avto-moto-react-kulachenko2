import {ActionType} from './action';
import {MOCK_COMMENTS, MOCK_CAR} from '../mock/mock';

const initialState = {
  comments: MOCK_COMMENTS,
  car: MOCK_CAR
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_COMMENTS:
      const newComments = [...action.payload, ...state.comments.slice()];
      return Object.assign({}, state, {comments: newComments});
    default:
      return state;
  }
}