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
    <main className="min-h-screen  flex flex-col justify-center items-center md:flex-row md:justify-between gap-20 max-w-5xl mx-auto px-8  ">
      <form className="flex flex-col gap-4  md:w-full">
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
      <div className="prose px-8 w-full ">
        <h1 className="text-center md:text-start font-bold">Membership?</h1>
        <div className="flex flex-col gap-4 md:-mt-8">
          <p className="text-center md:text-start">
            The membership is a way to support the community and the project, as
            well as to get access to special discounts, exclusive content and
            more.
          </p>
        </div>
        <div className="flex md:flex-wrap justify-evenly md:justify-between md:px-0 gap-6 my-6 row-span-2 whitespace-nowrap ">
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
          <div className="flex flex-col gap-1 items-center  ml-4">
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
        <div className="flex justify-center md:justify-end  ">
          <Button href="/membership" variant="link" className="">
            Learn more
          </Button>
        </div>
      </div>
    </main>
  );
}
