const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');
const port = require('./config/config.json').port;

const app = express();

app.use(cors());
app.use(routes);

app.listen(port, ()=> {
    console.log("LISTENING ON PORT: ", port);
});