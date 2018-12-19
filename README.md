# TypeScript on Now 2.0

> [https://kdd-ts2.now.sh](https://kdd-ts2.now.sh)

## Update 12/19/18

The [`@now/node@canary`](https://github.com/zeit/now-builders) builder now supports Typescript. See this [spectrum thread](https://spectrum.chat/?t=4e4b5f23-65b9-43bc-a67f-3de197b98c54) and this [PR](https://github.com/zeit/now-examples/pull/198)

--

Currently, there is no clear pattern for deploying Node services written in Typescript via [Now 2.0](https://zeit.co/docs/v2/getting-started/introduction-to-now/).

It appears the Zeit team is working on it:

- https://github.com/zeit/ncc/issues/31
- https://github.com/zeit/ncc/pull/90
- https://github.com/zeit/now-builders/issues/46

But there is still no first class solution. The best approach for now seems to be to compile the TypeScript locally and push that up as a deployment (I'm verifying this on [Spectrum](https://spectrum.chat/?t=4e4b5f23-65b9-43bc-a67f-3de197b98c54)).

This repo demos a working solution via `npm run deploy`.
