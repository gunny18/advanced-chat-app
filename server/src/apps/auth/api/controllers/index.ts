class AuthController {
  constructor() {}

  signUp() {
    return new Promise((resolve, reject) => {
      resolve("Sign in");
    });
  }
  login() {
    return new Promise((resolve, reject) => {
      resolve("Log in");
    });
  }
  logout() {}
}

export default AuthController;
