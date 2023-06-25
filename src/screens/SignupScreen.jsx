import SignUpForm from "components/signUpForm/SignUpForm";
import Copyright from "common/components/copyright/Copyright";

export default function SignupScreen() {
  return (
    <div>
      <SignUpForm />
      <Copyright marginTop={6} />
    </div>
  );
}
