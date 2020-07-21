import React,{useState} from 'react';
import UserContext from './../../context/userContext';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from 'reactstrap';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


  return (
    <UserContext.Consumer>
      {
        context => (
          <Container>
            <Row>
              <Col xs='10' sm='10' md='6' lg='5' className='mx-auto mt-5'>
                <Form>
                  <div className='mb-4'>
                    <FormGroup>
                      <Label for='emailInput'>Email Address</Label>
                      <Input 
                        type='text' 
                        id='emailInput' 
                        placeholder='Email address'
                        value = {email} 
                        onChange={(e)=> {
                          setEmail(e.target.value)
                        }}
                        autoFocus></Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for='passwordInput'>Password</Label>
                      <Input 
                        type='Password'
                        id='passwordInput'
                        placeholder='Password'
                        value={password}
                        onChange={(e)=>{
                          setPassword(e.target.value)
                        }}
                        ></Input>
                    </FormGroup>
                  </div>
                  <div className='d-flex justify-content-center' >
                    <Button 
                      className='col-12' 
                      color='primary'
                      size='lg'
                      onClick = {(e)=>{
                        context.loginHandler(e,{
                          email,
                          password
                        })
                      }}
                      >Login</Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        )
      }
    </UserContext.Consumer>
  );
}

export default Login;