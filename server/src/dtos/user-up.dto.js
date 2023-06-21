const yup = require('yup');
const { string, number, date } = yup;

const UserUpDto = yup.object({
    firstName: string(),
    lastName: string(),
    email: string().email(),
}).noUnknown();

module.exports = UserUpDto;