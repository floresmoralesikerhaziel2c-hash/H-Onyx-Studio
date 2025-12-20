// database.js

// Importa la función necesaria del SDK de Supabase
import { createClient } from '@supabase/supabase-js';

// --- CONFIGURACIÓN IMPORTANTE ---
// Reemplaza estos valores con tus propias credenciales de Supabase
const supabaseUrl = 'https://rbbkwfewssprejwurnkl.supabase.co'; // Ejemplo: TU_PROJECT_URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiYmt3ZmV3c3NwcmVqd3VybmtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYxODE2MTgsImV4cCI6MjA4MTc1NzYxOH0.2K-rwL44NPuQ19h8DhQKZBEuuL0ac9rF8UTmi3c90l8'; // Ejemplo: TU_ANON_PUBLIC_KEY
// ---------------------------------

// Inicializa el cliente de Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Función de ejemplo para insertar un nuevo usuario
async function insertNewUser(userData) {
  const { data, error } = await supabase
    .from('users') // Especifica el nombre de tu tabla
    .insert([userData]); // Pasa un objeto JS con los datos { username, email, password }

  if (error) {
    console.error('Error al insertar usuario:', error);
  } else {
    console.log('Usuario insertado exitosamente:', data);
  }
}

// Ejemplo de cómo llamar a la función con datos de prueba:
// (Puedes cambiar estos datos por los que necesites)
insertNewUser({
  username: 'usuario_prueba',
  email: 'prueba@ejemplo.com',
  password: 'hashdepasswordseguro'
});
