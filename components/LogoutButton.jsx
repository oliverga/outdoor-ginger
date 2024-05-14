"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/client";
import useAuthStore from "@/store/authStore";

const supabase = createClient();

export default function LogoutButton() {
  const router = useRouter();

  function logout() {
    supabase.auth.signOut();
    router.push("/");
  }
  return <Button onClick={logout}>Log out</Button>;
}
