import React, { Component } from 'react'

class GameFormThree extends Component {

  render() {
      if (this.props.currentStep !== 3) {
        return null
      }

      const rowContainer = []
      let i = 0

      while (i < this.props.playersCount) {
        rowContainer.push(<>
        <tr key={i}>
          <td>{this.props.playersArray[i].name}</td>
          <td>{this.props.optionsArray[i].description}</td>
        </tr>
        </>)
        i++
      }

      return(
        <div className="form-group">
          <h2>{this.props.gameName}</h2>
          <table>
          <tr>
            <th>Players</th>
            <th>Options</th>
          </tr>
          {rowContainer}
          </table>
          <p>Click Next to Draw Straws for this new game!</p>
        </div>
    )
  }
}

export default GameFormThree;
