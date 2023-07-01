const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const sendEmail = require('./src/settings/mailer.setup');

const userRouter = require('./src/routes/user.router');
const sessionRouter = require('./src/routes/session.router');
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/session', sessionRouter);

const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('HI!'));
app.listen(port, () => {
    console.log(`Listening on port:${port}!`);

})

//sendEmail('stadey33@gmail.com', 'This is the subject!', 'tralalallalalala')