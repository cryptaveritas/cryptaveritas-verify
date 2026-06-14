const fs = require('fs');

const readme = `<div align="center">

# 🔐 CryptaVeritas — Public Verifier

**Cryptographic proof for trading signals.**
Every signal is hash-committed before reveal — verify it yourself.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Node.js](https://img.shields.io/badge/Node.js-20%20LTS-green.svg)](https://nodejs.org)
[![Tests](https://img.shields.io/badge/Tests-14%2F14%20passing-brightgreen.svg)]()
[![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-cyan.svg)](https://cryptaveritas.github.io/cryptaveritas-verify)

</div>

---

## What is CryptaVeritas?

Signal providers in crypto can manipulate their track records — delete losing signals, change entry points retroactively, or publish different signals to different groups.

**CryptaVeritas solves this with cryptographic proof.**

Before a signal is published, its SHA-256 hash (with salt and domain prefix) is recorded on-chain. After the signal is revealed, anyone can recompute the hash and verify it was not altered.

> *"Don't trust the signal source — verify the hash."*

---

## How it works

\`\`\`
1. COMMIT   — Signal source publishes SHA-256 hash before revealing signal
              cryptasignals:v1|signal|{signal_data}|{salt}

2. REVEAL   — After deadline, signal is decrypted and published with status:
              VERIFIED / INVALID_HASH / NO_SECRET / DECRYPT_FAILED

3. VERIFY   — Anyone can recompute the hash independently:
              browser tool  →  cryptaveritas.github.io/cryptaveritas-verify
              CLI tool      →  node cli-verify.js <hash> <signal_json> <salt>
\`\`\`

---

## Verify a signal

### Browser (no installation required)

Open **[cryptaveritas.github.io/cryptaveritas-verify](https://cryptaveritas.github.io/cryptaveritas-verify)**

Paste the hash, signal JSON, and salt — click **Verify**.

### CLI

\`\`\`bash
node cli-verify.js <hash> <signal_json> <salt>
\`\`\`

**Example:**

\`\`\`bash
node cli-verify.js \\
  "9ac1bb295401d3330ae5f2042408c4a9777e381dc3fabb73d6036e6adab26782" \\
  '{"version":"v1","publisher":"agent","nonce":"test123","pair":"SOL/USDC","side":"buy","entry":100.5,"createdAt":1716440000000}' \\
  "109194476613c8796bc8be37b26b20e1b2ed8b695e71f5ffd845ae99a698f943"
\`\`\`

**Output:**

\`\`\`
VERIFIED — Hash matches. Signal was not tampered with.
\`\`\`

---

## Hash algorithm

The commitment hash is computed as:

\`\`\`
SHA-256( "cryptasignals:v1|signal|" + toStrictString(signal) + "|" + salt )
\`\`\`

Where \`toStrictString\` serializes the signal object with **sorted keys** and **no whitespace**, ensuring deterministic output regardless of key order.

This means:
- The hash is **reproducible** by anyone with the signal data and salt
- Key order in the JSON does not matter
- The domain prefix \`cryptasignals:v1|signal|\` prevents replay attacks across versions

---

## Signal format

\`\`\`json
{
  "version": "v1",
  "publisher": "agent_id",
  "nonce": "unique_string",
  "pair": "SOL/USDC",
  "side": "buy",
  "entry": 100.5,
  "createdAt": 1716440000000,
  "stopLoss": 95.0,
  "takeProfit": 115.0,
  "timeframe": "4h"
}
\`\`\`

---

## Why this matters

| Without CryptaVeritas | With CryptaVeritas |
|----------------------|-------------------|
| Signal provider can edit history | Hash proves signal was fixed before reveal |
| No way to detect manipulation | Anyone can verify independently |
| Trust is reputational | Trust is mathematical |
| Closed, unauditable | Open, reproducible |

---

## Competitive landscape

As of May 2026, no public protocols with pre-commit mechanics for trading signals have been identified.

| Project | Approach | Limitation |
|---------|----------|-----------|
| Alpha Impact | Post-fact verification via onchain trades | Verifies after the fact, not before |
| Knidos | ZK verification of closed fund results | Not for public signals |
| CryptoNinjas | Self-reporting with public P&L | No cryptography |

---

## Project structure

\`\`\`
cryptaveritas-verify/
├── index.html       # Browser-based hash verifier
├── cli-verify.js    # Node.js CLI verifier
├── booklet.html     # Partner booklet (full protocol overview)
└── README.md        # This file
\`\`\`

---

## Partner booklet

Full technical and business overview of the CryptaVeritas protocol:

**[View Partner Booklet →](https://cryptaveritas.github.io/cryptaveritas-verify/booklet.html)**

---

## Protocol core

The core protocol (signal commitment engine, Telegram bot, HTTP API) is maintained in a private repository. This public repository contains only the verification tools — intentionally open-source under GPL v3.0.

**Model:** Closed core + open verifier
**Philosophy:** You should never have to trust us to verify a signal.

---

## License

**GNU General Public License v3.0**

This verifier is free software. You can redistribute it, modify it, and use it for any purpose under the terms of GPL v3.0.

See [LICENSE](./LICENSE) for full terms.

---

<div align="center">

**CryptaVeritas** · [Verify a signal](https://cryptaveritas.github.io/cryptaveritas-verify) · [Partner booklet](https://cryptaveritas.github.io/cryptaveritas-verify/booklet.html) · [GitHub](https://github.com/cryptaveritas)

*May 2026*

</div>
`;

fs.writeFileSync('README.md', readme, 'utf8');
console.log('Done, size:', readme.length);
