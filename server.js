import cors from 'cors';
import express from 'express';

// Маршруты
import errorsRouter from './routes/errors.js';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/errors', errorsRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Страница не найдена',
    error: '404 - Not Found',
    path: req.originalUrl,
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ошибка сервера');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
})
