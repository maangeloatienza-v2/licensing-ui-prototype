import React, {useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './context/userContext';

import Navigation from './components/Nav/navigation';
import RouterLinks from './components/Router/router';

import { ToastContainer, toast } from 'react-toastify';
import {CusToast} from './utils/toast';
import {login,logout} from './API/apiCall';
import {setUserSession,removeUserSession,getToken} from './utils/commons';

import {  
  Container,
  Row 
} from 'reactstrap';

toast.configure({
  autoClose: 2000,
  draggable: false,
  hideProgressBar: true,
  position: toast.POSITION.TOP_RIGHT
});

function App() {
  const [user,setUser] = useState({});

  const loginHandler = (e,body)=> {
    e.preventDefault();
    login(body).then(response => {
      let data = response.data;

      if(response.status === 200) {
        CusToast(data.message,true);
        setUserSession(data.token, data.data);
        setUser({
          token : data.token,
          email : data.data.email,
          first_name : data.data.first_name,
          last_name : data.data.last_name,
        });
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
      }

      if (response.status !== 200)  CusToast(data.message,false) ;

    });
  }

  const logoutHandler = () => {

    logout().then(response=> {
      CusToast(response.data.message,true);
      removeUserSession();
      setUser(null);
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    });
  }

  return (
    <div>
      <UserContext.Provider
        value={{
          user,
          loginHandler,
          logoutHandler
        }}>
        <Navigation/>
        <Container>
          <RouterLinks/>
        </Container>
        <ToastContainer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
