<div align="center">
  <h1>leboncoin.tech</h1>

  [![Build Status](https://travis-ci.org/leboncoin/leboncoin.github.io.svg?branch=develop)](https://travis-ci.org/leboncoin/leboncoin.github.io)
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/leboncoin/leboncoin.github.io/blob/develop/LICENSE)
  ![made with love](https://img.shields.io/badge/made%20with-love-green)

  Sources for [leboncoin.tech](https://leboncoin.tech) page.

</div>


## Setup

Use your package manager or npm to install gatsby-cli:

```sh
$ npm install -g gatsby-cli
```

Then install all the dependencies:

```sh
$ npm install 
```

## Required Environment

This project requires two environment variables to work
properly:

- `GITHUB_TOKEN`  
  A personal Github token you can create in your Github
  settings. This is used to fetch the various public
  repositories on our Github organization page.
- `YOUTUBE_TOKEN`  
  An API key for the YouTube API. This is used to fetch
  the latest videos from our YouTube channel.

## Start

Once all the dependencies have been installed and the
environment variables set, you can run gatsby in dev
mode:

```sh
$ gatsby develop
```

This will ensure the page is reloaded and the bundles
recompiled with every change without having to restart
Gatsby. 

## CI/CD

The `develop` branch gets merged every day into the `master` branch, 
effectively redeploying the site and fetching the new data. 
Both these branches are protected. To make changes to the site, a new
branch must be created and merged into `develop`.  