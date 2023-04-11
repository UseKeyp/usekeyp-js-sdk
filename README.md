<h1 align="center"><img width="600" style="border-radius: 30px;" src="https://raw.githubusercontent.com/UseKeyp/.github/main/Keyp-Logo-Color.svg"/></h1>
<h1 align="center">Welcome to Keyp Frontend-Components 👋</h1>
<p align="center">
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
  <a href="https://twitter.com/UseKeyp" target="_blank">
    <img alt="Twitter: UseKeyp" src="https://img.shields.io/twitter/follow/UseKeyp.svg?style=social" />
  </a>
</p>

> UI library package for various applications

Our components are in the `ui-library` directory.

## Links

Published from dev branch: https://keyp-ui-library-dev.surge.sh/
Published from main branch: https://keyp-ui-library.surge.sh/

## Usage 📖

1. Clone the repo and run `yarn install` to install the necessary dependencies. Make sure you're using a recent version of node (>= 16.0.0)
2. In the same directory, run `yarn tailwindcss`. This script ensures our Tailwind styles are built and available to the styleguidist server.
3. Navigate to the root directory of `ui-library` and run `yarn start`. This script starts the styleguidist
   server.
4. Your server should now be running successfully!

### Deploying with Surge

Surge is a static web publishing service that lets us easily deploy our frontend components to a live URL.
Currently, our frontend components are deployed to https://keyp-frontend-components.surge.sh/
While testing, if you need a link to send to the design team you can easily deploy to a different link. However, we will keep this link as the code representative of our components currently in production.
<br /><br />This is how you can deploy to surge:

1. CD into the ui-library folder
2. Run `styleguidist build` to generate the styleguide directory with the bundled assets for deploy
3. Run `surge` and point to the styleguide folder
4. Should look like `/YOUR_LOCAL_PATH/ui-library/styleguide`
5. Choose https://keyp-frontend-components.surge.sh/ as the domain to deploy the site if you want to deploy a new production build (you can create any other name for the domain if you want to deploy a test build to share with someone)
6. If you're unable to deploy to the production domain, send your email to Jacob so he can add you as a collaborator

## Resources 🧑‍💻

- [Surge](https://surge.sh/)

This repo is configured to use [Publish PR Packages](https://github.com/marketplace/actions/publish-pr-packages) to auto-publish packages for each pull request. Make sure you rename the template package name in `ci-release.yml` to your own package name.

## License 📝

Copyright © 2023 Nifty Chess, Inc.<br />
This project is MIT licensed.

[sponsor-keyp]: https://UseKeyp.com
