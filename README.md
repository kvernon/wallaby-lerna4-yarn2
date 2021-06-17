# wallaby-yarn2

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
