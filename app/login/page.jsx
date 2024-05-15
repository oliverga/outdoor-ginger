import { Label } from "@/components/ui/label";
import { login } from "@/lib/supabase/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }

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
        <Button formAction={login}>Log in</Button>

        <div className="flex flex-col items-center gap-0 mt-2">
          <p className="text-sm">Not a member?</p>{" "}
          <Link href="/membership">
            <Button variant="signup" className="font-normal flex flex-col">
              Sign up
            </Button>
          </Link>
        </div>
      </form>
    </main>
  );
}
