import { Label } from "@/components/ui/label";
import { signup } from "@/lib/supabase/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function SignupPage() {
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

        <Button formAction={signup}>Sign up</Button>

        <div className="flex flex-col items-center">
          <p className="text-sm">Already have an account?</p>{" "}
          <Link href="/login">
            <Button variant="link" className="font-normal flex flex-col">
              Log in
            </Button>
          </Link>
        </div>
      </form>
    </main>
  );
}
