// Write your JS code here

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    fnRequired: '',
    lnRequired: '',
    successMsg: false,
    reqExtStart: false,
    reqExtLast: false,
    showLastNameError: false,
    showFirstNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onClickSubmitAnResp = () => {
    this.setState(prevState => ({
      successMsg: !prevState.successMsg,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSuccessView = () => {
    const {firstName, lastName, reqExtStart, reqExtLast} = this.state
    return (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-img"
        />
        <p>Submitted Successfully</p>
        <button
          type="button"
          className="submit-btn"
          onClick={this.onClickSubmitAnResp}
        >
          Submit Another Response
        </button>
      </>
    )
  }

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstName, lastName, reqExtStart, reqExtLast} = this.state

    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (firstName && lastName) {
      this.setState({successMsg: true, reqExt: false})
    } else if (firstName === '') {
      this.setState({
        successMsg: false,
        fnRequired: 'Required',
        reqExtStart: true,
      })
    } else if (lastName === '') {
      this.setState({
        successMsg: false,
        lnRequired: 'Required',
        reqExtLast: true,
      })
    }
  }

  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  onBlurLastName = () => {
    const {showLastNameError} = this.state

    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  renderRegistrationForm = () => {
    const {
      firstName,
      lastName,
      fnRequired,
      lnRequired,
      successMsg,
      reqExtLast,
      reqExtStart,
    } = this.state
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <label htmlFor="first-name"> FIRST NAME </label>
        <br className="br" />
        <input
          type="text"
          id="first-name"
          className="input-cont"
          value={firstName}
          onChange={this.onChangeFirstName}
          placeholder="First Name"
          onBlur={this.onBlurFirstName}
        />
        <br className="br" />
        {reqExtStart && <p> Required </p>}
        <br className="br" />
        <label htmlFor="last-name"> LAST NAME </label>
        <br />
        <input
          type="text"
          id="last-name"
          className="input-cont"
          value={lastName}
          onChange={this.onChangeLastName}
          placeholder="Last Name"
          onBlur={this.onBlurLastName}
        />
        <br />
        {reqExtLast && <p> Required </p>}
        <br />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {firstName, lastName, fnRequired, lnRequired, successMsg} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading"> Registration </h1>

        <div className="view-container">
          {successMsg
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
