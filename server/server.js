import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Enable __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, '../dist')));

// Endpoint for form submissions
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form submission:', { name, email, message });
  res.status(200).send({ message: 'Your message has been received!' });
});

// Catch-all route for frontend routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});