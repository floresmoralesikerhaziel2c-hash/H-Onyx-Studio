// saveData.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Función asíncrona principal para manejar la DB
async function run() {
  // Abrir la conexión con el archivo mi_web.db
  const db = await open({
    filename: './mi_web.db', // Ruta donde se creará o abrirá tu archivo .db
    driver: sqlite3.Database
  });

  // Asegúrate de que las tablas existan (puedes copiar el script de CREATE TABLE aquí o ejecutarlo una vez)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Tus datos de JavaScript (ejemplo de un objeto)
  const userData = {
    username: 'ejemplo_user',
    email: 'user@example.com',
    password: 'passwordSegura123'
  };

  // Guardar los datos en la tabla 'users'
  await db.run(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [userData.username, userData.email, userData.password]
  );

  console.log('Datos guardados exitosamente en mi_web.db');

  // Cerrar la conexión
  await db.close();
}

run();
