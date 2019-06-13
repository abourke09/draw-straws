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
        <tr>
          <td>this.props.playersArray[i]</td>
          <td>this.props.optionsArray[i]</td>
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
        </div>
    )
  }
}

export default GameFormThree;
