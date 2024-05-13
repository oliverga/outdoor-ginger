const { createServerClient } = require("@supabase/ssr");
const { cookies } = require("next/headers");

export function createClient() {
    const cookieStore = cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: cookieStore,
        },
    ); 
}