# Contributing to Toolbox

If you're reading this, you're awesome! Thank you for helping us make this project great and being a part of the Toolbox community.
Here are a few guidelines that will help you along the way.

## Summary

- [Your first Pull Request](#your-first-pull-request)
- [Sending a Pull Request](#sending-a-pull-request)
  - [How to increase the chance of being accepted?](#how-to-increase-the-chance-of-being-accepted)
  - [Coding style](#coding-style)

## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Sending a Pull Request

Toolbox is a community project, so Pull Requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Clone the repository to your local machine:

```bash
git clone https://github.com/DicoAuto/toolbox.git
cd toolbox
```

2. Install the dependencies:

```bash
npm install
```

3. Create a new feature branch:

```bash
git checkout -b my-feature-branch
```

4. Make changes and commit them:

```bash
git add file1 file2
git commit -m 'commit message'
```

The structure for commit message is the following:

`"topic/imperative-commit-message"`

Available topics:

- feature: newly added functionality
- chore: improvements of the existing functionality, related to the code coverage or quality
- bugfix: improvements of the existing functionality, related to fixing the errors and wrong behaviour
- docs: newly added or improved documentation

5.  push your branch to remote:

```bash
git push -u origin my-feature-branch
```

6. Go to [the repository](https://github.com/DicoAuto/toolbox) and make a Pull Request.

The team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.

### How to increase the chance of being accepted?

Continuous Integration (CI) runs a series of checks automatically when a Pull Request is opened. If you're
unsure if your changes will pass, you can always open a Pull Request, and the GitHub UI will display a summary
of the results. If any of them fail, refer to [Checks and how to fix them](#checks-and-how-to-fix-them).

Make sure the following is true:

<!-- #default-branch-switch -->

- The branch is targeted at `main` for ongoing development. All tests are passing. Code that lands in `main` must be compatible with the latest stable release. It may contain additional features but no breaking changes. We should be able to release a new minor version from the tip of `main` at any time.
- If a feature is being added:
  - If this is a common use case, consider adding an example to the Storybook documentation.
- When adding new features or modifying existing ones, please include tests to confirm the new behavior.
- If props were added or prop types were changed, the TypeScript declarations were updated.

Because we will only merge a Pull Request for which all tests pass. The following items need to be true:

- The code is formatted. If the code was changed, run `npm run format`.
- The code is linted. If the code was changed, run `npm run lint`.
- The tests pass. If new functionality was introduced, run `npm run test` and make sure it passed.
- The Pull Request title follows the pattern `topic/imperative-commit-message`. (See: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/) for a great explanation).

If you have missed a step, don't worry, the Continuous Integration will run a thorough test on your commits, and the maintainers of the project can assist.

### Coding style

Please follow the coding style of the project. Toolbox uses prettier and eslint, so if possible, enable linting in your editor to get real-time feedback.

- `npm run format` reformats the code.
- `npm run lint` runs manually the linting rules.

Finally, when you submit a Pull Request, they are run again by our continuous integration tools, but hopefully, your code is already clean!
