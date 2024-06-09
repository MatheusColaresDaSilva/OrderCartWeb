import React from 'react';
import ListPeople from './ListPeople';
import FabButton from './FabButton';
import { FaAddressCard } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PersonPage: React.FC = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <ListPeople />
      <FabButton options={[
            {label: 'Create', value: <FaAddressCard/>,  action: ()=> navigate('/createPerson')},
          ]}/>
    </>
  );
};

export default PersonPage;