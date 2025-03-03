import express from 'express';

const router = express.Router();
let visitCount = 0;

router.get('/', (req, res) => {
  console.log(`Посещений маршрута /users: ${visitCount += 1}`);
  res.send('<a href="/">Home</a>');
})

export default router;