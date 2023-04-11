# Welcome to Keyp Frontend-Components

> Frontend component packages for various applications

Our components are in the `components-soft-ui` directory and our Tailwind presets are in the `tailwind-presets`
directory.

## Links

Published from dev branch: https://keyp-ui-library-dev.surge.sh/
Published from main branch: https://keyp-ui-library.surge.sh/

## Usage 📖

1. Clone the repo and run `yarn install` to install the necessary dependencies. Make sure you're using a recent version of node (>= 16.0.0)
2. Navigate to the root directory of `components-soft-ui` and run `yarn start`. This script starts the styleguidist
   server.
3. In the same directory, run `yarn tailwindcss`. This script ensures our Tailwind styles are built and available to the
   styleguidist server.
4. Your server should now be running successfully!

### Deploying with Surge

Surge is a static web publishing service that lets us easily deploy our frontend components to a live URL.
Currently, our frontend components are deployed to https://keyp-frontend-components.surge.sh/
While testing, if you need a link to send to the design team you can easily deploy to a different link. However,
we will keep this link as the code representative of our components currently in production.
<br /><br />This is how you can deploy to surge:

1. CD into the components-soft-ui folder
2. Run `styleguidist build` to generate the styleguide directory with the bundled assets for deploy
3. Run `surge` and point to the styleguide folder
4. Should look like `/YOUR_LOCAL_PATH/frontend-components/components-soft-ui/styleguide`
5. Choose https://keyp-frontend-components.surge.sh/ as the domain to deploy the site if you want to deploy a new
   production build (you can create any other name for the domain if you want to deploy a test build to share with
   someone)
6. If you're unable to deploy to the production domain, send your email to Jacob so he can add you as a collaborator

### Using Yarn Link

To use `@usekeyp/components-soft-ui` and `@usekeyp/tailwind-presets` with other repositories locally, you'll have to use
yarn link. Yarn link is a command that allows you to create a symlink from a local package to another location on your
machine. This is useful when you are working on multiple packages that depend on each other and you want to test your
changes in one package while developing another.
To use yarn link, follow these steps:

Navigate to the root directory of the package that you want to create a symlink for. For example, while in
frontend-components, here's how to create a symlink for @usekeyp/components-soft-ui:

1. First enter `cd components-soft-ui` in your terminal.
2. Run the command `yarn link`. This will create a symlink for `@usekeyp/components-soft-ui` in the global yarn package
   registry.
3. Navigate to the root directory of the package that depends on `@usekeyp/components-soft-ui`.
4. Run the command `yarn link @usekeyp/components-soft-ui`. This will create a symlink from the dependent package to the
   linked package.

You can unlink a package by running `yarn unlink <package-name>`.

## Resources 🧑‍💻

- [Keyp Frontend Components](https://github.com/UseKeyp/frontend-components)
- [Yarn Link Docs](https://yarnpkg.com/cli/link)
- [Surge](https://surge.sh/)

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
