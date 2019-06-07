import React, { Component } from 'react'
//import { connect } from 'react-redux'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'

class MasterForm extends Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      email: '',
      username: '',
      password: '',
    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail: \n
      Email: ${email} \n
      Username: ${username} \n
      Password: ${password}`)
  }

  // Render UI will go here...
  render() {
    return (
      <React.Fragment>
      <h1>A Wizard Form!</h1>
      <p>Step {this.state.currentStep} </p>

      <form onSubmit={this.handleSubmit}>

        <StepOne
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          email={this.state.email}
        />
        <StepTwo
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          username={this.state.username}
        />
      </form>
      </React.Fragment>
    )
  }
}

export default MasterForm
