# webmcp-assignment

This app takes a domain name and shows the JSON returned by our scoring service. Clone it, run it, confirm a lookup works — that is the whole setup.

## Setup

```bash
git clone https://github.com/sendmarc-labs/webmcp-assignment.git
cd webmcp-assignment
npm ci
npm run dev
```

Open http://localhost:5173/domain-score. No `.env` file is required. Lookups go through `src/api/score.ts`, which returns the captured responses in `src/fixtures`.

## Browser flag

Chrome **146** or newer. Open `chrome://flags/#enable-webmcp-testing`, set it to **Enabled**, and relaunch Chrome. We use the flag rather than an origin trial so this works wherever the app is running. Check `chrome://version` if you are not sure.

## Inspector

Install the [Model Context Tool Inspector](https://chromewebstore.google.com/detail/model-context-tool-inspec/gbpdfapgefenggkahomfgkhfehlcenpd) from the Chrome Web Store. This will allow you to make tool calls directly without an agent

## Reference domains

Use these so everyone is compared on the same inputs:

| Domain | What the capture covers |
| --- | --- |
| `neverssl.com` | No DMARC record |
| `mit.edu` | `p=none` |
| `github.com` | `p=quarantine` |
| `sendmarc.com` | `p=reject` |
| `uber.com` | SPF lookup-limit warnings |

## Before the session

Confirm the app runs, a lookup returns data, and the inspector shows `score_domain` on `/domain-score`.
