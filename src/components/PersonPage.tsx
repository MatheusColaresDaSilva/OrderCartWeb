import React from 'react';
import ListPeople from './ListPeople';
import FabButton from './FabButton';
import { FaAddressCard } from 'react-icons/fa';

const PersonPage: React.FC = () => {
  return (
    <>
      <ListPeople />
      <FabButton options={[
            {label: 'Create', value: <FaAddressCard/>,  action: ()=> alert('Create')},
          ]}/>
    </>
  );
};

export default PersonPage;