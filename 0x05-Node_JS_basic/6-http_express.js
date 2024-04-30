const express = require('express');

const app = express();
app.listen(1245);

app.get('/', (req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

module.exports = app;
