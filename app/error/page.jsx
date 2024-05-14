import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-4">
      <p>Sorry, something went wrong</p>
      <Link href="/">
        <Button variant="outline" className>
          Go back home
        </Button>
      </Link>
    </main>
  );
}
