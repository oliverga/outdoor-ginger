"use client";

import { createClient } from "@/lib/supabase/client";

import useAuthStore from "@/store/authStore";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

export default function AuthSubscriber() {
  const supabase = createClient();
  const toastShown = useRef({});
  const { setUser } = useAuthStore();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);

      if (!toastShown.current[event]) {
        if (event === "INITIAL_SESSION") {
          // handle initial session
          setUser(session?.user || null);
        } else if (event === "SIGNED_IN") {
          // handle sign in event
          setUser(session.user);
        } else if (event === "SIGNED_OUT") {
          // handle sign out event
          toast("You have been signed out");
          setUser(null);
        } else if (event === "PASSWORD_RECOVERY") {
          // handle password recovery event
          toast("Password recovery email sent");
        } else if (event === "TOKEN_REFRESHED") {
          // handle token refreshed event
        } else if (event === "USER_UPDATED") {
          // handle user updated event
          setUser(session.user);
        } else {
          setUser(session?.user || null);
        }
        toastShown.current[event] = true;
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [supabase, setUser]);

  return null;
}
