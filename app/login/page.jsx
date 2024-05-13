import { Label } from "@/components/ui/label";
import { login, signup } from "./actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <form className="flex flex-col gap-4">
        <div>
          <Label htmlFor="email">Email:</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password:</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <div className="flex justify-between">
          <Button formAction={login}>Log in</Button>
          <Link href="/signup">
            <Button variant="outline">Sign up</Button>
          </Link>
        </div>
      </form>
    </main>
  );
}
