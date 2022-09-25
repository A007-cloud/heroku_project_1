const express = require('express');

const app = express();

app.use(express.json());

app.get('/', function (req, res) {
  res.json('Hello World');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
