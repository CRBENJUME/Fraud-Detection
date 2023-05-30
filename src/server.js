import express from 'express';
import multer from 'multer';
import { rename } from 'fs';

const app = express();
const upload = multer({ dest: './documents' }); // Directorio donde se guardarán los archivos

app.post('/upload', upload.single('file'), (req, res) => {
  const { file } = req;

  if (!file) {
    return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
  }

  const oldPath = file.path;
  const newPath = `./documents/${file.originalname}`; // Ruta final donde se guardará el archivo

  rename(oldPath, newPath, (error) => {
    if (error) {
      console.error('Error al guardar el archivo:', error);
      return res.status(500).json({ error: 'Error al guardar el archivo' });
    }

    res.json({ message: 'Archivo guardado exitosamente' });
  });
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
