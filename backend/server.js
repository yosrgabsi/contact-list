const express = require('express');
const connectdb = require('./config/connectdb');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

connectdb()
  .then(() => {
    console.log('Database connected');
    app.use('/api/user', contactRouter);

    app.listen(port, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Server is running on port ${port}`);
      }
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
  });
