import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);


// 36MINUTOS

app.listen(3333);
