import {
  OPEN_CONTACT_MODAL,
  CLOSE_CONTACT_MODAL,
  SET_NAME,
  SET_COMPANY,
  SET_EMAIL,
  SET_NUMBER,
  SET_LOCATION,
  SET_BUDGET,
  SET_DESCRIPTION,
  SET_MARKETING,
  CLEAR_FORM,
  SET_ERROR,
  CLEAR_ERROR,
  SET_SUBMITTED,
  CLEAR_SUBMITTED,
} from 'actions/ContactModal.actions';

export default (
  state = {
    modalOpen: false,
    name: '',
    company: '',
    email: '',
    number: '',
    location: '',
    budget: '',
    description: '',
    marketing: true,
    error: false,
    submitted: false,
  },
  action,
) => {
  switch(action.type) {
    case OPEN_CONTACT_MODAL:
      return {
        modalOpen: true,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case CLOSE_CONTACT_MODAL:
      return {
        modalOpen: false,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_NAME:
      return {
        modalOpen: state.modalOpen,
        name: action.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_COMPANY:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: action.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_EMAIL:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: action.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_NUMBER:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: action.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_LOCATION:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: action.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_BUDGET:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: action.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_DESCRIPTION:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: action.description,
        marketing: state.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_MARKETING:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: action.marketing,
        error: state.error,
        submitted: state.submitted,
      };
    case CLEAR_FORM:
      return {
        modalOpen: state.modalOpen,
        name: '',
        company: '',
        email: '',
        number: '',
        location: '',
        budget: '',
        description: '',
        marketing: true,
        error: state.error,
        submitted: state.submitted,
      };
    case SET_SUBMITTED:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: true,
      };
    case CLEAR_SUBMITTED:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: state.error,
        submitted: false,
      };
    case SET_ERROR:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: true,
        submitted: state.submitted,
      };
    case CLEAR_ERROR:
      return {
        modalOpen: state.modalOpen,
        name: state.name,
        company: state.company,
        email: state.email,
        number: state.number,
        location: state.location,
        budget: state.budget,
        description: state.description,
        marketing: state.marketing,
        error: false,
        submitted: state.submitted,
      };
    default:
      return state;
  }
}
