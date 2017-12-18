import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {

  render() {
    console.log(this.props)
    return <div>Hello World</div>;
  }
}

function mapStateToProps(calendar) {
  const dayOrder = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  return {
    calendar: dayOrder.map(day => ({
      day,
      meal: Object.assign({}, calendar)
    }))
  };
}

function mapDispatchToProps(dispatch){
  return {
    selectRecipe : (data) => dispatch(addRecipe(data)),
    remove : (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps)(App);
