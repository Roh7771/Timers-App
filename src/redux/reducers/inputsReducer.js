import { INPUTCHANGE, CLEARINPUTS } from '../actions/actionsTypes';

const initialState = {
  nameInputValue: '',
  dateInputValue: '',
  hoursInputValue: '',
  minutesInputValue: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INPUTCHANGE:
      return {
        ...state,
        [`${action.payload.inputName}InputValue`]: action.payload.value,
      };

    case CLEARINPUTS:
      return {
        ...state,
        nameInputValue: '',
        dateInputValue: '',
        hoursInputValue: '',
        minutesInputValue: '',
      };

    default:
      return state;
  }
}
