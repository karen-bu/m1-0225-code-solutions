# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  NPM, `node package manager` is a big library of open-source code for all developers to use. It is made of three parts. First is the website where you can search for the code. Second is the registry of all the code. Third is a command line that lets you directly publish code to the registry and website.

- What is a package?
  A package is a directory with one or more files in it, and also contains a file that gives information about the package.

- What are some other popular package managers?
  Other package managers include Yarn, PNPM, and Homebrew.

- How can you create a `package.json` with `npm`?
  You can create a `package.json` with `npm` with the command line `npm init --yes` or `-y` and then optionally giving some information about the `package.json`.

- What is a dependency and how do you add one to a package?
  A dependency is a package you 'depend' on for doing your own work. You can add one to the package by finding one you want to use on the npm website and using the command line `npm install` and the name of the dependency.

- What happens when you add a dependency to a package with `npm`?
  When you add a dependency to a package with `npm` it adds the depdency to the `package.json` file, and create a `node_modules` folder inside the home directory.

- What is a devDependency and how do you add one to a package?
  A devDependency is a package only used during development and testing, but not used when the website or application is deployed. You can add one to a package with the command line `npm install --save-dev`.

- How do you define and run `npm` scripts? Why are these useful?
  You can define an `npm` script by writing it into `package.json` and then run them with the `npm run` command line.
