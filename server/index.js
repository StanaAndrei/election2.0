const express = require('express');
const userRouter = require('./src/routes/user.router');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/user', userRouter);

const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('HI!'));
app.listen(port, () => {
    console.log(`Listening on port:${port}!`);
})