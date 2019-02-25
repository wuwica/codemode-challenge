const OPEN_CONTACT_MODAL = 'OPEN_CONTACT_MODAL';
const openContactModal = () => {
  return {
    type: OPEN_CONTACT_MODAL,
  };
}

const CLOSE_CONTACT_MODAL = 'CLOSE_CONTACT_MODAL';
const closeContactModal = () => {
  return {
    type: CLOSE_CONTACT_MODAL,
  };
}

const SET_NAME = 'SET_NAME';
const setName = (name) => {
  return {
    type: SET_NAME,
    name,
  };
};

const SET_COMPANY = 'SET_COMPANY';
const setCompany = (company) => {
  return {
    type: SET_COMPANY,
    company,
  };
};

const SET_EMAIL = 'SET_EMAIL';
const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    email,
  };
};

const SET_NUMBER = 'SET_NUMBER';
const setNumber = (number) => {
  return {
    type: SET_NUMBER,
    number,
  };
};

const SET_LOCATION = 'SET_LOCATION';
const setLocation = (location) => {
  return {
    type: SET_LOCATION,
    location,
  };
};

const SET_BUDGET = 'SET_BUDGET';
const setBudget = (budget) => {
  return {
    type: SET_BUDGET,
    budget,
  };
};

const SET_DESCRIPTION = 'SET_DESCRIPTION';
const setDescription = (description) => {
  return {
    type: SET_DESCRIPTION,
    description,
  };
};

const SET_MARKETING = 'SET_MARKETING';
const setMarketing = (marketing) => {
  return {
    type: SET_MARKETING,
    marketing
  };
};

const CLEAR_FORM = 'CLEAR_FORM';
const clearForm = () => {
  return {
    type: CLEAR_FORM,
  };
};

const SET_ERROR = 'SET_ERROR';
const setError = () => {
  return {
    type: SET_ERROR,
  };
};

const CLEAR_ERROR = 'CLEAR_ERROR';
const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

const SET_SUBMITTED = 'SET_SUBMITTED';
const setSubmitted = () => {
  return {
    type: SET_SUBMITTED,
  };
};

const CLEAR_SUBMITTED = 'CLEAR_SUBMITTED';
const clearSubmitted = () => {
  return {
    type: CLEAR_SUBMITTED,
  };
};

export {
  OPEN_CONTACT_MODAL, openContactModal,
  CLOSE_CONTACT_MODAL, closeContactModal,
  SET_NAME, setName,
  SET_COMPANY, setCompany,
  SET_EMAIL, setEmail,
  SET_NUMBER, setNumber,
  SET_LOCATION, setLocation,
  SET_BUDGET, setBudget,
  SET_DESCRIPTION, setDescription,
  SET_MARKETING, setMarketing,
  CLEAR_FORM, clearForm,
  SET_ERROR, setError,
  CLEAR_ERROR, clearError,
  SET_SUBMITTED, setSubmitted,
  CLEAR_SUBMITTED, clearSubmitted,
};
