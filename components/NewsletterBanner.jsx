import { Button } from "./ui/button";
import { Input } from "./ui/input";

function NewsletterBanner() {
  return (
    <section className="h-[50vh] bg-ogPrimary flex flex-col items-center justify-evenly text-center px-4 py-6">
      <div className=" space-y-3">
        <h1 className="text-6xl md:text-8xl font-bold text-ogPrimary-lightest">
          Campfire Chronicles
        </h1>
        <h2 className=" font-display text-ogPrimary-lighter text-xl font-medium">
          The Outdoor Ginger Newsletter
        </h2>
      </div>
      <p className="text-ogPrimary-lighter max-w-lg text-lg">
        Subscribe to my newsletter to get interesting stories, field reports,
        and other goodies straight to your inbox.
      </p>
      <form action="" className="flex flex-col md:flex-row gap-4 items-center">
        <Input
          type="email"
          placeholder="Your email address"
          className="bg-ogPrimary placeholder:text-ogPrimary-lightest text-ogPrimary-lightest border-ogPrimary-lighter w-max outline"
          required
        />
        <Button
          size="lg"
          className="bg-ogPrimary-dark text-ogPrimary-lightest hover:bg-ogPrimary-darker"
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
}

export default NewsletterBanner;
