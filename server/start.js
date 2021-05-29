const app = require('./server.js');
var mongoose = require('mongoose');

const PORT = 3000;

mongoose.connect(`mongodb://localhost:27017/items`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
})