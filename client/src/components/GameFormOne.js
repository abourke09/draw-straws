import React, { Component } from 'react'

class GameFormOne extends Component {

  render() {
    if (this.props.currentStep !== 1) {
      return null
    }

    return(

      <div className="form-group">
        <label htmlFor="gameName">Game Name:</label>
        <input
          className="form-control"
          id="gameName"
          name="gameName"
          type="text"
          value={this.props.gameName}
          onChange={this.props.handleChange}
        />

        <label htmlFor="playersCount">Number of Players:</label>
        <select
          className="form-control"
          id="playersCount"
          name="playersCount"
          value={this.props.playersCount}
          onChange={this.props.handleChange}
        >
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    )
  }
}

export default GameFormOne
