import axios from 'axios';

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get('http://localhost:5001/api/user/getuser');
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const PostContact = async (values) => {
  try {
    await axios.post('http://localhost:5001/api/user/adduser', { ...values });
  } catch (error) {
    console.error(error);
  }
};

export const updateContact = async (id, values) => {
  try {
    await axios.put(`http://localhost:5001/api/user/updateuser/${id}`, values);
  } catch (error) {
    console.error(error);
  }
};

export const deleteContact = async (id) => {
  try {
    await axios.delete(`http://localhost:5001/api/user/deleteuser/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const getUniqueUser = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:5001/api/user/getuser/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
