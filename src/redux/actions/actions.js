import {
  CREATETIMER,
  INPUTCHANGE,
  CLEARINPUTS,
  UPDATECURRENTDATE,
} from './actionsTypes';

export function createTimer(data) {
  return {
    type: CREATETIMER,
    payload: data,
  };
}

export function inputChange(changeData) {
  return {
    type: INPUTCHANGE,
    payload: changeData,
  };
}

export function clearInput() {
  return {
    type: CLEARINPUTS,
  };
}

export function updateCurrentDate() {
  return {
    type: UPDATECURRENTDATE,
  };
}
