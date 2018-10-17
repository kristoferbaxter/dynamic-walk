# Issue with Acorn and Dynamic Import Walk

I've been struggling to get `acorn` and `acorn-dynamic-import` to work, so I created the simplest version of the problem to demonstrate the issue.

I must be missing something, because otherwise `acorn-walk` with a plugin is broken.

*UPDATE*: Workaround pattern is now included in `workaround.js`. Turns out `acorn-walk` inject is misleading since it doesn't use the updated `baseVisitor` when `walk.simple` or similar is called. Intead you need to explicitly pass the updated `baseVisitor` into `walk` methods.

## Try It Yourself

1. Clone this repository.
2. `npm install`
3. `npm run default`

You should recieve an error:
`UnhandledPromiseRejectionWarning: TypeError: baseVisitor[type] is not a function`

4. Try the workaround `npm run workaround`