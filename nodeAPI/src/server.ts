import express from 'express';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json());

app.get('/user', (request, response) => {
  var users = ['Leon', 'André', 'José'];
  console.log(users)
  return response.status(200).json(users);
})

app.listen(3333); 