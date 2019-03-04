import axios from 'axios';
import constantsService from './constants.service';

const createProjectRequest = async ({ name, company, email, number, location, budget, description, marketing }) => {
  const params = {
    full_name: name,
    company: company,
    email: email,
    phone_number: number,
    location: location,
    budget: budget,
    description: description,
    marketing_allowed: marketing,
  };
  const response = await timeoutTest(params)
  //axios.post(constantsService.PROJECT_REQUESTS_URL, params);
  return  response.data;
}

function timeoutTest(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(params);
    }, 5000);
  });
}


export default {
  createProjectRequest,
}
