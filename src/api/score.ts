import { fixtureFor } from "../fixtures.ts";

export async function getScore(domain: string): Promise<unknown> {
  return fixtureFor(domain);
}
