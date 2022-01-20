# Monorepoplate

This project demonstates a working monoreposetup.

## Setup

1. Clone.
2. run `npm install`
3. Start vscode (or maybe restart vscode)

## Some commands

Watch all files with typescript, and rebuild changed packages automatically

```bash
tsc -b -v -w -i
```

Create link from `node_modules\@suzieq\packagename` to `.\packages\packagename`

```bash
npm install   #:)
```

### Run a script

```bash
# In the current workspace
npm run eslint

# Across all workspaces
npm run eslint -ws

# For a specific workspace
npm run eslint -w .\packages\Products
npm run eslint -w @suzieq/products
```

### Add external npm package to local package

```bash
# change directory to monorepo root
cd .

# Use the syntax you prefer
npm install axios -w .\packages\Products
npm install axios -w @suzieq/products

```

### Add reference between two local packages

Open `package.json` and add this under `devDependencies` or `dependencies`.

See `package.json` for an example.

```json
    "@suzieq/emailhelper": "*",
```


## Two processes working together

Start in two terminal windows:

```bash
tsc -b -v -w -i
nodemon superbin\index.js
```

When a file is changed in a package, `tsc` will transpile to `bin` which reloads `nodemon`.

## Full article

I've written a very detailed article on the subject, it can be found here: ___


## Enjoy :)


