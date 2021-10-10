
# Auth-CRUD

CRUD application with authentication.

## Installation

### Clone repo

``` bash
# clone the repo
$ git clone https://github.com/JainUdit/auth-crud.git

# go into app's directory
$ cd auth-crud

# install app's dependencies
$ npm install
```


### Basic usage

``` bash


# dev server with hot reload at http://localhost:3000
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to run the application
Navigate to [http://localhost:8000](http://localhost:8000) to make changes on local json server.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
therapeutic-admin-web-app
├── public/          #static files
│   └── index.html   #html template
│
├── src/  #project root
│   ├── App.js
│   ├── index.js
|   └── redux-app   # redux data
|       |-- action/ #folder for handle module action
|       ├── constants/  # contains constants
|       ├── components/  # views source
│       ├── containers/  # container source - template layout
|       |-- reducers/  # folder for handle dispatch payload
|       |-- routeHoc/  # handle private route
│       └── utils      # helper functions
│           ├── store.js   # template state example 
│           ├── history.js   # contains browserhistory 
│           └── ...
├── db.json
└── package.json

```
