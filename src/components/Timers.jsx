import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Timers({ timers, currentDate }) {
  return (
    <div>
      {timers.map(el => {
        let timesLeft = el.endDate - currentDate;
        const daysLeft = Math.floor(timesLeft / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor(timesLeft / (1000 * 60 * 60));
        const minutesLeft = Math.floor(timesLeft / (1000 * 60));
        return (
          <div key={el.id}>
            <div>{el.name}</div>
            <div>{`Осталось ${el.endDate - currentDate}`}</div>
          </div>
        );
      })}
    </div>
  );
}

Timers.propTypes = {
  timers: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentDate: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    timers: state.timersReducer.timers,
    currentDate: state.timersReducer.currentDate,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onChange: data => dispatch(inputChange(data)),
//     onStart: data => {
//       dispatch(createTimer(data));
//       dispatch(clearInput());
//     },
//   };
// }

export default connect(mapStateToProps, null)(Timers);
