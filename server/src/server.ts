import express from 'express';

const app = express();

app.get('/users', (request, response) =>{
  console.log("meiras");

  // JSON

  response.json([
    'hellow',
    'friend',
    'or',
    'world'
  ])
});

app.listen(3333);
