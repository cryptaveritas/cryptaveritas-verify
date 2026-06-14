const fs = require('fs');

// ─── ENGLISH BOOKLET ────────────────────────────────────────────────────────
const bookletEN = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CryptaVeritas — Partner Booklet</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{--bg:#09090b;--surface:#111113;--surface2:#18181b;--border:#27272a;--border2:#3f3f46;--text:#fafafa;--muted:#a1a1aa;--hint:#71717a;--accent:#06b6d4;--accent2:#8b5cf6;--green:#22c55e;--red:#ef4444;--mono:'JetBrains Mono',monospace;--sans:'Inter',sans-serif;}
body{background:var(--bg);color:var(--text);font-family:var(--sans);font-size:15px;line-height:1.6}
a{color:var(--accent);text-decoration:none}
.wrap{max-width:900px;margin:0 auto;padding:0 32px}
.nav{position:fixed;top:0;left:0;right:0;background:rgba(9,9,11,0.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);z-index:100;padding:0 32px}
.nav-inner{max-width:900px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;height:52px}
.nav-logo{font-weight:800;font-size:16px;letter-spacing:-0.5px}
.nav-logo em{color:var(--accent);font-style:normal}
.nav-links{display:flex;gap:24px}
.nav-links a{font-family:var(--mono);font-size:11px;color:var(--hint);letter-spacing:1px;text-transform:uppercase}
.nav-links a:hover{color:var(--text)}
.nav-btn{font-family:var(--mono);font-size:11px;padding:7px 16px;border:1px solid var(--accent);color:var(--accent);background:transparent;cursor:pointer;letter-spacing:1px;text-transform:uppercase;text-decoration:none}
.nav-btn:hover{background:rgba(6,182,212,0.1)}
.main{padding-top:52px}
.hero{padding:80px 0 64px;border-bottom:1px solid var(--border)}
.hero-tag{font-family:var(--mono);font-size:11px;letter-spacing:3px;color:var(--accent);text-transform:uppercase;margin-bottom:24px}
.hero h1{font-size:clamp(40px,7vw,80px);font-weight:800;line-height:1;letter-spacing:-2px;margin-bottom:20px}
.hero h1 em{color:var(--accent);font-style:normal}
.hero-desc{font-size:18px;color:var(--muted);max-width:520px;margin-bottom:40px;line-height:1.7}
.hero-pills{display:flex;flex-wrap:wrap;gap:12px}
.pill{font-family:var(--mono);font-size:11px;padding:6px 14px;border:1px solid var(--border2);color:var(--muted);letter-spacing:1px}
.pill span{color:var(--text)}
.section{padding:64px 0;border-bottom:1px solid var(--border)}
.sec-label{font-family:var(--mono);font-size:10px;letter-spacing:3px;color:var(--accent);text-transform:uppercase;margin-bottom:40px;display:flex;align-items:center;gap:16px}
.sec-label::after{content:'';flex:1;height:1px;background:var(--border)}
h2{font-size:clamp(24px,4vw,38px);font-weight:800;letter-spacing:-1px;line-height:1.1;margin-bottom:16px}
h3{font-size:18px;font-weight:600;margin-bottom:8px}
p{color:var(--muted);margin-bottom:12px}
p:last-child{margin-bottom:0}
.cards{display:grid;gap:1px;background:var(--border);margin-top:40px}
.cards-2{grid-template-columns:1fr 1fr}
.cards-3{grid-template-columns:repeat(3,1fr)}
.card{background:var(--bg);padding:32px 28px}
.card-tag{font-family:var(--mono);font-size:10px;letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}
.card-tag.green{color:var(--green)}.card-tag.red{color:var(--red)}.card-tag.accent{color:var(--accent)}.card-tag.purple{color:var(--accent2)}
.tbl-wrap{margin-top:32px;overflow:hidden;border:1px solid var(--border)}
table{width:100%;border-collapse:collapse;font-size:13px}
th{background:var(--surface2);color:var(--accent);font-family:var(--mono);font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:12px 16px;text-align:left;font-weight:500;border-bottom:1px solid var(--border)}
td{padding:12px 16px;border-bottom:1px solid var(--border);color:var(--muted);vertical-align:top}
td:first-child{color:var(--text);font-weight:500}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(255,255,255,0.01)}
.steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);margin-top:40px}
.step{background:var(--bg);padding:32px 28px}
.step-num{font-size:48px;font-weight:800;color:var(--border2);line-height:1;margin-bottom:16px;font-family:var(--mono)}
.step h3{font-size:17px;margin-bottom:8px}.step p{font-size:13px}
.step code{font-family:var(--mono);font-size:11px;color:var(--accent);display:block;margin-top:12px;word-break:break-all;opacity:0.7}
.sec-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:32px}
.sec-item{display:flex;gap:14px;padding:16px 20px;background:var(--surface);border:1px solid var(--border)}
.sec-dot{width:6px;height:6px;background:var(--green);border-radius:50%;margin-top:7px;flex-shrink:0}
.sec-title{font-size:13px;font-weight:600;margin-bottom:3px;color:var(--text)}
.sec-desc{font-size:12px;color:var(--hint);font-family:var(--mono)}
.roadmap{margin-top:40px}
.rm-item{display:grid;grid-template-columns:120px 1fr;gap:32px;padding:28px 0;border-bottom:1px solid var(--border)}
.rm-item:last-child{border-bottom:none}
.rm-phase .num{font-size:36px;font-weight:800;color:var(--accent);line-height:1;display:block;margin-bottom:4px;font-family:var(--mono)}
.rm-phase .time{font-family:var(--mono);font-size:11px;color:var(--hint)}
.badge{display:inline-block;font-family:var(--mono);font-size:10px;letter-spacing:1px;padding:3px 10px;text-transform:uppercase;margin-bottom:10px}
.badge-done{background:rgba(34,197,94,0.1);color:var(--green);border:1px solid rgba(34,197,94,0.3)}
.badge-next{background:rgba(6,182,212,0.1);color:var(--accent);border:1px solid rgba(6,182,212,0.3)}
.badge-plan{background:rgba(113,113,122,0.1);color:var(--hint);border:1px solid var(--border)}
.tiers{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);margin-top:40px}
.tier{background:var(--bg);padding:28px 24px}
.tier-name{font-family:var(--mono);font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--hint);margin-bottom:10px}
.tier h3{font-size:17px;margin-bottom:10px}.tier-val{font-family:var(--mono);font-size:12px;color:var(--accent);margin-bottom:12px}.tier p{font-size:12px}
.token-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--border);margin-top:32px}
.token-row{display:flex;justify-content:space-between;align-items:center;background:var(--bg);padding:16px 24px}
.token-label{font-size:13px;color:var(--muted)}.token-val{font-family:var(--mono);font-size:13px;color:var(--text);font-weight:500}
.token-sub{font-size:11px;color:var(--hint);margin-top:2px}
.test-box{background:var(--surface);border:1px solid var(--border);padding:28px;margin-top:32px;font-family:var(--mono)}
.test-header{font-size:13px;color:var(--green);margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border)}
.test-suite{margin-bottom:16px}.test-suite-name{font-size:11px;color:var(--accent);margin-bottom:6px}
.test-case{font-size:11px;color:var(--hint);padding:3px 0 3px 16px;display:flex;gap:8px}
.test-case::before{content:'v';color:var(--green);font-size:12px}
.repos{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:32px}
.repo{background:var(--surface);border:1px solid var(--border);padding:24px}
.repo-type{font-family:var(--mono);font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--hint);margin-bottom:8px}
.repo-name{font-family:var(--mono);font-size:13px;color:var(--accent);margin-bottom:8px}.repo p{font-size:12px}
.triggers{margin-top:32px}
.trigger{display:grid;grid-template-columns:56px 1fr;gap:20px;padding:24px 0;border-bottom:1px solid var(--border)}
.trigger:last-child{border-bottom:none}
.trigger-num{font-family:var(--mono);font-size:32px;font-weight:700;color:var(--border2);line-height:1}
.trigger h3{font-size:16px;margin-bottom:6px}.trigger p{font-size:13px}
.slogan{border-left:3px solid var(--accent);padding:20px 28px;margin-top:32px;background:var(--surface)}
.slogan-text{font-size:20px;font-weight:600;font-style:italic;margin-bottom:6px}
.slogan-sub{font-family:var(--mono);font-size:10px;letter-spacing:2px;color:var(--hint);text-transform:uppercase}
.contact-block{background:var(--surface);border:1px solid var(--border);padding:32px;margin-top:40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px}
.contact-label{font-family:var(--mono);font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--hint);margin-bottom:8px}
.contact-val{font-size:18px;font-weight:600;color:var(--text)}
.contact-link{font-family:var(--mono);font-size:14px;color:var(--accent)}
.footer{padding:48px 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px}
.footer-logo{font-size:22px;font-weight:800;letter-spacing:-1px}
.footer-logo em{color:var(--accent);font-style:normal}
.footer-info{font-family:var(--mono);font-size:11px;color:var(--hint);text-align:right;line-height:2}
@media(max-width:700px){.cards-2,.cards-3,.steps,.tiers{grid-template-columns:1fr}.rm-item{grid-template-columns:1fr}.sec-grid{grid-template-columns:1fr}.repos{grid-template-columns:1fr}.token-grid{grid-template-columns:1fr}.nav-links{display:none}}
</style>
</head>
<body>
<nav class="nav"><div class="nav-inner">
  <div class="nav-logo">Crypta<em>Veritas</em></div>
  <div class="nav-links">
    <a href="#protocol">Protocol</a>
    <a href="#tech">Tech</a>
    <a href="#roadmap">Roadmap</a>
    <a href="#monetization">Monetization</a>
    <a href="#contact">Contact</a>
  </div>
  <a href="index.html" class="nav-btn">Verify Hash</a>
</div></nav>

<div class="main">
<div class="hero"><div class="wrap">
  <div class="hero-tag">Partner Booklet — May 2026</div>
  <h1>Crypta<em>Veritas</em></h1>
  <p class="hero-desc">Cryptographic verification protocol for trading signals. Every signal is hash-committed before reveal — verify it yourself, no trust required.</p>
  <div class="hero-pills">
    <div class="pill">Token <span>$CRYSIG (Solana)</span></div>
    <div class="pill">License <span>GPL v3.0</span></div>
    <div class="pill">Phase 1 <span>Complete</span></div>
    <div class="pill">Tests <span>14/14</span></div>
    <div class="pill">Telegram <span>t.me/cryptaveritas</span></div>
  </div>
</div></div>

<div class="section" id="protocol"><div class="wrap">
  <div class="sec-label">01 — Problem and solution</div>
  <h2>The signal market runs on trust.<br>We replace trust with math.</h2>
  <div class="cards cards-2">
    <div class="card"><div class="card-tag red">Problem</div><h3>Fabricated track records</h3><p>Signal sources delete losing forecasts, change entry points retroactively, and publish different signals to different groups. Users have no tool for independent verification.</p></div>
    <div class="card"><div class="card-tag green">Solution</div><h3>Commit-Reveal protocol</h3><p>Before publishing a signal, its SHA-256 hash with salt is recorded. After reveal, anyone can recompute the hash and confirm it was not altered. Mathematical proof, not reputational.</p></div>
  </div>
  <div class="slogan"><div class="slogan-text">"Every signal. Cryptographically proven."</div><div class="slogan-sub">B2B slogan</div></div>
</div></div>

<div class="section"><div class="wrap">
  <div class="sec-label">02 — How it works</div>
  <h2>Three steps. Zero trust.</h2>
  <div class="steps">
    <div class="step"><div class="step-num">01</div><h3>Commit</h3><p>Signal source publishes SHA-256 hash with domain prefix and random salt. Signal content is unknown.</p><code>cryptasignals:v1|signal|{data}|{salt}</code></div>
    <div class="step"><div class="step-num">02</div><h3>Reveal</h3><p>Worker decrypts AES-256-GCM, verifies hash, publishes signal with status to channel.</p><code>VERIFIED / INVALID_HASH / NO_SECRET</code></div>
    <div class="step"><div class="step-num">03</div><h3>Verify</h3><p>Anyone recomputes the hash independently in browser or via CLI. No server trust required.</p><code>cryptaveritas.github.io/cryptaveritas-verify</code></div>
  </div>
</div></div>

<div class="section" id="tech"><div class="wrap">
  <div class="sec-label">03 — Technical stack</div>
  <h2>Production-ready. Node.js 20 LTS.</h2>
  <div class="tbl-wrap"><table>
    <tr><th>Component</th><th>Technology</th></tr>
    <tr><td>Runtime</td><td>Node.js 20 LTS</td></tr>
    <tr><td>Language</td><td>TypeScript 5</td></tr>
    <tr><td>Database</td><td>SQLite WAL (better-sqlite3)</td></tr>
    <tr><td>Cryptography</td><td>AES-256-GCM + SHA-256 (Node.js crypto)</td></tr>
    <tr><td>Validation</td><td>Zod .strict() + .refine() (SignalSchema)</td></tr>
    <tr><td>Bot</td><td>grammY (Telegram) — primary + backup</td></tr>
    <tr><td>Testing</td><td>Jest + ts-jest — 14/14 passing</td></tr>
    <tr><td>Token</td><td>Solana SPL — $CRYSIG</td></tr>
    <tr><td>Multisig</td><td>Squads v4 (treasury + OTC vault)</td></tr>
  </table></div>
</div></div>

<div class="section"><div class="wrap">
  <div class="sec-label">04 — Security</div>
  <h2>10 attack vectors. 10 closed.</h2>
  <div class="sec-grid">
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">Replay attacks</div><div class="sec-desc">Domain prefix cryptasignals:v1|signal|</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">Timing attacks</div><div class="sec-desc">crypto.timingSafeEqual</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">IV reuse in AES</div><div class="sec-desc">Random IV per encryption</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">Prompt Injection</div><div class="sec-desc">Zod .strict() + Depth Guard (20 levels)</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">Time-Jacking (NTP)</div><div class="sec-desc">process.hrtime.bigint() monitoring</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">SQLITE_BUSY</div><div class="sec-desc">busy_timeout = 5000ms</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">WAL data loss</div><div class="sec-desc">wal_checkpoint(TRUNCATE) on shutdown</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">Key memory leak</div><div class="sec-desc">clearMasterKey() — key zeroed on shutdown</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">Overlapping worker</div><div class="sec-desc">isProcessing flag in setInterval</div></div></div>
    <div class="sec-item"><div class="sec-dot"></div><div><div class="sec-title">DoS via nesting</div><div class="sec-desc">LIMIT 100 in getPendingCommits</div></div></div>
  </div>
</div></div>

<div class="section"><div class="wrap">
  <div class="sec-label">05 — Tests</div>
  <h2>14 tests. 3 suites. All green.</h2>
  <div class="test-box">
    <div class="test-header">Test Suites: 3 passed | Tests: 14 passed | Node.js 20 LTS</div>
    <div class="test-suite"><div class="test-suite-name">crypto.test.ts — 4 tests</div>
      <div class="test-case">toStrictString is deterministic</div>
      <div class="test-case">domainHash is stable and unique</div>
      <div class="test-case">verifyCommitment correct (true/false)</div>
      <div class="test-case">createCommitment generates compatible data</div>
    </div>
    <div class="test-suite"><div class="test-suite-name">revealWorker.test.ts — 5 tests</div>
      <div class="test-case">Skip before deadline</div>
      <div class="test-case">FORCED REVEAL — TARGET_HIT on valid commit</div>
      <div class="test-case">NO_SECRET when encrypted_secret missing</div>
      <div class="test-case">INVALID_HASH on hash mismatch</div>
      <div class="test-case">DECRYPT_FAILED on invalid secret</div>
    </div>
    <div class="test-suite"><div class="test-suite-name">database.test.ts — 5 tests</div>
      <div class="test-case">saveCommitment + getPendingCommits</div>
      <div class="test-case">getCommitmentByHash</div>
      <div class="test-case">markAsRevealed + idempotency</div>
      <div class="test-case">updateLastForceAttempt</div>
      <div class="test-case">LIMIT 100 under high load</div>
    </div>
  </div>
</div></div>

<div class="section" id="roadmap"><div class="wrap">
  <div class="sec-label">06 — Roadmap</div>
  <h2>From MVP to protocol.</h2>
  <div class="roadmap">
    <div class="rm-item"><div class="rm-phase"><span class="num">01</span><span class="time">May 2026</span></div><div><div class="badge badge-done">Complete</div><h3>CryptaSignals MVP</h3><p>Commit-Reveal core, AES-256-GCM, SQLite WAL, Telegram bot (primary + backup), HTTP API, public verifier, 14/14 tests, GitHub Pages.</p></div></div>
    <div class="rm-item"><div class="rm-phase"><span class="num">02</span><span class="time">Weeks 3-8</span></div><div><div class="badge badge-next">Next</div><h3>Growth and monetization</h3><p>Token-gated access via $CRYSIG, B2B Pro/Enterprise with commercial license, Drip Reveal, multi-oracle (Birdeye + Pyth), OTC pre-launch via Squads v4.</p></div></div>
    <div class="rm-item"><div class="rm-phase"><span class="num">03</span><span class="time">Months 3-6</span></div><div><div class="badge badge-plan">Planned</div><h3>Infrastructure migration</h3><p>Onchain pre-commit hashes on Solana, agent reputation ERC-8004 on Base, staking contract, verified signal source marketplace, Soulbound NFTs, KMS/HSM.</p></div></div>
    <div class="rm-item"><div class="rm-phase"><span class="num">04</span><span class="time">Months 6-12+</span></div><div><div class="badge badge-plan">Planned</div><h3>Full CryptaVeritas protocol</h3><p>ZK proofs (Noir + zkVerify), decentralized validators with slashing, onchain credit scoring for AI agents, DeFAI partnerships.</p></div></div>
  </div>
</div></div>

<div class="section" id="monetization"><div class="wrap">
  <div class="sec-label">07 — Monetization</div>
  <h2>Token as access. Not as investment.</h2>
  <div class="tiers">
    <div class="tier"><div class="tier-name">B2C</div><h3>Private signals</h3><div class="tier-val">Hold 1,000 $CRYSIG</div><p>Offchain RPC check, hourly. No fiat, no contracts, no KYC.</p></div>
    <div class="tier"><div class="tier-name">B2B Lite</div><h3>Basic API</h3><div class="tier-val">Hold 10,000 $CRYSIG</div><p>Verification API access. Phase 3 — staking contract on Solana.</p></div>
    <div class="tier"><div class="tier-name">B2B Pro</div><h3>Extended API</h3><div class="tier-val">Hold 50,000 $CRYSIG</div><p>Extended API, priority support. Phase 4 — ZK verification.</p></div>
    <div class="tier"><div class="tier-name">Enterprise</div><h3>White label</h3><div class="tier-val">Official contract</div><p>$CRYSIG, USDC, USDT or fiat via Coinbase Commerce. SLA, dedicated support.</p></div>
  </div>
</div></div>

<div class="section"><div class="wrap">
  <div class="sec-label">08 — Legal triggers</div>
  <h2>Trigger model. No upfront costs.</h2>
  <div class="triggers">
    <div class="trigger"><div class="trigger-num">00</div><div><h3>Now — pre-launch</h3><p>No legal entity, no payments, no commercial agreements. B2C and B2B access via $CRYSIG holdings only.</p></div></div>
    <div class="trigger"><div class="trigger-num">01</div><div><h3>First corporate client requesting official contract</h3><p>Immediate legal entity registration. Corporate = company, fund, or DAO requiring invoice and formal agreement.</p></div></div>
    <div class="trigger"><div class="trigger-num">02</div><div><h3>First incoming Enterprise payment</h3><p>Treasury multisig (2/3) accepts $CRYSIG, USDC, USDT. Fiat via Coinbase Commerce if needed. Bank account on client request only.</p></div></div>
    <div class="trigger"><div class="trigger-num">03</div><div><h3>First Enterprise contract signed</h3><p>Legal opinion on $CRYSIG (MiCA compliance). Decision on $CIPCRY integration.</p></div></div>
  </div>
</div></div>

<div class="section"><div class="wrap">
  <div class="sec-label">09 — Tokenomics</div>
  <h2>10,000,000 CRYSIG. Solana.</h2>
  <div class="token-grid">
    <div class="token-row"><div><div class="token-label">Team</div><div class="token-sub">6-month cliff, 24 months linear</div></div><div class="token-val">15%</div></div>
    <div class="token-row"><div><div class="token-label">Treasury</div><div class="token-sub">Multisig 2 of 3 (Squads v4)</div></div><div class="token-val">25%</div></div>
    <div class="token-row"><div><div class="token-label">Community and airdrops</div><div class="token-sub">20% immediately, 80% over 12 months</div></div><div class="token-val">10%</div></div>
    <div class="token-row"><div><div class="token-label">Marketing and partnerships</div><div class="token-sub">25% immediately, 75% over 12 months</div></div><div class="token-val">10%</div></div>
    <div class="token-row"><div><div class="token-label">Initial liquidity</div><div class="token-sub">LP burned (CyreneAI)</div></div><div class="token-val">40%</div></div>
  </div>
</div></div>

<div class="section"><div class="wrap">
  <div class="sec-label">10 — Competitive landscape</div>
  <h2>No direct competitors. Niche is open.</h2>
  <div class="tbl-wrap"><table>
    <tr><th>Project</th><th>Approach</th><th>Limitation</th></tr>
    <tr><td>Alpha Impact</td><td>Post-fact verification via onchain trades</td><td>No pre-commit</td></tr>
    <tr><td>Knidos</td><td>ZK verification of closed fund results</td><td>Not for public signals</td></tr>
    <tr><td>CryptoNinjas</td><td>Self-reporting with public P&L</td><td>No cryptography</td></tr>
  </table></div>
  <div class="cards cards-3" style="margin-top:20px">
    <div class="card"><div class="card-tag accent">DeFAI market</div><h3>$10B</h3><p style="font-size:13px">Crypto.com Research, 2025</p></div>
    <div class="card"><div class="card-tag purple">Use AI</div><h3>37%</h3><p style="font-size:13px">Of market participants</p></div>
    <div class="card"><div class="card-tag red">Unverified signals</div><h3>58%</h3><p style="font-size:13px">Rely on social media</p></div>
  </div>
</div></div>

<div class="section" id="contact"><div class="wrap">
  <div class="sec-label">11 — Contact</div>
  <h2>Open verifier. Closed core.</h2>
  <div class="repos">
    <div class="repo"><div class="repo-type">Public — GPL v3.0</div><div class="repo-name">cryptaveritas-verify</div><p>Hash verifier: index.html (browser) + cli-verify.js (Node.js). Open source.</p></div>
    <div class="repo"><div class="repo-type">GitHub Pages — Live</div><div class="repo-name">cryptaveritas.github.io/cryptaveritas-verify</div><p>Live verifier. Tested with real hashes.</p></div>
    <div class="repo"><div class="repo-type">Public roadmap</div><div class="repo-name">github.com/cryptaveritas/roadmap</div><p>All phases, progress, and upcoming features.</p></div>
    <div class="repo"><div class="repo-type">Private core</div><div class="repo-name">cryptasignals-phase1</div><p>Full protocol core. TypeScript, SQLite, AES-256-GCM.</p></div>
  </div>
  <div class="contact-block">
    <div><div class="contact-label">Telegram channel</div><div class="contact-val">CryptaVeritas | Proof of Signal</div></div>
    <div><div class="contact-label">Link</div><a href="https://t.me/cryptaveritas" class="contact-link">t.me/cryptaveritas</a></div>
    <div><div class="contact-label">Enterprise inquiries</div><div class="contact-val" style="font-size:14px;color:var(--muted)">Via Telegram channel</div></div>
  </div>
</div></div>

<div class="wrap"><div class="footer">
  <div class="footer-logo">Crypta<em>Veritas</em></div>
  <div class="footer-info">
    <div><a href="https://t.me/cryptaveritas">t.me/cryptaveritas</a></div>
    <div><a href="https://cryptaveritas.github.io/cryptaveritas-verify">cryptaveritas.github.io/cryptaveritas-verify</a></div>
    <div style="margin-top:6px;font-size:10px">Partner Booklet · May 2026</div>
  </div>
</div></div>
</div>
</body>
</html>`;

// Write files
fs.writeFileSync('booklet.html', bookletEN, 'utf8');
console.log('booklet.html (EN) done, size:', bookletEN.length);
