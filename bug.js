const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is a minimal express app.  The bug is that if you add a large number of routes,
//the app will become slow to start, and might even crash due to memory issues.