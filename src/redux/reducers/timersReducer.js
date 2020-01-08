import { uuid } from 'uuidv4';
import { CREATETIMER, UPDATECURRENTDATE } from '../actions/actionsTypes';

const initialState = {
  timers: [],
  currentDate: Date.now(),
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATETIMER:
      return {
        ...state,
        timers: [
          ...state.timers,
          {
            name: action.payload.name,
            endDate: action.payload.endDate,
            id: uuid(),
          },
        ],
      };

    case UPDATECURRENTDATE:
      return {
        ...state,
        currentDate: Date.now(),
      };

    default:
      return state;
  }
}
