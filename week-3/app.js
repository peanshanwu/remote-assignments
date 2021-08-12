// require the exprees module
const express = require('express');

// call the express function
const app = express();

// create a route
app.get('/', (request, response) => {
    response.send('express server runs!!');
})

// set up the express server
// app.listen(3000);
const port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});