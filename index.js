#!/usr/bin/env node

const diceware = require('eff-diceware-passphrase')
const argv = require('minimist')(process.argv)

if (typeof argv.n !== 'number') {
  console.error('Missing or invalid -n <N> argument')
  process.exit(1)
}

console.log(diceware(argv.n).join(' '))
