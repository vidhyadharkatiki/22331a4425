const express = require('express');
const crypto = require('crypto');
const url = require('url');
const app = express();
const cors = require('cors');
const fs = require('fs');
const users = require('./statics.json');
const PORT = 4000;

app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

app.use(express.json());
const date = new Date();


  app.post('/shorturls', createid);
  
  
  app.get('/short',);

  app.listen(PORT,() => console.log(`server is running on http://localhost:${PORT}/`));
