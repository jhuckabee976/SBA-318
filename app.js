const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Custom logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); 
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

const creatureRoutes = require('./routes/creatureRoutes');
app.use('/', creatureRoutes);


// Custom error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).send('Something went wrong!');  
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


