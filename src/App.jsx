import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './style/main.sass';
import PropTypes from 'prop-types';
import Inputs from './components/Inputs';
import Timers from './components/Timers';
import { updateCurrentDate } from './redux/actions/actions';

function App({ updateDate }) {
  useEffect(() => {
    setInterval(() => {
      updateDate();
    }, 1000);
  }, []);
  return (
    <>
      <Inputs />
      <Timers />
    </>
  );
}

App.propTypes = {
  updateDate: PropTypes.func.isRequired,
};

// function mapStateToProps(state) {
//   return {
//     currentRecipe: state.recipesReducer.currentRecipe,
//     cardsPresent: state.recipesReducer.cardsPresent,
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    updateDate: () => dispatch(updateCurrentDate()),
  };
}

export default connect(null, mapDispatchToProps)(App);
