const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection.js')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

/* The Xpert Learning Assistant AI chatbot told me how to use the sequelize.sync() method. */
sequelize.sync().then(() => {

    console.log("sequelize synchronization successful");

    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });

}).catch((error) =>{

    console.log(error)
});

