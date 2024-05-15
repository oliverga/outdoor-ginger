"use client";

import { createClient } from "@/lib/supabase/client";

import useAuthStore from "@/lib/store/authStore";
import { useEffect } from "react";

export default function AuthSubscriber() {
  const supabase = createClient();
  const { setUser } = useAuthStore();

  useEffect(() => {
    const { data, error } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth event:", event, "Session:", session);

        if (error) {
          console.error("Error in onAuthStateChange:", error);
          return;
        }

        setTimeout(() => {
          if (event === "INITIAL_SESSION") {
            setUser(session?.user || null);
          } else if (event === "SIGNED_IN") {
            setUser(session.user);
          } else if (event === "SIGNED_OUT") {
            setUser(null);
          } else if (event === "PASSWORD_RECOVERY") {
            // handle password recovery event
          } else if (event === "TOKEN_REFRESHED") {
            // handle token refreshed event
          } else if (event === "USER_UPDATED") {
            setUser(session.user);
          } else {
            setUser(session?.user || null);
          }
        }, 0);
      },
    );

    if (error) {
      console.error("Subscription error:", error);
    }

    return () => {
      if (data) {
        data.subscription.unsubscribe();
      }
    };
  }, [supabase, setUser]);

  return null;
}
