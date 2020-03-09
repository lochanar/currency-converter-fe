# Currency Converter Frontend 

This repository hosts the FE application of the Currency Converter tool.

## Table of Contents
1. [Introduction](#introduction)
2. [Deployment Guide](#deployment-guide)
   - [How to Checkout](#how-to-checkout)
   - [How to Build](#how-to-build)
   - [How to Run Locally](#how-to-run-locally)   
3. [Features](#features)


## Introduction

**Technologies** <br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Dependencies** <br>
- [React](https://www.npmjs.com/package/react)
- [React DOM](https://www.npmjs.com/package/react-dom)
- [React Autocomplete](https://www.npmjs.com/package/react-autocomplete)
- [React Scripts](https://www.npmjs.com/package/react-scripts)
- [Bootstrap](https://getbootstrap.com/) 


## Deployment Guide

### How to Checkout
Checkout the codebase from GitHub:
```bash
$ git clone https://github.com/lochanar/currency-converter-fe.git
```

### How to Build
Run the following command in order to generate an optimized production build of the app. 

```bash
$ yarn build
```

What now?

Once you create the production build, you can serve the site using any of the options in [this guide](https://create-react-app.dev/docs/deployment/).

### How to Run Locally
#### Development Mode
The package manager used in this project is `yarn`. To install yarn, you can follow the [official guide](https://classic.yarnpkg.com/en/docs/install#debian-stable).

Once yarn is installed, navigate to the project root and execute the following command:
```bash
$ yarn
```
This will initialize and install all the required dependencies.

In order to run the app in the development mode:

```bash
$ yarn start
```

Visit [http://localhost:3000](http://localhost:3000) in the browser to use the app!

## Features


- Search for countries by name<br>
- View information about countries - flag, name, population, official currency<br>
- Convert an amount in SEK to a local currency<br>
- Update SEK amount in real time to see converted value in local currency<br>

