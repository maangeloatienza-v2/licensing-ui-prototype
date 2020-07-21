export const getToken = () => {
  const tokenStr = localStorage.getItem('token') ? localStorage.getItem('token') : null
  return tokenStr;
}
 
// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
 
// set the token and user from the session storage
export const setUserSession = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

export const verifyUser = (user) => {
  

  return localStorage.getItem('user') ? localStorage.getItem("user") : localStorage.getItem('guest');
}