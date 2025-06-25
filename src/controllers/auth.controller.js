import prisma from "../config/prisma.config.js";
import checkIdentity from "../utils/check-Identity.util.js";
import createError from "../utils/create.error.util.js";
import bcrypt from "bcryptjs";

export async function register(req, res, next) {
  try {
    const { identity, firstName, lastName, password, confirmPassword } =
      res.body;
    //validation
    if (
      !(
        identity.trim() &&
        firstName.trim() &&
        lastName.trim() &&
        password.trim() &&
        confirmPassword()
      )
    ) {
      createError(400, "Please fill all data");
    }
    if (password !== confirmPassword) {
      createError(400, "check confirm password");
    }
    //// identity เป็น email หรือ mobile phone number : vheckIdentity(identity) => String : 'email' | 'mobile'
    const identityKey = checkIdentity(identity);

    // หา User   //findUniqe เร็วกว่า findFirst
    const foundUser = await prisma.user.findUnique({
      where: { [identityKey]: identity },
    });
    console.log(foundUser);
    if (foundUser) {
      createError(409, `Already have this user: ${identity}`);
    }

    const newUser = {
      [identityKey]: identity,
      password: await bcrypt.hash(password, 10),
      firstName: firstName,
      lastName: lastName,
    };

    const result = await prisma.user.create({ data: newUser });
    res.json({
      msg: "Register controller",
      result: result,
    });
  } catch (error) {
    next(error);
  }
}

export const login = (req, res, next) => {
  res.json({
    msg: "Login controller",
    body: req.body,
  });
};

export const getMe = async (req, res, next) => {
  let numUser = await prisma.user.count();
  console.log(numUser);
  createError(403, "Block");
  res.json({ msg: "Get me controller", numUser });
};
