import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../api/contact';
import { setContact } from '../../store/contactSlice';
import CardContact from './CardContact';

const ListContact = () => {
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const getContact = async () => {
    try {
      const data = await fetchContacts();
      if (data) {
        dispatch(setContact(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div>
      {contact.map((e) => (
        <CardContact key={e._id} users={e} getContact={getContact} />
      ))}
    </div>
  );
};

export default ListContact;
