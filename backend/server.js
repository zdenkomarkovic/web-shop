const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from backend');
});

app.listen(4000, () => {
  console.log('server running...');
});
