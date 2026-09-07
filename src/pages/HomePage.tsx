import { Link } from "react-router";

export function HomePage() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-4 text-xl font-semibold">Home</h1>
      <p>
        Internal tools for reviewing a domain&apos;s email authentication. Start
        with the{" "}
        <Link to="/domain-score" className="underline">
          domain score
        </Link>{" "}
        lookup.
      </p>
    </main>
  );
}
