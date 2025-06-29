import { object, string, number, date, ref } from "yup";
import createError from "../utils/create.error.util.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobileRegex = /^[0-9]{10,15}$/;

export const registerSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  identity: string().test(
    "identity check",
    "Identity must be a valid email or mobile number",
    (value) => {
      if (!value) {
        return true;
      }
      return emailRegex.test(value) || mobileRegex.test(value); // if have email or mobile is pass   //same .matches but can't use 2
    }
  ),
  password: string().min(4).required(),
  confirmPassword: string().oneOf(
    [ref("password")],
    `confirmPassword must match password`
  ),
  email: string().email("must an eamil "),
  // email: string().email('must an eamil ' , val => emailRegex.test(val)),
  mobile: string().matches(mobileRegex, `invalid mobile phone`),
})
  .noUnknown()
  .transform((value) => {
    if (value.email || value.mobile) {
      delete value.identity;
      return value;
    }
    const newValue = {
      ...value,
      [emailRegex.test(value.identity) ? "email" : "mobile"]: value.identity,
    };
    delete newValue.identity;
    return newValue;
  })
  .test(
    "require-identity-or-mobile-or-email",
    "At least one of identity, email, or mobile must be provided",
    (value) => {
      return !!(value.identity || value.email || value.mobile);   
    }
  );

export const validate = (schema, options = {}) => {
	return async function (req, res, next) {
		try {
			const cleanBody = await schema.validate(req.body, { abortEarly: false, ...options })
			req.body = cleanBody
			next()
		} catch (err) {
			let errMsg = err.errors.join('|||')
			console.log(errMsg)
			createError(400, errMsg)
		}
	}
}