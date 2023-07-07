import * as yup from 'yup';

const loginSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required()
        .min(6)
        .max(50)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/g)
})

export default loginSchema;