const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ success: true, message: 'Test-Teknis-Maganghub REST API is running' });
});

app.use('/users', usersRouter);


app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

//Run for local development
/*const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});*/

module.exports = app;