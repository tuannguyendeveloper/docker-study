import express from 'express';

const router = new express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
export default router;
