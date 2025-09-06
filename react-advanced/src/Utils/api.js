import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers : {
    'Authorization' : 'Bearer <Token>',
    'Content-Type' : 'application/json'
  }
})

// Before Request Taska 'axios' replaced by 'api'
api.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;   // 🔑 must return request
},
(config) => {
  const token = localStorage.getItem('token')
  if(token){
    config.headers.Authorization = `Brearer ${token}`
  }
} ,
((error) => {
  console.log('Request Error ',error);
  return Promise.reject(error);
})
);
// Before Response Task
api.interceptors.response.use(response => {
  console.log('Starting Response', response);
  return response;   // 🔑 must return request
});

export default api;













/* Mistakes make a person perfect */
/* Your Best Teacher is Your Last Mistake */