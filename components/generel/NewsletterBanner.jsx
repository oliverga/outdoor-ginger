import { Button } from "../ui/button";
import { Input } from "../ui/input";

function NewsletterBanner({ title, subtitle }) {
  return (
    <section className="h-[50vh] bg-ogPrimary flex flex-col items-center justify-evenly text-center px-4 py-6">
      <div className=" space-y-4">
        <h1 className="font-display font-bold uppercase text-5xl md:text-7xl text-ogPrimary-lightest m-0">
          {title}
        </h1>
        <h2 className=" font-display text-ogPrimary-lighter text-2xl font-medium m-0">
          {subtitle}
        </h2>
      </div>
      <p className="text-ogPrimary-lightest max-w-lg text-lg leading-relaxed">
        Subscribe to get interesting stories, field reports, and other goodies
        straight to your inbox.
      </p>
      <form
        action=""
        className="flex flex-col md:flex-row gap-4 items-center w-full max-w-xs md:max-w-md"
      >
        <Input
          type="email"
          placeholder="Your email address"
          className="bg-ogPrimary placeholder:text-ogPrimary-lightest text-ogPrimary-lightest border-ogPrimary-lighter focus-visible:ring-0 focus-visible:ring-offset-0"
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
