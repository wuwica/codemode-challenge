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
  const response = await axios.post(constantsService.PROJECT_REQUESTS_URL, params);
  return response.data;
}

export default {
  createProjectRequest,
}
