import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center pt-32 pb-24 text-center">
      <p className="eyebrow justify-center">404</p>
      <h1 className="mt-6 text-display-lg font-extrabold text-navy text-balance">
        That page isn't here. <span className="serif-accent text-navy-700">Your next step can be.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-slate">The link may be old or mistyped. Head home, or start a conversation with the team.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg" arrow>
          Back to home
        </Button>
        <Button href="/contact" size="lg" variant="outline">
          Contact us
        </Button>
      </div>
    </section>
  );
}
