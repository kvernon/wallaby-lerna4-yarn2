# wallaby-yarn2: Updated

## testing

## steps Wallaby

1. `yarn install` (have yarn 2 installed)
2. connect `wallaby.js`to IDE (I'm using WebStorm)

Actual:

```bash
0 failing tests, 1 passing  Launch Coverage/Test Explorer

Cannot use import statement outside a module
	at node_modules/@company/core-sdk/tests/unit/core.test.ts:3
```

## jest CLI

1. `yarn install`
2. `yarn run test`

Actual:

```bash
lerna notice cli v4.0.0
lerna info versioning independent
lerna info Executing command in 1 package: "yarn run test"
lerna info run Ran npm script 'test' in '@company/core-sdk' in 3.4s:

lerna success run Ran npm script 'test' in 1 package in 3.4s:
lerna success - @company/core-sdk
```

## testing with coverage

There are new pieces added to the jest.unit.preset, which omit certain files for coverage.

in here it is:

```javascript
{
  collectCoverageFrom: [
    '!**/tests/integration/**',
    '!**/**/.eslintrc.js',
    '!**/**/jest.config.js',
    '!**/**/jest.integration.config.js'
  ]
}
```

## steps Wallaby

1. `yarn install` (have yarn 2 installed)
2. connect `wallaby.js`to IDE (I'm using WebStorm)

Actual Observations:

`/packages/core-sdk/lib/index.ts`

**Webstorm** no boxes (red/green/grey showing coverage) (is bad)
**Wallabyjs localhost** 0 files covered (and shows an error) (is bad)

Actual Observations:

`/packages/core-sdk/tests/unit/core.test.ts`

**Webstorm** has boxes (red/green/grey are showing coverage) (is good)
**Wallabyjs localhost** [Test] shows nested describes and tests down to a check (is good)

## jest CLI

1. `yarn install`
2. `yarn run test:cov`

Actual:

```bash
lerna notice cli v4.0.0
lerna info versioning independent
lerna info Executing command in 1 package: "yarn run test:cov"
lerna info run Ran npm script 'test:cov' in '@company/core-sdk' in 2.9s:
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 index.ts |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
lerna success run Ran npm script 'test:cov' in 1 package in 2.9s:
lerna success - @company/core-sdk

```

From above, jest cli shows coverage for index.ts
