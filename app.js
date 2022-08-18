const express = require('express');
const app = express();
app.use(express.json());

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

const menuRouter = require('./src/routes/menu-route');

app.use('/menu',menuRouter);

const {swaggerUi, specs} = require('./src/swagger/swagger-specs');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs,{explorer:true}));

app.listen(8001, ()=>console.log('listening on port 8001'));