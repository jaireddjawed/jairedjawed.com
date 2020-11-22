const express = require('express');
const path = require('path');
const app = express();
const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/frontend/build')));

const port = process.env.PORT || 3001;

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await sendgrid.send({
      to: 'me@jairedjawed.com',
      from: 'me@jairedjawed.com',
      subject: `Email from Portfolio Website: ${subject}`,
      text: `
        Name: ${name}
        Email Address: ${email}
        Message: ${message}
      `,
    });
    res.status(200).send('Successfully sent email!');
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
