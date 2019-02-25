import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomePage.scss';
import { openContactModal } from 'actions/ContactModal.actions';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        { this.renderMainPanel() }
      </div>
    );
  }

  renderMainPanel() {
    return (
      <div className="main-panel">
        <img className="logo" src="https://s3.amazonaws.com/pei-li/dark-logo.png" alt="CodeMode Logo" />
        <div className="panel-contents">
          <div className="header-title">Transform Your Ideas Into Code.</div>
          <div className="header-subtitle">
            We offer startups as a service. You provide the idea, we'll design and code it.
          </div>
          <div className="start-button" onClick={this.props.openContactModal}>START A PROJECT</div>
        </div>
        <div className="panel-spacer" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openContactModal: () => dispatch(openContactModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
