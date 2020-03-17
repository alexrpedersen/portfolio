'use strict';

const express = require('express');
// const fs = require('fs'); //To be used later...

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}!`);
});