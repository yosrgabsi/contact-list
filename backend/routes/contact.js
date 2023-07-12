const express = require('express');
const contactRouter = express.Router();
const ContactSchema = require('../model/contact');

contactRouter.get('/getuser', async (req, res) => {
  try {
    const contc = await ContactSchema.find();
    res.status(200).json({ msg: 'This is your user list', contc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

contactRouter.post('/adduser', async (req, res) => {
  try {
    const newContact = new ContactSchema(req.body);
    await newContact.save();
    res.status(200).json({ msg: 'You added a new contact', newContact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

contactRouter.put('/updateuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await ContactSchema.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
    if (!updateuser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ msg: 'User updated successfully', updateuser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

contactRouter.delete('/deleteuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletcont = await ContactSchema.findByIdAndDelete(id);
    if (!deletcont) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

contactRouter.get('/getuser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getuniqueuser = await ContactSchema.findById(id);
    if (!getuniqueuser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ msg: 'User found', getuniqueuser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = contactRouter;
