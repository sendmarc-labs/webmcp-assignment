import { fixtureFor } from "../fixtures.ts";

const FIXTURE_DELAY_MS = Number(import.meta.env.VITE_FIXTURE_DELAY || 0);

export async function getScore(domain: string): Promise<unknown> {
  if (FIXTURE_DELAY_MS > 0) {
    await new Promise((resolve) => setTimeout(resolve, FIXTURE_DELAY_MS));
  }
  return fixtureFor(domain);
}
