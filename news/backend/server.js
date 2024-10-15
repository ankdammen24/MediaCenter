const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nyhetslista (i minnet, för demonstration)
let newsList = [
  { id: 1, title: "Nyhet 1", content: "Detta är innehållet i nyhet 1." },
  { id: 2, title: "Nyhet 2", content: "Detta är innehållet i nyhet 2." }
];

// Hämta alla nyheter
app.get('/api/news', (req, res) => {
  res.json(newsList);
});

// Publicera en ny nyhet
app.post('/api/news', (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    const newArticle = { id: newsList.length + 1, title, content };
    newsList.push(newArticle);
    res.json(newArticle);
  } else {
    res.status(400).send('Titel och innehåll krävs');
  }
});

// Redigera en nyhet
app.put('/api/news/:id', (req, res) => {
  const { id } = req.params;
  const { title
