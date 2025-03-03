import express from 'express';

const router = express.Router();
let visitCount = 0;

router.get('/', (req, res) => {
  console.log(`Посещений маршрута /: ${visitCount += 1}`);
  res.send('<a href="/users">Users</a>');
});

export default router;