import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container-shell">
        <div className="grid gap-5 border border-line bg-paper p-6 md:p-10">
          <p className="eyebrow text-ink/58">404</p>
          <h1 className="text-4xl font-black uppercase tracking-brutal md:text-6xl">Project not found.</h1>
          <p className="max-w-xl text-sm leading-7 text-ink/74">
            The link may have changed, or the project has not been published yet.
          </p>
          <Link
            href="/work"
            className="focus-ring inline-flex min-h-11 w-fit items-center justify-center border border-line px-5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors hover:border-ink hover:bg-accent/12"
          >
            Back to work
          </Link>
        </div>
      </div>
    </section>
  );
}
