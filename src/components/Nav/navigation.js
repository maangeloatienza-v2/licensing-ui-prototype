import React, {useState} from 'react';
import UserContext from './../../context/userContext';
import { Link  } from 'react-router-dom';
import {getToken} from './../../utils/commons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
  Button,
  NavbarText
} from 'reactstrap';

const Navigation = ()=> {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <UserContext.Consumer>
      {
        context => (
          <Navbar color="light" light expand="lg">
            <NavbarBrand href="/">Licensing App</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar className='ml-auto'>
                  <NavItem className='mx-3'>
                    <NavbarText>
                      <Link to={'/'}>Home</Link>
                    </NavbarText>
                  </NavItem>
                  <NavItem className='mx-3'>
                    <NavbarText>
                     {
                        getToken() ?  <Link to={'/'} onClick={()=>{
                          context.logoutHandler();
                        }}>Logout</Link> :
                        <Link to={'/login'}>Login</Link>
                     }
                    </NavbarText>    
                  </NavItem>
                  <NavbarText>
                    <Link to={'/cart'}>
                      <Button size='sm' color='warning'>
                        <FontAwesomeIcon icon={faShoppingCart} color='white'/>
                          <Badge className='mx-1' color="warning" pill>
                              <span className='text-white'>3</span>
                          </Badge>
                      </Button>
                    </Link>
                  </NavbarText>
                </Nav>
              </Collapse>
          </Navbar>
        )
      }
    </UserContext.Consumer>
  );
}

export default Navigation;