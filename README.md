# diceware-cli

> Command line utility to generate `diceware` passwords.

![Node version](https://img.shields.io/node/v/diceware-cli.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/diceware-cli.svg?branch=master)](https://travis-ci.org/ralphtheninja/diceware-cli)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a cli wrapper around [`eff-diceware-passphrase`](https://github.com/emilbayes/eff-diceware-passphrase) (which in turn is based on [`sodium-native`](https://github.com/sodium-friends/sodium-native)).

## Install

```sh
$ npm i diceware-cli -g
```

## Usage

`diceware` takes `-n <N>` - the number of words - as a required argument:

```sh
$ diceware -n 4
astronaut snipping harmless scary
```

## License

MIT
