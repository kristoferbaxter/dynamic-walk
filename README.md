# Issue with Acorn and Dynamic Import Walk

I've been struggling to get `acorn` and `acorn-dynamic-import` to work, so I created the simplest version of the problem to demonstrate the issue.

I must be missing something, because otherwise `acorn-walk` with a plugin is broken.

## Try It Yourself

1. Clone this repository.
2. `npm install`
3. `npm run test`

You should recieve an error:
`UnhandledPromiseRejectionWarning: TypeError: baseVisitor[type] is not a function`

This is quite strange since the `inject` method from `acorn-dynamic-import` is adding a new `baseVisitor` for `Import`.