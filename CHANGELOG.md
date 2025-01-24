# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v0.3.3](https://github.com/ljharb/for-each/compare/v0.3.2...v0.3.3) - 2018-06-01

### Commits

- Add `npm run lint`, `npm run jscs`, and `npm run eslint` [`4a17d99`](https://github.com/ljharb/for-each/commit/4a17d99d7397dd2356530d238e0e6c37ef34a1d5)
- Style cleanup: [`1df6824`](https://github.com/ljharb/for-each/commit/1df6824d96bfc293c0c9e6b78143b602c8d94986)
- Update `eslint`, `tape`; use my personal shared `eslint` config. [`b8e7d85`](https://github.com/ljharb/for-each/commit/b8e7d850ec9010a7171d34297f7af74b90f28aac)
- [Tests] remove jscs [`37e3557`](https://github.com/ljharb/for-each/commit/37e355784b4261dcf5004158a72c4b8a6c6c524f)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp`, `tape`; fix scripts [`566045d`](https://github.com/ljharb/for-each/commit/566045d84f2ee5dff7cc14805c4fdb1d13d2624d)
- [Tests] up to `node` `v8`; newer npm breaks on older node [`07177dc`](https://github.com/ljharb/for-each/commit/07177dc9c8419b2a887c727ec576189a7c8e7837)
- Run `npm run lint` as part of tests. [`a34ea05`](https://github.com/ljharb/for-each/commit/a34ea05f729e0987007670d5693e093c56865ef6)
- Update `travis.yml` to test on the latest `node` and `io.js` [`354c843`](https://github.com/ljharb/for-each/commit/354c8434a166c7095c613e818c8d542fd1e2d630)
- Update `eslint` [`3601c93`](https://github.com/ljharb/for-each/commit/3601c9348e2cfb29ed3cfee352c2c95d4a8de87f)
- Update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config` [`1aaff65`](https://github.com/ljharb/for-each/commit/1aaff65a55d8a054561251c6a2501c4dc42e1f99)
- Only use `Function#call` to call the callback if the receiver is supplied, for performance. [`54b4775`](https://github.com/ljharb/for-each/commit/54b477571b4d7c11edccafd94f2e16380892ee5d)
- [Dev Deps] update `jscs`, `eslint`, `@ljharb/eslint-config`, `nsp` [`6ba1cb8`](https://github.com/ljharb/for-each/commit/6ba1cb8a708e84ba4bb4067d31549829ec579d92)
- [Dev Deps] update `tape`, `eslint`, `jscs` [`8f5e1d5`](https://github.com/ljharb/for-each/commit/8f5e1d5fcabaf3abaa6ce2d3e6dd095f0dedfc4e)
- Add "license" to `package.json`, matching the LICENSE file. [`defc2c3`](https://github.com/ljharb/for-each/commit/defc2c35ffa7c9d4fbcf846f28b436f0083a381c)
- Update `eslint` [`05d1850`](https://github.com/ljharb/for-each/commit/05d18503dd0ec709f93df5c905bd2d0ce51323c3)
- [Tests] on `io.js` `v3.3`, `node` `v4.0` [`e8395a4`](https://github.com/ljharb/for-each/commit/e8395a43feef399299839c8d466ddd9dca0c3268)
- Add `npm run security` [`0a45177`](https://github.com/ljharb/for-each/commit/0a45177290b1de71094ddd322ef4a504458e901d)
- Only apps should have lockfiles. [`6268d7b`](https://github.com/ljharb/for-each/commit/6268d7b39edd06ef5a283c7afdb6c823077db777)
- [Dev Deps] update `nsp`, `tape`, `eslint` [`b95939f`](https://github.com/ljharb/for-each/commit/b95939f66a3dad590b3bc42c53535e77c1bfc114)
- Use `is-callable` instead of `is-function`, to cover ES6 environments with `Symbol.toStringTag` [`4095d33`](https://github.com/ljharb/for-each/commit/4095d334581c1caee92f595c299ffc479806dc3f)
- Test on `io.js` `v2.2` [`7b44f98`](https://github.com/ljharb/for-each/commit/7b44f98c217291a92385ddd3903d4974e049d762)
- Some old browsers choke on variables named "toString". [`4f1b626`](https://github.com/ljharb/for-each/commit/4f1b626eb91fcdc0e9018472a702aea713799190)
- Update `is-function`, `tape` [`3ceaf32`](https://github.com/ljharb/for-each/commit/3ceaf3240ef7d1b261cf510eb932cf540291187b)
- Test up to `io.js` `v3.0` [`3c1377a`](https://github.com/ljharb/for-each/commit/3c1377a31adf003323f4846a97e8f7c8fd51b5d2)
- [Deps] update `is-callable` [`f5c62d0`](https://github.com/ljharb/for-each/commit/f5c62d034b582a15bcb1f1cadace4e9c84f1780a)
- Test on `io.js` `v2.4` [`db86c85`](https://github.com/ljharb/for-each/commit/db86c85641d053a1dc4e570e8c8afbea915f78c0)
- Test on `io.js` `v2.3` [`2f04ca8`](https://github.com/ljharb/for-each/commit/2f04ca885adb4a8ccca658739f771a7f78522d03)

## [v0.3.2](https://github.com/ljharb/for-each/compare/v0.3.1...v0.3.2) - 2014-01-07

### Merged

- works down to IE6 [`#5`](https://github.com/ljharb/for-each/pull/5)

## [v0.3.1](https://github.com/ljharb/for-each/compare/v0.3.0...v0.3.1) - 2014-01-06

## [v0.3.0](https://github.com/ljharb/for-each/compare/v0.2.0...v0.3.0) - 2014-01-06

### Merged

- remove use of Object.keys [`#4`](https://github.com/ljharb/for-each/pull/4)
- Update tape. [`#3`](https://github.com/ljharb/for-each/pull/3)
- regex is not a function [`#2`](https://github.com/ljharb/for-each/pull/2)
- Add testling [`#1`](https://github.com/ljharb/for-each/pull/1)

### Commits

- Add testling. [`a24b521`](https://github.com/ljharb/for-each/commit/a24b52111937d509a3b5f58106c8835283de7146)
- Add array example to README [`9bd70c2`](https://github.com/ljharb/for-each/commit/9bd70c2ceafddfc734a80e0fea2bbac00afa963a)
- Regexes are considered functions in older browsers. [`403f649`](https://github.com/ljharb/for-each/commit/403f6490f903984adea1771af29c41fd2b1e4b64)
- Adding android browser to testling. [`a4c5825`](https://github.com/ljharb/for-each/commit/a4c5825bf8abd13589b9a9662c9d3deaf89cbf66)

## [v0.2.0](https://github.com/ljharb/for-each/compare/v0.1.0...v0.2.0) - 2013-05-10

### Commits

- Adding tests. [`7e74213`](https://github.com/ljharb/for-each/commit/7e74213d1b5d01b19249c3e3037302bd7fc74f1c)
- Adding proper array indexing, as well as string support. [`d36f794`](https://github.com/ljharb/for-each/commit/d36f794d6c0c5696bf1e4f8e79ae667858dfc11b)
- Use tape instead of tap. [`016a3cf`](https://github.com/ljharb/for-each/commit/016a3cf706c78037384d4c378b2ebe6e702cbb02)
- Requiring that the iterator is a function. [`cfedced`](https://github.com/ljharb/for-each/commit/cfedceda15ea2f7eb4acf079fb90ce17ec7da664)
- Adding myself as a contributor :-) [`ff28fca`](https://github.com/ljharb/for-each/commit/ff28fca8ec30f6fdbb7af87c74ed35688e60d07a)
- Adding node 0.10 to travis [`75f2460`](https://github.com/ljharb/for-each/commit/75f2460343d3ea58f91dad45f2eda478e3a4e412)

## v0.1.0 - 2012-09-28

### Commits

- first [`2d3a6ed`](https://github.com/ljharb/for-each/commit/2d3a6ed63036455847937cf00bec56b59ab36a9d)
- docs & travis [`ea4caad`](https://github.com/ljharb/for-each/commit/ea4caad8a8768992dcce29998e226484beed841c)
