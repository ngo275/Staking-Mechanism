const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
// const db = require('./src/models');
let db = ''

const middleware = require('./src/middleware');
const v1 = require('./src/v1');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  if (process.env.ENV === 'local') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

app.use(middleware({ db }));

app.use('/api/v1', v1({ db }));

const PORT = process.env.PORT || 8081;

console.log(PORT)
// app.set('port', process.env.PORT || 8080)
// http.createServer(app).listen(app.get('port'), () => {
//   console.log('Express server listening on port ' + app.get('port'))
// mongoose.connect('mongodb://localhost/nomad', { useNewUrlParser: true })
// })

app.listen(PORT);
