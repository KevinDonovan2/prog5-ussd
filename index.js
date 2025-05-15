const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur votre serveur Express !');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
