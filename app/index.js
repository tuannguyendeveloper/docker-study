import express from 'express';
import route from './route';

const app = express();

app.use('/docker', route);
app.listen('3000', () => {
  console.log('Application running is port: 3000');
});
