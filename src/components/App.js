import React, { Component } from 'react'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    //console.log(this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToProps(calendar){
  console.log(calendar);
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

  return {
    calendar : dayOrder.map((day) => ({
      day,
      meal: Object.assign({}, calendar)
    }))
  }

}

export default connect(mapStateToProps)(App)
