import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <h1> Landing Page </h1>
      <p> This is the landing page. </p>
      <p> It is public. </p>
      <div>
        <Link href="/sign-in">
          <Button>Sign-In</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};
export default LandingPage;
