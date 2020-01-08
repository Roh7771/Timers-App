import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputChange, createTimer, clearInput } from '../redux/actions/actions';

function Inputs({
  nameInputValue,
  dateInputValue,
  hoursInputValue,
  minutesInputValue,
  onChange,
  onStart,
}) {
  const createDate = (date, hours, minutes) => {
    const endDate = new Date(date);
    endDate.setHours(+hours);
    endDate.setMinutes(+minutes);
    return endDate;
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={e => {
          onChange({
            inputName: e.target.getAttribute('name'),
            value: e.target.value,
          });
        }}
        value={nameInputValue}
      />
      <input
        type="date"
        name="date"
        onChange={e => {
          onChange({
            inputName: e.target.getAttribute('name'),
            value: e.target.value,
          });
        }}
        value={dateInputValue}
      />
      <input
        type="number"
        name="hours"
        onChange={e => {
          onChange({
            inputName: e.target.getAttribute('name'),
            value: e.target.value,
          });
        }}
        value={hoursInputValue}
      />
      <input
        type="number"
        name="minutes"
        onChange={e => {
          onChange({
            inputName: e.target.getAttribute('name'),
            value: e.target.value,
          });
        }}
        value={minutesInputValue}
      />
      <button
        type="button"
        onClick={() => {
          onStart({
            name: nameInputValue,
            endDate: createDate(
              dateInputValue,
              hoursInputValue,
              minutesInputValue,
            ),
          });
        }}
      >
        Start
      </button>
    </div>
  );
}

Inputs.propTypes = {
  nameInputValue: PropTypes.string.isRequired,
  dateInputValue: PropTypes.string.isRequired,
  hoursInputValue: PropTypes.string.isRequired,
  minutesInputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    nameInputValue: state.inputsReducer.nameInputValue,
    dateInputValue: state.inputsReducer.dateInputValue,
    hoursInputValue: state.inputsReducer.hoursInputValue,
    minutesInputValue: state.inputsReducer.minutesInputValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: data => dispatch(inputChange(data)),
    onStart: data => {
      dispatch(createTimer(data));
      dispatch(clearInput());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
