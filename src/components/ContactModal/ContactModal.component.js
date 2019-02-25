import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ContactModal.scss'
import {
  closeContactModal,
  setName,
  setCompany,
  setEmail,
  setNumber,
  setLocation,
  setBudget,
  setDescription,
  setMarketing,
  clearForm,
  setError,
  clearError,
  setSubmitted,
  clearSubmitted,
} from 'actions/ContactModal.actions';
import projectRequestsService from 'services/projectRequests.service';

class ContactModal extends Component {
  render() {
    if (this.props.modalOpen) return this.renderModal();
    else return (null);
  }

  renderModal() {
    return (
      <div className="ContactModal">
        <div className="modal-contents">
          <div className="modal-exit" onClick={this.closeContactModal.bind(this)}>&#x2715;</div>
          { this.renderContentsContainer() }
        </div>
      </div>
    );
  }

  renderContentsContainer() {
    if (this.props.submitted) {
      return (
        <div className="contents-container submitted">
          <div className="modal-header">
            <div className="header-title">Let's chat soon!</div>
            <div className="header-subtitle">Your request has been received. We'll be in touch with you shortly.</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="contents-container">
          <div className="modal-header">
            <div className="header-title">LET'S WORK TOGETHER</div>
            <div className="header-subtitle">Start a project or conversation.</div>
          </div>
          { this.renderError() }
          { this.renderForm() }
        </div>
      );
    }
  }

  renderError() {
    if (this.props.error) return (
      <div className="modal-error">
        All fields are mandatory.
      </div>
    );
  }

  renderForm() {
    return (
      <form className="modal-form">
        <input
          type="text"
          className="small-input name-input"
          placeholder="Your name"
          value={this.props.name}
          onChange={this.setName.bind(this)} />
        <input
          type="text"
          className="small-input company-input"
          placeholder="Your company"
          value={this.props.company}
          onChange={this.setCompany.bind(this)} />
        <input
          type="email"
          className="small-input email-input"
          placeholder="Email address"
          value={this.props.email}
          onChange={this.setEmail.bind(this)} />
        <input
          type="text"
          className="small-input budget-input"
          placeholder="Budget"
          value={this.props.budget}
          onChange={this.setBudget.bind(this)} />
        <input
          type="tel"
          className="small-input number-input"
          placeholder="Phone number"
          value={this.props.number}
          onChange={this.setNumber.bind(this)} />
        <input
          type="text"
          className="small-input location-input"
          placeholder="Location"
          value={this.props.location}
          onChange={this.setLocation.bind(this)} />
        <textarea
          className="large-input description-input"
          placeholder="Tell us about your project."
          value={this.props.description}
          onChange={this.setDescription.bind(this)} />

        <div className="form-controls">
          <div className="checkbox-group">
            <input
              type="checkbox"
              className="marketing-checkbox"
              id="marketing"
              checked={this.props.marketing}
              onChange={this.setMarketing.bind(this)} />
            <label className="marketing-label" htmlFor="marketing">Sign me up for the latest news.</label>
          </div>
          <input
            type="submit"
            className="submit-button"
            value="SUBMIT"
            onClick={this.submit.bind(this)} />
        </div>
      </form>
    );
  }

  submit(event) {
    event.preventDefault();
    if (this.validateInputs()) {
      projectRequestsService.createProjectRequest({
        name: this.props.name,
        company: this.props.company,
        email: this.props.email,
        number: this.props.number,
        location: this.props.location,
        budget: this.props.budget,
        description: this.props.description,
        marketing: this.props.marketing,
      }).then(() => {
        this.props.setSubmitted();
        this.props.clearForm();
      }).catch((error) => {
        if (error && error.response && error.response.status === 422) {
          alert('Your email is invalid. Please use a valid email.');
        } else {
          alert('Something went wrong. Please try again later.');
        }
      });
    } else {
      this.props.setError();
    }
  }

  validateInputs() {
    return this.props.name &&
      this.props.company &&
      this.props.email &&
      this.props.number &&
      this.props.location &&
      this.props.budget &&
      this.props.description;
  }

  setName(event) {
    this.props.clearError();
    this.props.setName(event.target.value);
  }

  setCompany(event) {
    this.props.clearError();
    this.props.setCompany(event.target.value);
  }

  setEmail(event) {
    this.props.clearError();
    this.props.setEmail(event.target.value);
  }

  setNumber(event) {
    this.props.clearError();
    this.props.setNumber(event.target.value);
  }

  setLocation(event) {
    this.props.clearError();
    this.props.setLocation(event.target.value);
  }

  setBudget(event) {
    this.props.clearError();
    this.props.setBudget(event.target.value);
  }

  setDescription(event) {
    this.props.clearError();
    this.props.setDescription(event.target.value);
  }

  setMarketing(event) {
    this.props.setMarketing(event.target.checked);
  }

  closeContactModal() {
    this.props.clearError();
    this.props.clearSubmitted();
    this.props.closeContactModal();
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    modalOpen: state.contactModal.modalOpen,
    name: state.contactModal.name,
    company: state.contactModal.company,
    email: state.contactModal.email,
    number: state.contactModal.number,
    location: state.contactModal.location,
    budget: state.contactModal.budget,
    description: state.contactModal.description,
    marketing: state.contactModal.marketing,
    error: state.contactModal.error,
    submitted: state.contactModal.submitted,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeContactModal: () => dispatch(closeContactModal()),
    setName: (name) => dispatch(setName(name)),
    setCompany: (company) => dispatch(setCompany(company)),
    setEmail: (email) => dispatch(setEmail(email)),
    setNumber: (number) => dispatch(setNumber(number)),
    setLocation: (location) => dispatch(setLocation(location)),
    setBudget: (budget) => dispatch(setBudget(budget)),
    setDescription: (description) => dispatch(setDescription(description)),
    setMarketing: (marketing) => dispatch(setMarketing(marketing)),
    clearForm: () => dispatch(clearForm()),
    setError: () => dispatch(setError()),
    clearError: () => dispatch(clearError()),
    setSubmitted: () => dispatch(setSubmitted()),
    clearSubmitted: () => dispatch(clearSubmitted()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactModal);
