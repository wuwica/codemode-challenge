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
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {
      submitState: "default",
      opacity:0,
      contentOpacity: 1
    }
  }
  render() {
    if (this.props.modalOpen) return this.renderModal();
    else return (null);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.modalOpen != this.props.modalOpen && this.props.modalOpen){
      setTimeout(() => {
        this.setState({
          opacity:1
        });
      },0); //settimeout 0 so that the opacity isnt set parallel to the modal opening 
    }else if (prevProps.submitted != this.props.submitted && this.props.submitted){
      setTimeout(() => {
        this.setState({
          contentOpacity:1
        });
      },0); 
    }
  }

  renderModal() {
    return (
      <div className="ContactModal" style={{opacity:this.state.opacity}}>
        <div className="modal-contents" style={{opacity:this.state.contentOpacity}}>
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
  
  renderSubmit(){ //submit button has 4 different states
    if(this.state.submitState === "loading"){
      return(
        <div className={"submit-button-container"}>
          <input disabled type="submit" className={"submit-button disabled"} value="SUBMIT" onClick={null} />
          <div className={"spinner-wrapper loading"}><div className={"spinner"}></div></div>
        </div>);
    }else if(this.state.submitState === "submitted"){
      return(
        <div className={"submit-button-container submitted-animation"}>
          <input disabled type="submit" className={"submit-button disabled"} value="SUBMIT" onClick={null} />
          <div className={"spinner-wrapper submitted"}>
            <div className={"spinner"}></div>
          </div>
          <div className={"checkmark-wrapper"}>
            <div className={"checkmark"}></div>
          </div>
        </div>);
    }else if(this.state.submitState === "error"){ 
      return(
        <div className={"submit-button-container error-animation"} onAnimationEnd={(event) => {this.setState({submitState: "default"})}} >
          <input type="submit" className="submit-button" value="SUBMIT"onClick={this.submit.bind(this)} />
        </div>
      );
    }else{
      return(
        <div className={"submit-button-container"}>
          <input type="submit" className="submit-button" value="SUBMIT"onClick={this.submit.bind(this)} />
        </div>
      );
    }
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
          {this.renderSubmit()}
        </div>
      </form>
    );
  }

  submit(event) {
    this.setState({
      submitState: "loading"
    });
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
        setTimeout(() => {
          this.setState({
            submitState: "submitted"
          },() => {
            setTimeout (()=>{
              this.setState({
                contentOpacity:0
              },() => {
                setTimeout (()=>{
                  this.props.setSubmitted();
                  this.props.clearForm();
                  this.setState({
                    submitState: "default"
                  });
                },300) // 300ms to fade content out
              }); 
            },1000); // 1s after the checkmark animation starts to play
          });
        },0);
      }).catch((error) => {
        if (error && error.response && error.response.status === 422) {
          alert('Your email is invalid. Please use a valid email.');
        } else {
          alert('Something went wrong. Please try again later.');
        }
        this.setState({
          submitState: "error"
        });
      });
    } else {
      this.props.setError();
      this.setState({
        submitState: "error"
      });
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
    setTimeout(() => {
      this.setState({
        opacity:0
      },() => {
        setTimeout (()=>{
          this.props.clearError();
          this.props.clearSubmitted();
          this.props.closeContactModal();
        },300) //300ms to fade the entire modal out
      });
    },0);
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
