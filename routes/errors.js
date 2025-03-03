import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const responses = [
    { status: 200, data: { message: 'Успешный ответ' } }, // Успех
    { status: 400, data: { error: 'Неверный запрос' } },  // Bad Request
    { status: 401, data: { error: 'Не авторизован' } },   // Unauthorized
    { status: 403, data: { error: 'Доступ запрещён' } },  // Forbidden
    { status: 404, data: { error: 'Ресурс не найден' } }, // Not Found
    { status: 500, data: { error: 'Внутренняя ошибка сервера' } }, // Internal Server Error
  ];

  // Случайный выбор из массива
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];

  // Отправка ответа с соответствующим статусом
  res.status(randomResponse.status).json(randomResponse.data);
});

export default router;