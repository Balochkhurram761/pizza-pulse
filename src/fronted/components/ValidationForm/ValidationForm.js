import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm password is required"),
});

export default validationSchema;



export const validationSchema1 = Yup.object().shape({
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email plz register First"),
    password: Yup.string()
        .required("passowrdo is required")


})