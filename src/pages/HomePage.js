import React from 'react';
import UserForm from '../components/UserForm';
import Modal from '../components/Modal';

const HomePage = () => {
  return (
    <div className="homepage">
      <h2>Complete the Tasks</h2>
      <UserForm />
      <Modal />
    </div>
  );
};

export default HomePage;
