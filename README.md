# testcafe-demo
## How to run testcafe tests locally

In one terminal window run

```
yarn install
```

and in another (`username` and `password` are your test user's credentials). For Linux/macOS:

```
export TEST_PASSWORD=password && export TEST_USERNAME=username && export TEST_BACKEND=https://staging3.intgdc.com/ && yarn testcafe
```

or for Windows:

```
set TEST_PASSWORD=password && set TEST_USERNAME=username && set TEST_BACKEND=https://staging3.intgdc.com/ && yarn testcafe
```

You can replace `yarn testcafe` by `yarn testcafe-visual` to actually see what the test does with the browser.
