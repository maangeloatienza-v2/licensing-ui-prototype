import React from 'react';
import CartItem from './cartItem';
import {
  Container,
  Row,
  Col,
  Button,
  Badge,
  Card,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

const Cart = () => {
  return (
    <Row>
      <Col xs={{size:12}} sm={{size:12}} md={{size: 7}} lg={{size:5}} className='mb-4 mt-3'>
        <h4 className='d-flex justify-content-between align-items-center mb-3'>
          <span>Your Cart</span>
          <Badge color='secondary' pill>
            <span>3</span>
          </Badge>
        </h4>
        <ListGroup className='mb-3'>
          <CartItem/>
        </ListGroup>
      </Col>
    </Row>
  );
}

export default Cart;