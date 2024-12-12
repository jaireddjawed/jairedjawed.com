const express = require('express');
const path = require('path');
const app = express();
const sendgrid = require('@sendgrid/mail');
const axios = require('axios').default;
const fs = require('fs');

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv');
  dotenv.config();
}

if (process.env.SENDGRID_API_KEY !== undefined) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/frontend/build')));

const port = process.env.PORT || 3001;

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message, recaptchaToken } = req.body;

  if (!name || !email || !subject || !message || !recaptchaToken) {
    res.status(400).send({ message: 'Missing required fields' });
    return;
  }

  try {
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`);

    console.log(recaptchaResponse.data);
    if (!recaptchaResponse.data || !recaptchaResponse.data.success) {
      throw new Error('Recaptcha failed');
    }

    if (process.env.SENDGRID_API_KEY === undefined) {
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
    }

    res.status(200).send('Successfully sent email!');
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  if (fs.existsSync(path.join(__dirname, '/frontend/build/index.html'))) {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
  } else {
    res.send('Build not found.');
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
