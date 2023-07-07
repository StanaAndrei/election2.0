import * as yup from 'yup';

const userPatchSchema = yup.object({
    firstName: yup.string().required().matches(/^[a-zA-Z]+$/gm),
    lastName: yup.string().required().matches(/^[a-zA-Z]+$/gm),
    email: yup.string().required().email(),
})

export default userPatchSchema;