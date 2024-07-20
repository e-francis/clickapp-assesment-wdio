# Cl:ck App Assessment

This is a WDIO Mocha framework suite developed in TypeScript using Visual Studio Code(VsCode) and the POM(Page Object Model) test design pattern. The purpose of this automation suite is to automate a successfull check out process of an item on `https://www.saucedemo.com`.

## Features Automated

- `Login`
- `Add item to cart`
- `View item in cart`
- `Check out item in cart`
- `Logout`

## Project Structure

The project has the following directory structure:

- `tests\pageObjects`: Contains element selectors and methods that encapsulates the automation of an action performed on a page.
- `components\app.ts`: The app.ts file serves as a central component within our automation framework, orchestrating the interaction with various utility classes and page modules.
- `tests\specs`: Contains the spec files used to automate the testing of the functionality.

## Prerequisites

To set up and run the project, you will need the following:

- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en/) (v17 or higher)

## Setting up VSCODE

To enhance your development experience with VSCODE, it is recommended to install the following extensions:

- Prettier
- ES6 Mocha Snippets
- JavaScript and TypeScript Nightly

## Configuration Files

- [tsconfig.json]

The `tsconfig.json` file is a TypeScript configuration file that specifies the compiler options for the project. Here's a breakdown of the options used in the provided `tsconfig.json` file:

- `moduleResolution`: Specifies the module resolution strategy for TypeScript (in this case, "node" is used).
- `module`: Specifies the module system for TypeScript (set to "ESNext" for modern JavaScript modules).
- `types`: Specifies the TypeScript type definitions required for the project, including Node.js, WebDriverIO globals, expect-webdriverio, and @wdio/cucumber-framework.
- `target`: Specifies the ECMAScript version to compile to (set to "ES2022").
- `experimentalDecorators`: Enables support for experimental decorators in TypeScript.
- `emitDecoratorMetadata`: Enables emitting decorator metadata in TypeScript.

In the `tsconfig.json` file provided, the `include` property specifies which files or directories should be included in the TypeScript compilation process. Let's break down what each entry in the include array does:

- `tests`: This includes all files within the test directory in the TypeScript compilation process. Typically, contains test files used for testing the application.

- `wdio.android.conf.ts`: This includes the `wdio.conf.ts` file in the compilation process. This file contains configuration settings for the WebDriverI testing framework.

By including these directories and files, TypeScript ensures that all relevant files are considered during the compilation process. This ensures that TypeScript can properly resolve dependencies and perform type checking across the entire project.

- [wdio.conf.ts]: Serves as the configuration file for setting up and customizing the WebDriverIO test runner.

## Dependency Injection with tsyringe

This project utilizes tsyringe for dependency injection. It allows you to define dependencies as classes and automatically resolves them when needed.

## Installing the project

1. Clone the project from github using ```git clone https://github.com/e-francis/clickapp-assesment-wdio```
2. Run `npm install`

## Running the Tests

1. Open the project in VSCODE and then a terminal.
2. Run the following command:
   ```
   npm run test:all
   ```
   This command executes the command (`wdio run ./wdio.conf.ts`) and runs the WDIO configuration file it also runs the command to display the test result (`npx allure serve allure-results`), after the test has been successfully run.

Please note that you need to install the necessary dependencies using `npm install` before running the tests for the first time. Also give a give a few seconsa to allow the test results to be displayed.

Happy testing!
