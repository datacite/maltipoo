# Maltipoo - DataCite Stylesheets

Sass files for DataCite services, built on top of [Bootstrap](https://getbootstrap.com/).

## Importing
Import into a JavaScript project using yarn to add directly from the GitHub repo. Specify the version in the command.<br>
example: `yarn add https://github.com/datacite/maltipoo#0.0.1`<br>

Import TypeScript/JavaScript constants from the package root:<br>
`import { DATACITE_PRIMARY_DARK_BLUE, DATACITE_PRIMARY_LIGHT_BLUE } from 'maltipoo';`<br>

Import the stylesheet into a `css` file<br>
`@import 'maltipoo/stylesheets/doi.min.css';`<br>

or a JavaScript file<br>
`import 'maltipoo/stylesheets/doi.min.css';`<br>

The legacy explicit dist path remains available if needed:<br>
`import 'maltipoo/dist/stylesheets/doi.min.css';`<br>

## Local development

Note: Node 22+ required (pinned in [`.tool-versions`](.tool-versions))

### Run directly on your OS
#### Prerequisites
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js v22.x](https://nodejs.org/en/) (includes [Corepack](https://nodejs.org/api/corepack.html))
- [Yarn 4](https://yarnpkg.com/) (installed automatically via Corepack from `packageManager` in `package.json`)

#### Install and build
1. `git clone https://github.com/datacite/maltipoo.git`
2. `cd maltipoo`
3. `corepack enable`
4. `yarn install`
5. `yarn build`

The generated JavaScript and TypeScript declaration files are placed in `dist`, and the generated `css` files are placed in `dist/stylesheets`

## Issues

Follow along via [Github Issues](https://github.com/datacite/maltipoo/issues).

## Notes on Patches/Pull Requests

* Fork the project
* Write tests for your new feature or a test that reproduces a bug
* Implement your feature or make a bug fix
* Do not mess with version or history
* Commit, push and make a pull request. Bonus points for topical branches.

## License
**maltipoo** is released under the [MIT License](https://github.com/datacite/maltipoo/blob/main/LICENSE).
