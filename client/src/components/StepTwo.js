import React from 'react'

class StepTwo extends React.Component {
  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return(
      <div className="form-group">
        <label htmlFor="username">Step 2: Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={this.props.username} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    )
  }
}

export default StepTwo
