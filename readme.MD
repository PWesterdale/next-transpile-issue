# Repro for React-Hook issue

This is a repro case for next-transpile-modules issues with react hooks on React 17.0.1 and the latest next version.

# How

clone this project and then do the following:

```
cd test-app
npm install
cd ../test-library
npm install
npm link
cd ../test-app
npm link test-library
npm run dev
```