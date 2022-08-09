const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// express middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// direct server to the routes/index.js file (which acts as a hub for all server endpoints)
app.use(routes);


app.listen(PORT, () => console.log(`API server now on ${PORT}`));