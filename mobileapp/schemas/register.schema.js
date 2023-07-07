import * as yup from 'yup';

const registerSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
        .min(6)
        .max(50)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/s, 'Passwords must have 1 lower/upper letter, nr, special char'),
    cpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match!'),
    firstName: yup.string().required().matches(/^[a-zA-Z]+$/gm),
    lastName: yup.string().required().matches(/^[a-zA-Z]+$/gm)
})

export default registerSchema;