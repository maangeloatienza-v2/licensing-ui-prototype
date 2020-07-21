import API from './../utils/api';

export function login(body){
  return API.post('/login',body)
    .then(response=> {
      console.log(response)

      return response;
    })
    .catch(error=>{
      return error.response;
    });
}

export function logout(){
  return API.post('/logout')
    .then(response => {
      
      return response;
    })
}