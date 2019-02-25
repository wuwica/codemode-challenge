import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import testPage from './TestPage.reducer';
import contactModal from './ContactModal.reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  testPage,
  contactModal,
})
