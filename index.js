const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('OK');
})

app.get('/ping', (req, res) => {
  res.send('pong!');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
