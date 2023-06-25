import Copyright from "common/components/copyright/Copyright";
import SignInForm from "components/signInForm/SignInForm";

export default function LoginScreen() {
  return (
    <div>
      <SignInForm />
      <Copyright marginTop={8} />
    </div>
  );
}
