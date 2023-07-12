import React, { useState } from 'react';
import './AddContact.css';
import { PostContact } from '../../api/contact';
import { useNavigate } from 'react-router';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [age, setAge] = useState(0);
  const navigate = useNavigate();

  const handleAdd = async (values) => {
    await PostContact(values);
    navigate('/list');
  };

  return (
    <div>
      <div className='test'>
        <form id='login-form' className='login-form' autoComplete='off'>
          <h1>Add contact Form</h1>
          <div>
            <label className='label-email'>
              <input
                type='text'
                className='text'
                name='name'
                placeholder='Name'
                tabIndex='1'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className='required'>Name</span>
            </label>
          </div>
          <div>
            <label className='label-email'>
              <input
                type='number'
                className='text'
                name='age'
                placeholder='Age'
                tabIndex='2'
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <span className='required'>Age</span>
            </label>
          </div>
          <div>
            <label className='label-email'>
              <input
                type='text'
                className='text'
                name='adresse'
                placeholder='Adresse'
                tabIndex='3'
                required
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
              />
              <span className='required'>Adresse</span>
            </label>
          </div>
          <div>
            <label className='label-email'>
              <input
                type='email'
                className='text'
                name='email'
                placeholder='Email'
                tabIndex='4'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className='required'>Email</span>
            </label>
          </div>
          <div className='email'>
            <button type='button' onClick={() => handleAdd({ name, age, adresse, email })}>
              Add New Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
