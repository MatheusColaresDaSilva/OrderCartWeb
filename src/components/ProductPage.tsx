import React from 'react';
import FabButton from './FabButton';
import { FaAddressCard } from 'react-icons/fa';
import ListProducts from './ListProducts';

const ProductPage: React.FC = () => {
  return (
    <>
      <ListProducts />
      <FabButton options={[
            {label: 'Create', value: <FaAddressCard/>,  action: ()=> alert('Create')},
          ]}/>
    </>
  );
};

export default ProductPage;