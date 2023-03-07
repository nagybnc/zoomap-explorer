export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp extends SignIn {
  cpassword: string;
}
