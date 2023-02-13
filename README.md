# Toolbox

This project is a collection of common UI components to be the basis for all future web applications at Diconium Auto.

### Automation

![Linting](https://github.com/dicoauto/toolbox/actions/workflows/lint.yml/badge.svg)

![Unit tests](https://github.com/dicoauto/toolbox/actions/workflows/test.yml/badge.svg)

![Snapshot tests](https://github.com/dicoauto/toolbox/actions/workflows/chromatic.yml/badge.svg)

![Documentation](https://github.com/dicoauto/toolbox/actions/workflows/docs.yml/badge.svg)

![Build](https://github.com/dicoauto/toolbox/actions/workflows/build.yml/badge.svg)

### Run storybook locally

```
npm run build:css:watch
npm run storybook
```

### Build the library

```
npm run build:prod
```

### Run tests

```
npm run test
```

### Run Linting

```
npm run lint
// or
npm run lint:fix
```

### Publish the library

```
npm publish
```

### Component generators

If you want to create a new component you can call the following command on the terminal to create all the required files at once.

```
npm run generate:component <NAME OF NEW COMPONENT>
```