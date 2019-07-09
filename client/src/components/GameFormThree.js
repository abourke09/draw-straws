import React, { Component } from 'react'

class GameFormThree extends Component {

  render() {
      if (this.props.currentStep !== 3) {
        return null
      }

      const rowContainer = []
      let i = 0

      while (i < this.props.playersCount) {
        rowContainer.push(
          <React.Fragment key={i}>
            <tr>
              <td>{this.props.playersArray[i].name}</td>
              <td>{this.props.optionsArray[i].description}</td>
            </tr>
          </React.Fragment>
        )
        i++
      }

      return(
        <div className="form-group">
          <h2 align="center">{this.props.gameName}</h2>
          <table width="100%" border="1">
            <tbody>
              <tr>
                <th>Players</th>
                <th>Options</th>
              </tr>
              {rowContainer}
            </tbody>
          </table>
          <p><strong>Click Next to Draw Straws!</strong></p>
        </div>
    )
  }
}

export default GameFormThree;
