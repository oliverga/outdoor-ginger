import Link from "next/link";
import { Button } from "../ui/button";

export default function MemberBanner({ title, description, buttonText }) {
  return (
    <article className="bg-ogPrimary-dark px-8 py-24 flex flex-col gap-12 items-center">
      <h2 className="font-display text-5xl font-bold text-ogPrimary-lightest uppercase">
        {title}
      </h2>
      <p className="text-lg text-ogPrimary-lighter">{description}</p>
      <Link href="/signup">
        <Button
          variant="primary"
          className="bg-ogPrimary-lighter text-ogPrimary-darkest hover:bg-ogPrimary-light"
        >
          {buttonText}
        </Button>
      </Link>
    </article>
  );
}
