import { useState, type FormEvent } from "react";
import { fixtureFor } from "./fixtures.ts";

const FIXTURE_DELAY_MS = Number(import.meta.env.VITE_FIXTURE_DELAY || 0);

type LookupState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ok"; data: unknown };

async function fetchScore(domain: string): Promise<unknown> {
  if (FIXTURE_DELAY_MS > 0) {
    await new Promise((resolve) => setTimeout(resolve, FIXTURE_DELAY_MS));
  }
  return fixtureFor(domain);
}

export function App() {
  const [domain, setDomain] = useState("");
  const [lookup, setLookup] = useState<LookupState>({ status: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = domain.trim();
    if (!value) {
      setLookup({ status: "error", message: "Enter a domain." });
      return;
    }

    setLookup({ status: "loading" });
    try {
      const data = await fetchScore(value);
      setLookup({ status: "ok", data });
    } catch (error) {
      setLookup({
        status: "error",
        message: error instanceof Error ? error.message : "Lookup failed.",
      });
    }
  }

  return (
    <main className="mx-auto max-w-3xl p-6 font-sans text-zinc-900">
      <h1 className="mb-4 text-xl font-semibold">Domain score</h1>

      <form onSubmit={onSubmit} className="mb-6 flex gap-2">
        <input
          name="domain"
          type="text"
          value={domain}
          onChange={(event) => setDomain(event.target.value)}
          placeholder="example.com"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          className="min-w-0 flex-1 border border-zinc-400 px-2 py-1"
        />
        <button
          type="submit"
          disabled={lookup.status === "loading"}
          className="border border-zinc-700 bg-zinc-800 px-3 py-1 text-white disabled:opacity-50"
        >
          Look up
        </button>
      </form>

      {lookup.status === "loading" ? <p>Loading…</p> : null}

      {lookup.status === "error" ? (
        <p className="text-red-700">{lookup.message}</p>
      ) : null}

      {lookup.status === "ok" ? (
        <pre className="overflow-auto border border-zinc-300 bg-zinc-50 p-3 text-xs">
          {JSON.stringify(lookup.data, null, 2)}
        </pre>
      ) : null}
    </main>
  );
}
