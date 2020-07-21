import React from 'react';
import {
  ListGroupItem
} from 'reactstrap';

const CartItem = () => {
  return (
    <>
      <ListGroupItem className='d-flex justify-content-between lh-condensed'>
        <div>
          <h6 className='my-0'>Product name</h6>
          <small className='text-muted'>license key</small>
        </div>
        <span className='text-muted'>$100</span>
      </ListGroupItem>
    </>
  );
}

export default CartItem;