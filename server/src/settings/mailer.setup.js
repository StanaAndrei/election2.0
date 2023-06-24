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
        extName: '.html',
        partialsDir: res,
        defaultLayout: false
    },
    viewPath: res,
    extName: '.handlebars'
}

const transporter = nodemailer.createTransport(transOptions);
transporter.use('compile', hbs(handleBarOptions))

transporter.verify().then(console.log).catch(console.error);

const mailOptions = {

}
/*
transporter.sendMail({
    from: 'testmailer691337@gmail.com',
    to: 'stadey343@gmail.com',
    subject: 'test subject',
    template: 'activate',
    context: {
        name: 'AndrewSt'
    }
}, (err, info) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Email sent: ' + info.response);
    }
})//*/

function sendEmailFromTemp(temp, to, subject, context) {
    
}

module.exports = {
    sendEmailFromTemp,
}