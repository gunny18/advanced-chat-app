import { body } from "express-validator";
import { AVAILABLE_GENDERS } from "../../constants";

export const userSignUp = () => {
  return [
    body("fullName").trim().notEmpty().withMessage("fullName is required"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username must be atleast 3 characters"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isStrongPassword({
        minLength: 5,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage("Not a strong password"),
    body("gender").isIn(AVAILABLE_GENDERS).withMessage("Invalid gender"),
  ];
};
