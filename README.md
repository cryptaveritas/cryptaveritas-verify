# CryptaVeritas — Public Verifier

Verify any signal commitment from the CryptaVeritas protocol.

## Browser
Open [cryptaveritas.github.io/cryptaveritas-verify](https://cryptaveritas.github.io/cryptaveritas-verify)

## CLI
```bash
node cli-verify.js <hash> <signal_json> <salt>
```

## How it works
1. Signal publisher posts a SHA-256 hash before revealing the signal
2. After reveal, anyone can verify the hash was not tampered with
3. This tool recomputes the hash locally and compares

## License
GPL v3.0
