const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Carpeta para tu frontend

// Simulación de base de datos en memoria
let reviews = [
  { name: "Ana", comment: "Excelente servicio!", rating: 5 },
  { name: "Luis", comment: "Muy buen trabajo", rating: 4 }
];

// Endpoint para obtener reseñas
app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

// Endpoint para enviar nueva reseña
app.post('/api/reviews', (req, res) => {
  const { name, comment, rating } = req.body;
  if (!name || !comment || !rating) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  const newReview = { name, comment, rating: Number(rating) };
  reviews.push(newReview);
  res.json({ message: 'Reseña agregada!', review: newReview });
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
