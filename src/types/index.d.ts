import { ConfirmationResult, RecaptchaVerifier } from "firebase/auth";

export {};

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
  }
}

declare module "*.json" {
  const value: any;
  export default value;
}
