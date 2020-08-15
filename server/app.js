const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.cf26c.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`);
mongoose.connection.once('open', ()=> {
    console.log('connected to the database');
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, ()=> {
    console.log('now listening for request on port 4000')
});

