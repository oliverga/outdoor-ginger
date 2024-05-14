import LogoutButton from "@/components/LogoutButton";

const { createClient } = require("@/lib/supabase/server");
const { redirect } = require("next/navigation");

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.error("No user found" + error);
    redirect("/login");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center prose mx-auto prose-h1:font-bold">
      <h1>Secret profile</h1>
      <p>Hello {data.user.email}</p>
      <LogoutButton />
    </main>
  );
}
