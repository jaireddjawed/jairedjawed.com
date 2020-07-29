const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(path.join(__dirname, '/../frontend/build'));

const port = process.env.PORT || 3001;

app.post('/send-email', async (req, res) => {

});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
