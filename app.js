const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Test CI AWS pour IABAKO v3!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
