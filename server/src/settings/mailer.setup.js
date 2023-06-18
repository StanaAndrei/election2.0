var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport( {
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'testmailer691337@gmail.com',
        pass: 'upgzpqolcqsvgttq',
    },
});
transporter.verify().then(console.log).catch(console.error);
console.log('mailer setup');

function sendEmail(to, subject, text) {
    transporter.sendMail({
        from: 'testmailer691337@gmail.com',
        to: to,
        subject: subject,
        text: text
    }, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

function sendEmailHTML(to, subject, html) {
    transporter.sendMail({
        from: 'testmailer691337@gmail.com',
        to: to,
        subject: subject,
        html: html
    }, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

module.exports = {
    sendEmail,
    sendEmailHTML
}