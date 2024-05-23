import Link from "next/link";
import { Button } from "@/components/ui/button";
const LandingPage = () => {
  return (
    <div>
      Landing Page(Unprotected)
      <div>
        <Link href="/sign-in">
          <Button className="">Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button className="">Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
