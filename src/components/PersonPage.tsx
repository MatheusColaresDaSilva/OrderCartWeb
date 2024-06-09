import React from 'react';
import ListPeople from './ListPeople';
import FabButton from './FabButton';

const PersonPage: React.FC = () => {
  return (
    <>
      <ListPeople />
      <FabButton options={[
            {label: 'Create', action: ()=> alert('Create')},
            {label: 'Nois', action: ()=> alert('Nois')}
          ]}/>
    </>
  );
};

export default PersonPage;