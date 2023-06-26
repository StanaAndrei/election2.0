var nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path')

const transOptions = {
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'testmailer691337@gmail.com',
        pass: 'upgzpqolcqsvgttq',
    },
};

const res = path.resolve(process.cwd() + '/src/views')
const handleBarOptions = {
    viewEngine: {
        extName: '.hbs',
        partialsDir: res,
        defaultLayout: false
    },
    viewPath: res,
    extName: '.hbs'
}

const transporter = nodemailer.createTransport(transOptions);
transporter.use('compile', hbs(handleBarOptions))

transporter.verify().then(console.log).catch(console.error);

function sendEmailFromTemp(to, subject, template, context) {
    //console.log(`${to}: ${subject}\n`, context);
    transporter.sendMail({
        from: 'testmailer691337@gmail.com',
        to,
        subject,
        template,
        context
    }, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })//*/
}

module.exports = {
    sendEmailFromTemp,
}