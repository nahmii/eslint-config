# README

## Introduction

This repository contains the Nahmii ESLint config. Use this config 
to make sure you are following the Nahmii JavaScript coding style.

## Installation

    npm install eslint @nahmii/eslint-config --save-dev

## Usage

Update your project's `.eslintrc.json` file to extend the `@nahmii/eslint-config`.

``` JSON
{
  "extends": "@nahmii"
}
```

## Contributing

To contribute to the development of this component, you need to clone the 
repository `https://github.com/nahmii/eslint-config.git`.

We also follow a few practices that we expect contributors to also adhere too.

### Practices

**Pull Request**

Don't just push a new branch and expect us to magically discover it and do 
something with it; also make sure you create a pull request for your branch 
where the changes can be examined and findings recorded in a organized manner.

If your changes address, either partially or fully, an open issue in the 
backlog, make sure to reference it in the description of your pull requests.

Also make sure to reference one or more of the admins of the repo and set them 
as reviewers for your pull request.

**Code Review**

As part of the pull requests all reviewers should as soon as possible provide 
constructive feedback on the pull request.

The reviewer should look at the following as a minimum:

    - Code quality, readability, maintainability, performance, security
    - Test code quality, coverage, readability, maintainability
    - Design of any public APIs, including documentation
    - Overall architecture of solution, does it fit with current designs
    - Missed oportunities: simplification of design, refactoring, invalidation 
      of previous assumptions

**Test Driven Development (TDD)**

Why? Because done right, the codebase becomes better and getting full test 
coverage becomes trivial. Always start by writing a test that turns *red*, then 
change your production code to turn it (and all other tests) *green* again. Then
do some refactoring as needed. Rinse and repeat. Follow the cycle 
"red-green-refactor" and don't leave any of the steps out! And yes, an 
experienced TDD practitioner can in most cases easily spot code that has not 
been created using TDD.

**Document API changes**

This API should be documented in the `api-docs.yaml` file using Swagger 3 syntax.

## Who do I talk to?

* [Jacobo Toll-Messia](mailto:jacobo@hubii.com)
* [Jens Ivar Jørdre](mailto:jensivar@hubii.com)
