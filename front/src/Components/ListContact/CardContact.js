import React from 'react';
import './CardContact.css';
import { useNavigate } from 'react-router';
import { deleteContact } from '../../api/contact';

const CardContact = ({ users, getContact }) => {
  console.log(users, 'users');
  const navigate = useNavigate();

  const navUpdate = () => {
    navigate(`/update/${users._id}`);
  };

  const handleDelete = async () => {
    await deleteContact(users._id);
    getContact();
  };

  return (
    <div className='hello'>
      <div className='container'>
        <div className='card'>
          <div className='imgBx'>
            <img src='https://d2pas86kykpvmq.cloudfront.net/images/humans-3.0/ava-1.png' alt='Avatar' />
          </div>
          <div className='contentBx'>
            <h2>{users.name}</h2>
            <div className='size'>
              <h3>Age:</h3>
              <span>{users.age}</span>
            </div>
            <div className='color'>
              <h3>Email:</h3>
              <span>{users.email}</span>
            </div>
            <div className='color'>
              <h3>Adresse:</h3>
              <span>{users.adresse}</span>
            </div>
            <button onClick={navUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
