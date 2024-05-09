import axios from 'axios';

const BASE_URL = 'https://ananya.itechpandas.com/public';

export const login = (email, password) => {
  return axios.post(`${BASE_URL}/api/login`, { email, password }, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};

export const signup = (name, email,password,dob,mobile) => {
  return axios.post(`${BASE_URL}/api/register`, { name,email, password ,dob,mobile}, {headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  });
};
