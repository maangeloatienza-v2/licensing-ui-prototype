import React from 'react';
import { Route,Switch, Router } from 'react-router-dom';

import Body from './../body';
import Login from './../Forms/login';
import Cart from './../Cart/cart';

const RouterLinks = ()=> {
  return (
    <Switch>
      <Route exact path='/' component={Body}/>
      <Route path='/login' component={Login}/>
      <Route exact path='/cart' component={Cart} />
    </Switch>
  );
}

export default RouterLinks;