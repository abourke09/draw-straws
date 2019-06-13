import React, { Component } from 'react'

class GameFormFour extends Component {

  render() {
      if (this.props.currentStep !== 4) {
        return null
      }

      const rowContainer = []
      let i = 0

      while (i < this.props.playersCount) {
        rowContainer.push(<>
        <tr key={i}>
          <td>{this.props.playersArray[i].name}</td>
          <td><button type="button" onclick={this.props.selectOption}>{this.props.optionsArray[i].description}</button></td>
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

export default GameFormFour;
