const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//Routes
const chamadosRoutes = require('./routes/api/chamados');
const processosRoutes = require('./routes/api/processos');

const app = express();

//BodyParser Middleware
app.use(express.json());

//Conectar ao mongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err)
);

//Use routes
app.use('/api/chamados', chamadosRoutes);
app.use('/api/processos', processosRoutes);

/*app.get('/', (req,res) =>{
    res.send('Hello World')
})*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));



//miguel - 123
//j04QF3kUvS455iHO