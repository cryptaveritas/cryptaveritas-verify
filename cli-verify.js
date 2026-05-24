#!/usr/bin/env node
const crypto = require('crypto');

function toStrictString(val, seen = new Set(), depth = 0) {
  if (depth > 20) throw new Error('Depth limit exceeded');
  if (val === null) return 'null';
  if (val === undefined) throw new Error('undefined not allowed');
  const type = typeof val;
  if (type !== 'object') return JSON.stringify(val);
  if (seen.has(val)) throw new Error('Circular reference');
  seen.add(val);
  if (Array.isArray(val)) {
    const items = val.map(i => toStrictString(i, seen, depth + 1));
    seen.delete(val);
    return '[' + items.join(',') + ']';
  }
  const keys = Object.keys(val).sort();
  const pairs = keys.map(k => JSON.stringify(k) + ':' + toStrictString(val[k], seen, depth + 1));
  seen.delete(val);
  return '{' + pairs.join(',') + '}';
}

const [,, hash, signalJson, salt] = process.argv;

if (!hash || !signalJson || !salt) {
  console.log('Usage: node cli-verify.js <hash> <signal_json> <salt>');
  process.exit(1);
}

try {
  if (!/^[0-9a-fA-F]{64}$/.test(hash)) throw new Error('Invalid hash format');
  if (!/^[0-9a-fA-F]{64}$/.test(salt)) throw new Error('Invalid salt format');
  const signal = JSON.parse(signalJson);
  const strictData = toStrictString(signal);
  const payload = 'cryptasignals:v1|signal|' + strictData + '|' + salt;
  const computed = crypto.createHash('sha256').update(payload, 'utf8').digest('hex');
  if (computed === hash.toLowerCase()) {
    console.log('VERIFIED — Hash matches. Signal was not tampered with.');
    process.exit(0);
  } else {
    console.log('INVALID — Hash does not match.');
    process.exit(1);
  }
} catch (e) {
  console.error('ERROR:', e.message);
  process.exit(1);
}
