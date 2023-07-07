import * as yup from 'yup';

const userPatchSchema = yup.object({
    firstName: yup.string().required().min(3).matches(/^[a-zA-Z]+$/gm),
    lastName: yup.string().required().min(3).matches(/^[a-zA-Z]+$/gm),
    email: yup.string().required().min(3).email(),
})

export default userPatchSchema;