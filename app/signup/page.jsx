import { Label } from "@/components/ui/label";
import { signup } from "@/lib/supabase/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function SignupPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/");
  }

  return (
    <main className="min-h-screen md:min-h-max flex flex-col justify-center items-center md:grid grid-cols-2 md:items-start gap-32 md:gap-12 mt-64 max-w-5xl mx-auto px-8">
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

        <div className="flex flex-col items-center md:items-start gap-0 mt-2">
          <p className="text-sm">Already a member?</p>{" "}
          <Link href="/login">
            <Button
              variant="link"
              className="font-normal flex flex-col md:px-0"
            >
              Log in
            </Button>
          </Link>
        </div>
      </form>
      <section className="prose px-8 ">
        <h1 className="text-center md:text-start font-bold">Membership?</h1>
        <div className="flex flex-col gap-4 md:-mt-8">
          <p className="text-center md:text-start">
            The membership is a way to support the community and the project, as
            well as to get access to special discounts, exclusive content and
            more.
          </p>
        </div>
        <div className="flex md:flex-wrap justify-around md:justify-between md:px-0 gap-6 my-6 row-span-2 whitespace-nowrap ">
          <div className="flex flex-col gap-1 items-center ">
            <div className="aspect-square w-20 h-20 bg-ogPrimary p-6 rounded-full flex justify-center items-center">
              <Image
                src="/icons/health.svg"
                alt="Join the club"
                width={500}
                height={500}
                className="w-full h-full object-center"
              />
            </div>
            <h3 className="font-display capitalize text-xl text-ogPrimary-darker">
              health
            </h3>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="aspect-square w-20 h-20 bg-ogPrimary p-6 rounded-full flex justify-center items-center">
              <Image
                src="/icons/deStress.svg"
                alt="Join the club"
                width={500}
                height={500}
                className="w-full h-full object-center"
              />
            </div>
            <h3 className="font-display capitalize text-xl text-ogPrimary-darker">
              De-Stress
            </h3>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="aspect-square w-20 h-20 bg-ogPrimary p-6 rounded-full flex justify-center items-center">
              <Image
                src="/icons/simplicity.svg"
                alt="Join the club"
                width={500}
                height={500}
                className="w-full h-full object-center"
              />
            </div>
            <h3 className="font-display capitalize text-xl text-ogPrimary-darker">
              Simplicity
            </h3>
          </div>
        </div>
        <div className="flex justify-center md:justify-end pb-32">
          <Button href="/membership" variant="link">
            Learn more
          </Button>
        </div>
      </section>
    </main>
  );
}
